<template>
  <div @click="toHome">登录页</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.replace('/index')
    }
  },
};
</script>
<style lang='stylus' scoped></style>
