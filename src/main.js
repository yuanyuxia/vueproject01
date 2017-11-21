//1 倒入Vue核心包
import Vue from 'vue';
//2导入App。Vue 的Vue对象
import App from './App.vue';

//3 将Vue-router集成到这个项目中来
import vueRouter from 'vue-router';
//3.1 将VueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
//3.2 倒入路由规则对应的组件对象
import home from './components/home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
// 3.0.2 定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo',component:newsinfo}
	]
});

import 'mint-ui/lib/style.min.css'

import mintUI from 'mint-ui'
Vue.use(mintUI);

//5 注册当前系统mui样式
import '../statics/mui/css/mui.css'
//6 导入当前系统全局样式
import '../statics/css/site.css';
//7  将vue-resource在vue中绑定 自动在Vue对象实例上注入一个$http
import vueResource from 'vue-resource';
Vue.use(vueResource);
//8 定义一个全局过滤器实现日期格式化 使用momentjs类库实现格式化功能
import moment from 'moment';
Vue.filter('datefmt',function(input,fmtstring){
	return moment(input).format(fmtstring);
})
new Vue({
	el:'#app',
    router,
	// render:function(create){create(App)} //es5的写法
	render:c => c(App)  // es6的函数写法 =>：goes to
});

