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
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
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
    width: 10%;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
  }

</style>
