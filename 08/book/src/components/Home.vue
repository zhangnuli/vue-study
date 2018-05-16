<template>
<div>
    <Top>首页</Top>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
      <ul>
        <li v-for="hot in hotBooks">
          <img :src="hot.bookCover">
          <b>{{hot.bookName}}</b>
        </li>
      </ul>
      </div>
      </template>
    </div>
    
</div>
</template>
<script>
import Top from "../base/Top";
import Swiper from "../base/Swiper";
import { getAll } from "../api";
import Loading from "../base/Loading"
export default {
  created() {
    // this.getSlider(); //获取轮播图
    // this.getHot(); //获取最新图书
    this.getData();
  },
  data() {
    return { sliders: [], hotBooks: [], loading: true };
  },
  methods: {
    // async getSlider() {
    //   this.sliders = await getSliders();
    // },
    // async getHot() {
    //   this.hotBooks = await getHotBook();
    // }

    async getData() {
      let [sliders, hotBooks] = await getAll();
      this.sliders = sliders;
      this.hotBooks = hotBooks;
      this.loading = false;
    }
  },
  computed: {},
  components: {
    Top,
    Swiper,
    Loading
  }
};
</script>
<style scoped lang="less">
.container {
  h3 {
    color: #999;
    padding: 5px 0;
  }
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>