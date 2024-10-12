<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="img-container">
        <img src="../assets/R.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--页面主题区域-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">Aside</el-aside>
      <!--右侧内容主题-->
      <el-main>
        <div class="img-show">
          <!--图片轮播-->
          <el-carousel indicator-position="outside"  style="width: 100%;">
            <el-carousel-item v-for="item in imgArray" :key="item">
              <img :src="item" class="rightImg">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      imgArray: [
        require('../assets/img/1.png'),
        require('../assets/img/2.png'),
        require('../assets/img/3.png')
      ]
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #7AC5CD;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #8eb3b7;
  }

  .el-main {
    background-color: #6a888c;
  }

  .img-container img {
    width: 5%;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .rightImg {
    width: 100%;
    height: 540px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
