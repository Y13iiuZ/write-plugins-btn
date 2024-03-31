<template>
  <div>
    <h2 style="color: red;">图书网店</h2>
    <div class="nav">
      <div><router-link to="/home">首页</router-link></div>
      <div><router-link to="/login">登录</router-link></div>
      <div><router-link to="/searchnav">图书浏览</router-link></div>
      <div><router-link to="/cart">购物车</router-link></div>
      <div><router-link to="/cartbrowse">购物车浏览</router-link></div>
      <div><router-link to="/news">新闻咨询</router-link></div>
      <div><router-link to="/playpinia">来玩pinia</router-link></div>
      <div><router-link to="/orderlist">order预览</router-link></div>
    </div>
  </div>
  <router-view></router-view>
  <ztxBtn>主要按钮</ztxBtn>
  <ztxBtn type="warning">警告按钮</ztxBtn>
  <ztxBtn type="success">成功按钮</ztxBtn>
  <Footer></Footer>
</template>

<script>
import Echarts from './components/echarts.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {

  components: {
    Footer,
    Header,
    Echarts,
  },
  created() {

    Promise.resolve().then(() => {
      console.log('statrt Created');
    })


  },
  mounted() {
    console.log('statrtmounted');
    Promise.resolve().then(() => {
      console.log('Mounted');
    })
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #98F5FF;
  height: 100px;
}

a {
  text-decoration: none;
}
</style>
