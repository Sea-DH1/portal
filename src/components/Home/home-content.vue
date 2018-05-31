<template>
  <div class="home-content">
    <el-row :gutter="40" type="flex" justify="center">
      <el-col :lg='10'>
        <div class="block">
          <el-carousel height="400px" interval="5000">
            <el-carousel-item v-for="item of swiperList" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :lg='6'>
        <el-tabs type="border-card">
          <el-tab-pane label="商品房交易">
            <div v-for="item of houseList" :key="item.id">
              <a>{{item.text}}</a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="二手房交易">
            <div v-for="item of houseList" :key="item.id">
              <a>{{item.text}}</a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home-content',
    data() {
      return {
        tabPosition: 'top',
        swiperList: [
          {
            id: '01',
            imgUrl: './static/img/banner.png'
          },
          {
            id: '02',
            imgUrl: './static/img/banner.png'
          },
          {
            id: '03',
            imgUrl: './static/img/banner.png'
          }
        ],
        houseList: [
          {
            id: '01',
            text: '[2018-05-01]XX小区6栋5106单位'
          },
          {
            id: '02',
            text: '[2018-05-02]XX小区6栋5106单位'
          },
          {
            id: '03',
            text: '[2018-05-03]XX小区6栋5106单位'
          },
          {
            id: '04',
            text: '[2018-05-04]XX小区6栋5106单位'
          },
          {
            id: '05',
            text: '[2018-05-05]XX小区6栋5106单位'
          }
        ]
      }
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home-content
    .swiper-img
      width 100%
      height 400px
</style>
