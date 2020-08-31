<template>
  <section class="recommend">
    <div class="recommend-title">推荐商品</div>
    <van-card
      v-for="(item, index) in recommendList"
      :key="index"
      :price="item.currentPrice"
      :title="item.productName"
      :thumb="item.imgUrl"
      :origin-price="item.originalPrice"
      @click="toDetail(item.productId)"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // props: ['recommendList'],
  // data() {
  //   return {
      
  //   }
  // }
  computed: {
    // recommendList() {
    //   return this.$store.state.recommendList
    // }
    ...mapState(['recommendList'])
  },
  methods: {
    toDetail(id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>