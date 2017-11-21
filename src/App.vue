<!-- 以后项目的根组件 -->
<template>
	<div>
		
		 <!-- 1 利用mint-ui中header组件实现头部-->
		<mt-header fixed title="传智播客.黑马程序员"></mt-header>

		<!-- 2路由占位符 -->
		<router-view></router-view>

		<!-- 3 利用mui中batbar 实现系统底部-->

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item  " to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">新闻资讯</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>

	</div>
</template>

<script>
// 按需导入
	// import {add} from './calc.js';

	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				msg :'hello vuejs111111'
			}
		},
		methods:{

		},
		created(){

		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	.red{
		color: red;
	}
</style>
