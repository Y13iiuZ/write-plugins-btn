<template>
  <div>
    <h1 style="color: red;">图书网店</h1>
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
  <ztxBtn type="warning" v-ztx="0">警告按钮</ztxBtn>
  <ztxBtn type="success" v-ztx="1">成功按钮</ztxBtn>
  <compComponent />
  <compComponent>我是props</compComponent>
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
    this.$print();
  },
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
