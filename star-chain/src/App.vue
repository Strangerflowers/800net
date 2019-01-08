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


// 把axios写入vue的原型对象，方便后面调用
Vue.prototype.$axios = axios;

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
