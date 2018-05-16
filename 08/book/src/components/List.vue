<template>
<div>
   <Top>列表页</Top>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
           <img :src="book.bookCover">
         <div>
           <h4> {{book.bookName}} </h4>
           <p> {{book.bookInfo}} </p>
           <p class="price"> {{book.bookPrice}} </p>
           <button @click.stop="remove(book.bookId)">删除</button>
         </div>
       
        </router-link>
      </ul> <div class="more" @click="more">加载更多</div>
      </div>
      
</div>
</template>
<script>
import Top from "../base/Top";
import { pagination, removeBook } from "../api";
export default {
  data() {
    return { books: [], offset: 0, hasMore: true };
  },
  mounted() {
    // this.$refs.scroll.addEventListener('scroll',function(){
    // })
  },
  methods: {
    loadMore() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getData();
        }
      }, 60);
    },
    more() {
      this.getData();
    },
    async remove(id) {
      await removeBook(id);
      this.books = this.books.filter(item => item.boolId !== id);
    },

    async getData() {
      if (this.hasMore) {
        let { hasMore, books } = await pagination(this.offset);
        this.books = [...this.books, ...books];
        this.hasMore = hasMore;
        this.offset = this.books.length;
      }
    }
  },
  created() {
    this.getData();
  },
  computed: {},
  components: { Top }
};
</script>
<style scoped lang="less">
.content {
  ul {
    padding: 10px;
    li {
      display: flex;
      padding: 6px 0;
      border-bottom: 2px dashed #ccc;
      img {
        width: 120px;
        height: 120px;
      }
      div {
        button {
          display: block;
          width: 50px;
          height: 30px;
          border: none;
          background: rgb(153, 15, 123);
          color: rgb(255, 255, 255);
          border-radius: 15px;
          outline: none;
        }
        h4 {
          line-height: 30px;
        }
        p {
          color: #49aa7d;
          line-height: 24px;
        }
        .price {
          color: #d33d6f;
        }
      }
    }
  }
}
.more {
  margin: 10px;
  background: #49aa7d;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>