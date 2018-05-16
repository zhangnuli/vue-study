import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000"; //增加默认的请求路径

axios.interceptors.response.use(res => res.data);

//获取轮播图数据  返回的是一个promise对象
export let getSliders = () => {
  return axios.get("/sliders");
};

//获取热门图书数据
export let getHotBook = () => {
  return axios.get("/hot");
};

//获取全部图书
export let getBooks = () => {
  return axios.get("/book");
};

//删除某一本图书
export let removeBook = id => {
  return axios.delete(`/book?id=${id}`);
};

//获取某一本图书
export let findOneBook = id => {
  return axios.get(`/book?id=${id}`);
};

//修改图书
export let updataBook = (id, data) => {
  return axios.put(`/book?id=${id}`, data);
};

//添加图书
export let addBook = data => {
  return axios.post("/book", data);
};

export let getAll = () => {
  return axios.all([getSliders(), getHotBook()]);
};

export let pagination = offset => {
  return axios.get(`/page?offset=${offset}`);
};
