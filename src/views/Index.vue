<template>
  <div class="index-container">

    <!-- 头部 -->
    <van-nav-bar
      title="首页"
      fixed
      placeholder
      z-index="10"
      class="bar"
    />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" 
      :autoplay="3000" 
    >
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <van-grid :border="true" :column-num="4">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <p>每日福利</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <p>热销榜</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <p>皮鲁甄选</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <p>会员福利</p>
      </van-grid-item>
    </van-grid>
<!-- 中心 -->
    <van-grid :column-num="2">
  <van-grid-item 
      v-for="value in 4" 
      :key="value" 
      icon="photo-o" 
      text="文字" 
      border/>
    </van-grid>

    <van-card
  v-for="(item, index) in recommendList"
  :key="index"
  :price="item.currentPrice"
  :title="item.productName"
  :origin-price="item.originalPrice"
  :thumb="item.imgUrl"
  @click="toDetail(item.productId)"
>
</van-card>
<recommend/>
  </div>
</template>

<script>
import { getIndexBanner, getRecommendList } from '../utils/api'
export default {
  data() {
    return {
      bannerList: [],
      count: 10,
      page: 1,
      recommendList: [],
    };
  },
  mounted() {
    this.getBanner()
    this.getRecommend()
  },
  methods: {
    async getBanner() {
      // axios.get('http://www.pudge.wang:3001/home/banner')
      //   .then((response) => {
      //     const { data } = response
      //     if( data.status === '0') {
      //       this.bannerList = data.result.list
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   }); 
      const result = await getIndexBanner()
      this.bannerList = result.result.list
    },
    async getRecommend() {
      const result = await getRecommendList({
        count: this.count,
        page: this.page
      })
      this.recommendList = result.result.list
      console.log(this.recommendList)
    },
    
  },
};
</script>

<style lang='stylus' scoped>
.my-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
p {
  margin: 0;
  font-size: 14px;
}
</style>
