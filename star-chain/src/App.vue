<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import axios from 'axios';

import Footer from './components/Footer';
import Home from './page/Home/home.vue';
import Classify from './page/Classify/classify.vue';
import Cart from './page/Cart/cart.vue';
import User from './page/User/user.vue';


// 引入mint-ui全部组件
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
  // console.log(this.$axios.interceptors)
// 把axios写入vue的原型对象，方便后面调用
Vue.prototype.$axios = axios;


// loading
import { Indicator } from 'mint-ui';


console.log(this);
// http请求拦截器
axios.interceptors.request.use((config) => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
  //  在发送请求之前做一些事情
    return config;
}, (err) => {
    return Promise.reject(err)
})
// http响应拦截器
axios.interceptors.response.use((response) => {
    Indicator.close(); //关闭loading
    //  用响应数据做一些事情
    return response;
}, (err) => {
    return Promise.reject(err);
})

export default {
  name: 'App',
  components: {
    Home,
    Classify,
    Cart,
    User,
    Footer
  }
}
</script>

<style>
*{padding:0;margin:0}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
