<template>
  <div class="header">
    <div class="header-bg">
    </div>
    <div class="menu-wrapper">
      <div class="menu-box">
        <el-row :gutter="40" type="flex" justify="center">
          <el-menu :lg='16'
            class="el-menu-demo"
            mode="horizontal"
            background-color="#0068b7"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template class="el-submenu-title" slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'Home'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header >>> .el-menu--horizontal>.el-submenu .el-submenu__title
    height 40px
    line-height 40px
  .header
  .header-bg
    width: 100%
    height: 300px
    background: url("header.png") no-repeat
    background-size: 100% 300px
  .menu-wrapper
    width 100%
    background #0068b7
    .menu-box
      width 1347px
      margin 0 auto
      .el-row
        height 40px
        line-height 40px
        color #fff
        background #0068b7
        cursor pointer
        .el-menu--horizontal
          height 40px
          .el-menu-item
            height 40px
            line-height 40px
          .el-submenu
            height 40px
            line-height 40px
</style>
