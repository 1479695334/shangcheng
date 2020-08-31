<template>
  <div class="detail-containe">
      <van-nav-bar
      title="商品详情"
      fixed
      placeholder
      z-index="10"
      left-arrow
      @click-left="onClickLeft"
    />

     <!-- 商品轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="swipeChange">
      <van-swipe-item 
        v-for="(item, index) in detailInfo.imgArr" 
        :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ detailInfo.imgArr ? detailInfo.imgArr.length : 0 }}
        </div>
      </template>  
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
        id: '',
      current: 0
    };
  },
  mounted() {

  },
computed: {
    ...mapState(['detailInfo'])
},methods: {
     onClickLeft() {
      this.$router.go(-1)
    },
    swipeChange(index) {
      this.current = index
    }
},
  
};
</script>
<style lang='stylus' scoped>
.detail-container
  .van-icon-arrow-left
    color #333
  .my-swipe
    width: 100%;
    height: 240px;
    img 
      width: 100%;
      height: 100%;

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
