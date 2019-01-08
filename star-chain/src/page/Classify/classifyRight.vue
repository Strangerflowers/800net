<template>
	<div class="classify_right" >
		<div class="hot">
			<h4>热门分类</h4>
    		<ul>
    			<li class="right_list" v-for="(good, index) in datalist" @click="gotolist(index)" >
    				 <img :src="good.logoUrlS"/>
    				 {{good.subCateName}}  
    			</li>
    		</ul>
		</div>
		<div class="brand">
			<h4>推荐品牌</h4>
    		<ul class="brand_b">
    			<li class="right_list" v-for="rand in brand"  >
    				<img :src="rand.brandLogo"/>
    				{{rand.brandName}}
    			</li>
    		</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'ClassRight',
		components:{},
		props:[
			"datalist",
			"brand"
		],
		data(){
			return {
				// goodslist:[],
    // 			recommend:[],
    			currentId:"",
			}
		},
		methods:{
			// https://api.380star.com/newbuyer/33/goods/categoodslist.do   列表页数据subCateId
			gotolist(index){
				this.currentId=index;
				
				// 点击的时候将当前点击的id保存到localStorage
				// localStorage.storageId=JSON.stringify(this.datalist[index].subCateId)
				localStorage.setItem("storageId",this.datalist[index].subCateId)
				this.$router.push({name:'Goods'})
				console.log(this.datalist[index].subCateId)
			}
		},
		mounted(){
			console.log('1223',this.datalist);

		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.classify_right{
			width:rem(269px);
			
			float:right;
			.hot{
				border-bottom:1px solid #ccc;
				h4{
					font-size:rem(14px);
					height:rem(46px);
					width:rem(269px);
					line-height:rem(46px);
					text-align:left;
					padding-left:rem(17px);
				}
				ul{
					display:block;
					margin-left:rem(17px);
					overflow:hidden;
					.right_list{
						width:rem(70px);
						height:rem(97px);
						font-size:rem(14px);
						float:left;
						margin-right:rem(12px);
						margin-buttom:rem(5px);
						img{
							width:rem(70px);
							height:rem(70px);
						}
						.current{
							background:#fff;
						}
					}
				
				}
			}
			.brand{
				
				h4{
					font-size:rem(14px);
					height:rem(46px);
					width:rem(269px);
					line-height:rem(46px);
					text-align:left;
					padding-left:rem(17px);
				}
				ul{
					display:block;
					margin-left:rem(17px);
					overflow:hidden;
					.right_list{
						width:rem(70px);
						height:rem(97px);
						font-size:rem(14px);
						float:left;
						margin-right:rem(12px);
						margin-buttom:rem(5px);
						img{
							width:rem(70px);
							height:rem(46px);
						}
					}
				
				}
			}
		}
</style>