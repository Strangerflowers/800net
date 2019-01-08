<template>
	<div class="goodslit">
		<Search></Search>
		<div class="good_head"> 
		   	<ul class="ui-tab-nav"> 
		    	<li  class="shop">星链商品</li>
		    	<li class="store">小店商品</li> 
		   	</ul> 
		   	<div class="row-sort border-t border-b"> 
		    	<ul> 
		     		<li class="s-name flexbox-item on">
		     			综合
		     		</li> 
		     		<li class="item-order flexbox-item">
		     			
		     				销量<i></i>
		     			
		     		</li> 
		     		<li class="iconfont icon-leimupinleifenleileibie">
		     			
		     				价格<i></i>
		     			
		     		</li> 
		   	 	</ul> 
			    <div class="icon-change icon-list2"></div> 
			    <div class="item-fliter">
			     	筛选
			    </div> 
		   </div> 
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import Search from '../../components/Search';
	var querystring = require('querystring'); 
	export default{
		name:'Goods',
		components:{
			Search
		},
		data(){
			return {
				
			}
		},
		methods:{
			getData(){
				var currentId=localStorage.getItem("storageId");
				console.log('11',currentId)
				this.$axios.post('/store/newbuyer/33/goods/categoodslist.do',querystring.stringify({
					pagenum: 1,
					pagesize: 20,
					goodstype: 2,
					order: 0,
					filtershipping: 2,
					filterprovince: 0,
					subcategoryid: currentId,
					
				}))
	    		.then((res)=>{
	    			console.log(res);
	    			// this.tabs=res.data.data.list;
	    			// this.goodslist=this.tabs[0].subList;
	    			// this.recommend=this.tabs[0].brandList
	    			
	    		})
	    		.catch((error)=>{
	    			console.log(error);
	    		})
			}
		},
		created(){
			this.getData();
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

			}
			.row-sort{
				width:rem(375px);
				height:rem(46px);
				ul{
					li{
						font-size:rem(14px);
						overflow:hidden;
					}
				}
			}
		}
	}
</style>