<template>
<div class="detail">
    <Top :back="true">详情</Top>
      <ul>
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
          <button @click="updata">确认</button>
        </li>
      </ul>

</div>
</template>
<script>
import Top from "../base/Top";
import { findOneBook,updataBook } from "../api";
export default {
  data() {
    return { book: {} };
  },
  watch: {
    $route() {
      //深度监视路径变化 重新获取数据
      this.getData();
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async updata(){
      await updataBook(this.bid,this.book);
      this.$router.push('/list');
    },
    async getData() {
      this.book = await findOneBook(this.bid);
      //如果是空对象 需要跳转到列表页
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push("/list");
    }
  },
  computed: {
    bid() {
      return this.$route.params.bid;
    }
  },
  components: { Top }
};
</script>
<style scoped lang="less">
.detail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: #ffffff;
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
}
</style>