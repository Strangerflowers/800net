<template>
	<div class="goodslit">
		<Search></Search>
		<div class="good_head"> 
		   	<ul class="ui-tab-nav"> 
		    	<li  class="shop " :class="on?select:''" @click="tab1" >星链商品</li>
		    	<li class="store" :class="on1?select:''"  @click="tab">小店商品</li> 
		   	</ul> 
		   	<div class="row-sort border-t border-b"> 
		    	<ul> 
		     		<li class="s-name flexbox-item on">
		     			综合
		     		</li> 
		     		<li class="item-order flexbox-item">
		     			
		     				销量<i></i>
		     			
		     		</li> 
		     		<li class="">
		     			
		     				价格 <i ></i>
		     			
		     		</li> 
		   	 	</ul> 

			    <div class="icon">
			    	<i class="iconfont icon-leimupinleifenleileibie"></i>
			    </div> 
			    <div class="item-fliter">
			     	筛选
			    </div> 
		   </div> 
		</div>
		<div class="shoplist" v-if="on">
			<div class="g-list">
				<ul  v-infinite-scroll="loadMore"
						
						infinite-scroll-distance="10">
					<li v-for="(good, index) in goodslist" :key="index" >
						<div class="g-list-left">
							<img :src="good.goodsLogo">
						</div>
						<div class="g-list-right">
							<div class="g-list-con">
								<div class="g-list-head">
									<p>{{good.goodsName}}</p>
								</div>
								<div class="baoyou" v-show="good.eptitle">
									<span>{{good.eptitle}}</span>
								</div>
								<div class="g-list-price">
									<p class="price">￥ <span >{{good.goodsPrice}}</span></p>
									<p class="sell">销量{{good.goodsSales}}</p>
								</div>
							</div>
							<div class="g-list-store">
								<i class="iconfont  icon-dianpu"></i>
								<p> {{good.shopName}} ></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="shoplist" v-if="on1">
			<div class="g-list">
				<ul  v-infinite-scroll="loadMore"
						
						infinite-scroll-distance="10">
					<li v-for="(good, index) in storelist" :key="index" >
						<div class="g-list-left">
							<img :src="good.goodsLogo">
						</div>
						<div class="g-list-right">
							<div class="g-list-con">
								<div class="g-list-head">
									<p>{{good.goodsName}}</p>
								</div>
								<div class="baoyou" v-show="good.eptitle">
									<span>{{good.eptitle}}</span>
								</div>
								<div class="g-list-price">
									<p class="price">￥ <span >{{good.goodsPrice}}</span></p>
									<p class="sell">销量{{good.goodsSales}}</p>
								</div>
							</div>
							<div class="g-list-store">
								<i class="iconfont  icon-dianpu"></i>
								<p> {{good.shopName}} ></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Search from '../../components/Search';
	import Vue from 'vue';
	// 无限滚动
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);


	var querystring = require('querystring'); 
	export default{
		name:'Goods',
		components:{
			Search
		},
		data(){
			return {
				goodslist:[],
				storelist:[],
				currentPages:1,
				select:'select',
				on:true,
				on1:false
				
			}
		},
		methods:{
			getData(){
				var currentId=localStorage.getItem("storageId");
				
				this.currentPages++
				console.log('11',currentId);
				this.loading=true;
				this.$axios.post('/store/newbuyer/33/goods/categoodslist.do',querystring.stringify({
					pagenum: this.currentPages,
					pagesize: 20,
					goodstype: 2,
					order: 0,
					filtershipping: 2,
					filterprovince: 0,
					subcategoryid: currentId,
					
				}))
	    		.then((res)=>{
	    			console.log(res);
	    			// this.goodslist=res.data.data.list;
	    			this.goodslist=this.goodslist.concat(res.data.data.list)
	    			console.log(this.goodslist);
	    			
	    		})
	    		.catch((error)=>{
	    			console.log(error);
	    			// this.loading=false;
	    		})
			},
			getStore(){

				var currentId=localStorage.getItem("storageId");
				
				this.currentPages++
				console.log('11',currentId);
				this.loading=true;
				this.$axios.post('/store/newbuyer/33/goods/categoodslist.do',querystring.stringify({
					pagenum: this.currentPages,
					pagesize: 20,
					goodstype: 1,
					order: 0,
					filtershipping: 2,
					filterprovince: 0,
					longitude: 114.05437526059394,
					latitude: 22.544932422150616,
					subcategoryid: currentId,
					
				}))
	    		.then((res)=>{
	    			console.log(res);
	    			// this.goodslist=res.data.data.list;
	    			this.storelist=this.storelist.concat(res.data.data.list)
	    			console.log(this.storelist);
	    			
	    		})
	    		.catch((error)=>{
	    			console.log(error);
	    			// this.loading=false;
	    		})
			},

			loadMore() {
				console.log("触发加载");
				this.getData();
				this.getStore();
				
			},
			tab(){
				this.on=false;
				this.on1=true;
				this.getStore();
			},
			tab1(){
				this.on=true;
				this.on1=false;

			}
		},
		created(){
			// this.getData();
		}
	}
</script>
<style  lang="scss" scoped>
	.goodslit{
		width:rem(375px);
		.good_head{
			width:rem(375px);
			
			.ui-tab-nav{
				padding-left:rem(48px);
				padding-bottom:rem(11px);
				overflow:hidden;
				border-bottom:1px solid #ccc;
				li{
					float:left;
					width:rem(139px);
					height:rem(32px);
					font-size:rem(14px);
					line-height:rem(32px);
					text-align:cneter;
					border:1px solid #fa5e71;
					color:#fa5e71;
				}
				.store{
					border-bottom-right-radius:rem(10px);
					border-top-right-radius:rem(10px);
				}
				.shop{
					border-top-left-radius:rem(10px);
					border-bottom-left-radius:rem(10px);
				}
				.select{
					background-color::#fa5e71;
					color:#fff;
				}

			}
			.row-sort{
				border-bottom:1px solid #ccc;
				padding-left:rem(17px);
				padding-right:rem(17px);
				width:rem(375px);
				height:rem(46px);
				display:inline-block;
				ul{
					width:rem(238px);
					height:rem(46px);
					float:left;
					display:inline-block;
					li{
						font-size:rem(14px);
						float:left;
						width:rem(80px);
						height:rem(46px);
						line-height:rem(46px);
						&:nth-child(1){
							width:rem(51px);
						}
					}
				}
				.icon{
					width:rem(23px);
					height:rem(46px);
					float:left;
					line-height:rem(46px);
					margin-top:-6px;
					i{
						display:inline-block;
						height:rem(44px);
						line-height:rem(44px);
					}
				}
				.item-fliter{
					width:rem(49px);
					height:rem(46px);
					float:right;
					font-size:rem(14px);
					line-height:rem(46px);
				}
			}
		}
		.shoplist{
			width:rem(375px);
			height:100%;
			.g-list{
				ul{
					width:rem(363px);
					margin:0 auto;
					li{
						padding:rem(11px) rem(3px) rem(11px) rem(3px);
						width:rem(363px);
						height:rem(142px);
						font-size:rem(12px);
						.g-list-left{
							width:rem(93px);
							height:rem(93px);
							float:left;
							img{
								width:rem(93px);
								height:rem(93px);
								display:inline-block;
							}
						}
						.g-list-right{
							float:left;
							text-align:left;
							width:rem(250px);
							height:rem(120px);
							margin-left:rem(10px);
							.g-list-con{
								height:rem(93px);
								width:rem(250px);
								.g-list-head{
									width:rem(250px);
									height:rem(37px);
									font-size:rem(14px);
									color:#333;
									display:inline-block;
									line-height:rem(18px);
									
								}
								.baoyou{
									width:rem(250px);
									height:rem(22px);
									line-height:rem(22px);
									color: #fa5e71;
									span{
										border: solid 1px #fa5e71;
										width:rem(38px);
										height:rem(15px);
										padding:rem(1px) rem(5px) rem(1px) rem(5px);
										border-radius:rem(3px);
									}
								}
								.g-list-price{
									margin-top:rem(10px);
									width:rem(250px);
									height:rem(17px);
									p{
										display:inline-block;
									}
									.price{
										float:left;
									}
									.sell{
										float:right;
									}
								}
							}
							.g-list-store{
								
								color:#999;
								i{
									width:rem(21px);
									height:rem(17px);
									display:inline-block;
								}
								p{
									display:inline-block;
								}
							}
						}
					}
				}
			}
		}
	}
</style>