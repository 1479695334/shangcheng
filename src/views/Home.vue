<template>
  <div>
    <router-view></router-view>
    <van-tabbar 
      v-model="active" 
      active-color="orange" 
      inactive-color="#000" 
      z-index="10"
      route
      placeholder
      @change="onChange">
      <van-tabbar-item 
        :icon="item.icon" 
        v-for="(item, index) in tabList" 
        :key="index"
        :to="item.to"
      >{{ item.label }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          icon: 'home-o',
          label: '首页',
          to: '/index'
        },
        {
          icon: 'search',
          label: '分类',
          to: '/classify'
        },
        {
          icon: 'friends-o',
          label: '购物车',
          to: '/cart'
        },
        {
          icon: 'setting-o',
          label: '我的',
          to: '/mine'
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      console.log(index)
    }
  }
};
</script>
<style lang='stylus' scoped></style>
