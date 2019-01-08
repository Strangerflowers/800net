<template>
    <div class="classify">
    	<Search></Search>
    	<div class="classify_left">
    		<ul>
    			<li v-for="(tab, idx) in tabs" 
    			:key="tab.cateName"
    			@click="gotolist(idx)"
    			:class="currentId==idx? current:''"
    			>{{tab.cateName}}</li>
    		</ul>
    	</div>
    	<div class="classify_right" >
    		<ClassRight  :brand="recommend" :datalist='goodslist'></ClassRight>>
    	</div>
    	
    </div>
</template>
<script>
	import ClassRight from './classifyRight';
	import Search from '../../components/Search';
export default {
	name:"ClassLeft",
	components:{
		ClassRight,
		Search
	},
	
    // https://api.380star.com/newbuyer/33/goods/catelist.do
    data(){
    	return {
    		tabs:[],
    		goodslist:[],
    		recommend:[],
    		currentId:0,
    		current:'current'
    		
    	}
    },
    methods:{
    	getData(){
    		this.$axios.post('https://api.380star.com/newbuyer/33/goods/catelist.do')
    		.then((res)=>{
    			console.log(res);
    			this.tabs=res.data.data.list;
    			this.goodslist=this.tabs[0].subList;
    			this.recommend=this.tabs[0].brandList
    			
    		})
    		.catch((error)=>{
    			console.log(error);
    		})
    	},
    	gotolist(idx){
    		// 将当前点击的idx给currentId
    		this.currentId=idx
    		this.goodslist=this.tabs[idx].subList;
    		this.recommend=this.tabs[idx].brandList
    		console.log(this.goodslist);
    		
    	}


    	/*********************************************************************************
    		server的跨域解决方案：
    	// getData(){
    		
    	// 	this.$axios.get(`http://localhost:12345/`,{
    	// 		params:{
    	// 			nav:'catelist.do',
    	// 		}
    	// 	})
    	// 	.then((res)=>{
    	// 		console.log(res);
    	// 		this.tabs=res.data.data.list;
    	// 		console.log(this.tabs);
    	// 	})
    	// 	.catch((error)=>{
    	// 		console.log(error);
    	// 	})
    	// },
    	// getData1(){
    		
    	// 	this.$axios.get(`http://localhost:12345/`,{
    	// 		params:{
    	// 			type:'categoodslist.do',
    	// 		}
    	// 	})
    	// 	.then((res)=>{
    	// 		console.log(res);
    	// 		this.tabs=res.data.data.list;
    	// 		console.log(this.tabs);
    	// 	})
    	// 	.catch((error)=>{
    	// 		console.log(error);
    	// 	})
    	// },
    	*************************************************************
    	*/

    },
    created(){
    	this.getData();
    	
    	
    },
    mounted(){
    	this.getData();
    	// if(this.tabs.length>0){
    	// 	this.goodslist=this.tabs[0].subList;
    	// 	this.recommend=this.tabs[0].brandList
    	// }else{
    	// 	console.log(666);
    	// }
    	
    }
}
</script>
<style type="text/css" lang="scss" scoped>
	.classify{
		
		.classify_left{

			background-color:#f2f2f2;
			float:left;
			width:rem(105px);
			height:100%;
			ul{
				li{
					width:rem(105px);
					height:rem(46px);
					font-size:rem(16px);
					line-height:rem(46px);
					color:#333;
					border-bottom:1px solid #eee;
				}
				.current{
					background-color:#fff;
				}
			}
		}
		.classify_right{
			width:rem(269px);
			height:rem(1000px);
			float:right;
			
		}
	}
</style>
