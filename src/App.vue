<template>
  <div id="app">
    <el-container>
      <el-header>
        <home></home>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import Home from 'components/Home/Home'

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    .el-header, .el-footer
      background-color: #B3C0D1;
      color: #fff;
      text-align: center;
      padding: 0
      height 300px !important

    .el-main
      background-color: #fff;
      text-align: center;
      margin 40px
</style>
