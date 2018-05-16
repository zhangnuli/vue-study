<template>
<div>
   <Top>添加</Top>
   <div class="content">
       <ul>
         <li>
          <label for="bookCover">书的封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
   </div>
</div>
</template>
<script>
import Top from '../base/Top';
import {addBook} from '../api';
export default {
  data() {
    return {
      book:{}
    };
  },
  methods: {
    async add(){
      await addBook(this.book);
      this.$router.push('/list');
    }
  },
  computed: {},
  components: {Top}
};
</script>
<style scoped lang="less">

  ul {
    margin: 50px 10px 0 10px;
    li {
      label {
        display: block;
        font-size: 25px;
      }
      input {
        height: 30px;
        width: 100%;
      }
      button {
        background: #479fe7;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        padding: 15px;
        width: 70px;
        display: block;
        margin: 5px auto 0;
        outline: none;
      }
    }
  }

</style>