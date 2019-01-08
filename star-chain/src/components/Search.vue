<template>
	<mt-search class="search"
	  
	  cancel-text="取消"
	  placeholder="搜索">
	</mt-search>
</template>
<script type="text/javascript">
	export default {
		name:"Search",
		components:{},
		data(){
			return {

			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.mint-search{
		background-color:#fff;
		width:rem(375px);
		height:rem(50px);
		font-size:rem(12px);
		.mint-searchbar{
			.mint-searchbar-inner{
				border-radius: 50px;
				background-color:#eee;
				.mint-searchbar-core{
					border-radius:50px;
					background-color:#eee;
				}
			}
		}
	}
</style>