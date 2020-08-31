<template>
  <div class="classify-container">
    <van-nav-bar
      title="分类"
      fixed
      placeholder
      z-index="10"
      class="bar"
    />
    <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  input-align="left"
  focus="event: Event"
/>
<section class="main">
      <!-- 左侧导航 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item, index) in sidebarList" 
          :key="index" 
          :title="item.title"
          @click="sidebarChange(item.id)"
        />
        <!-- <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" /> -->
      </van-sidebar>

      <!-- 右侧列表 -->
      <ul>
        <li v-for="(item, index) in classifyList" :key="index" class="van-hairline--surround">
          <img :src="item.imgUrl" alt="">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      activeKey: 0,
      value: '',
       type: '1',
       sidebarList: [
        {
          title: '推荐分类',
          id: '1'
        },
        {
          title: '全球奶粉',
          id: '2'
        },
        {
          title: '尿不湿',
          id: '3'
        }
      ]
    };
  },
  computed: {
    ...mapState([
      'classifyList'
    ])
  },
  mounted() {
    this.$store.dispatch('getClassifyList', {
      type: this.type
    })
  },
  methods: {
    sidebarChange(id) {
      // console.log(this.sidebarList[index].id)
      // console.log(id)
      this.type = id
      // 每次点击也要做请求
      this.$store.dispatch('getClassifyList', {
        type: this.type
      })
    }  
  }
}
</script>
<style lang='stylus' scoped>
.classify-container
  .main 
    width 100%
    display flex
  .van-sidebar-item--select::before 
    background orange 
  ul
    flex 1
    display flex
    flex-wrap wrap
    align-content flex-start
    li 
      width 33.3%
      height 130px
      display flex
      flex-direction: column
      justify-content center
      align-items center
      img 
        width 80px
        height 80px
      span 
        font-size 14px
        width 100%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        text-align center
</style>
