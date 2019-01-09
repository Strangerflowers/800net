import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home/home.vue';
import Cart from '../page/Cart/cart.vue';
import Classify from '../page/Classify/classify.vue';
import User from '../page/User/user.vue';
import Goods from '../page/Goodslist/goodslist.vue';



const routes = [
	// {path:'/',redirect:{name:'Home'}}
	{path:'/',redirect:{name:'Home'}},  //重定向
	{name:'Home',path:'/home',component:Home},
	{name:'Classify',path:'/classify',component:Classify},
	{name:'Cart',path:'/cart',component:Cart},
	{name:'User',path:'/user',component:User},
	{name:'Goods',path:'/goodslist',component:Goods}
]


let router = new VueRouter({
	routes
})

export default router;

