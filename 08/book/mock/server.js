let http = require("http");
let fs = require("fs");
let url = require("url");

let pageSize = 5;

let sliders = require("./sliders.js");
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT,POST,GET,DELETE,OPTIONS"
    );
    res.setHeader("X-Powered-By", " 3.2.1");
    if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
    let { pathname, query } = url.parse(req.url, true);

    if (pathname === '/page') {
      let offset = parseInt(query.offset) || 0;
      read(function(books) {
        let result = books.reverse().slice(offset, offset + pageSize);
        let hasMore = true;
        if (books.length <= offset + pageSize) {
          hasMore = false;
        }
        res.setHeader("Content-type", "application/json;charset=utf-8");
        res.end(JSON.stringify({ hasMore, books: result }));
      });
      return;
    }

    if (pathname === "/sliders") {
      return res.end(JSON.stringify(sliders));
    }
    if (pathname === "/hot") {
      read(function(books) {
        let hot = books.reverse().slice(0, 6);
        res.setHeader("Content-type", "application/json;charset=utf-8");
        setTimeout(() => {
          res.end(JSON.stringify(hot));
        }, 2000);
      });
      return;
    }
    if (pathname === "/book") {
      let id = parseInt(query.id);
      switch (req.method) {
        case "GET":
          if (typeof id !== "undefined" && !isNaN(id)) {
            read(function(books) {
              let book = books.find(item => item.bookId === id);
              if (!book) book = {};
              res.setHeader("Content-type", "application/json;charset=utf-8");
              res.end(JSON.stringify(book));
            });
          } else {
            read(function(books) {
              res.setHeader("Content-type", "application/json;charset=utf-8");
              res.end(JSON.stringify(books.reverse()));
            });
          }
          break;
        case "POST":
          let str = "";
          req.on("data", chunk => {
            str += chunk;
          });
          req.on("end", () => {
            let book = JSON.parse(str);
            read(function(books) {
              book.bookId = books.length
                ? books[books.length - 1].bookId + 1
                : 1;
              books.push(book);
              write(books, function() {
                res.end(JSON.stringify(book));
              });
            });
          });
          break;
        case "PUT":
          if (id) {
            let str = "";
            req.on("data", chunk => {
              str += chunk;
            });
            req.on("end", () => {
              let book = JSON.parse(str);
              read(function(books) {
                books = books.map(item => {
                  if (item.bookId === id) {
                    return book;
                  }
                  return item;
                });
                write(books, function() {
                  res.end(JSON.stringify(book));
                });
              });
            });
          }
          break;
        case "DELETE":
          read(function(books) {
            books = books.filter(item => item.bookId !== id);
            write(books, function() {
              res.end(JSON.stringify({})); //删除返回空对象
            });
          });
          break;
      }
      return;
    }
  })
  .listen(3000);

function read(cb) {
  fs.readFile("./book.json", "utf8", function(err, data) {
    if (err || data.length == 0) {
      cb([]); //如果有错误 或者文件没长度 就是空数组
    } else {
      cb(JSON.parse(data)); //将读出类的内容转化为对象
    }
  });
}

function write(data, cb) {
  fs.writeFile("./book.json", JSON.stringify(data), cb);
}
// read(function(books){

// })
