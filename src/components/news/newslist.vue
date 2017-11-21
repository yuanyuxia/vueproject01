<template>
    <div id = 'tmpl'>
          <!-- 实现页面详情 -->
          	<ul class="mui-table-view">
			<li v-for="item in list" class="mui-table-view-cell mui-media">
				<router-link v-bind="{to:'/news/newsinfo/'+item.id}" >
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
						<div class="ft">
							<span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD')}}</span>
							<span class="click">点击数：{{item.click}}</span>
						</div>
					</div>
				</router-link>
			</li>

		</ul>
    
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
  import common from '../../kits/common.js';
  export default {
        data(){
        	return{
        		list:[]
        	}
        },
        created(){
        	this.getnewslist();
        },
        methods:{
        	getnewslist(){
        		//1确定URL
        		var url = common.apidomain + '/api/getnewslist';
        		//2利用$http.get请求得到数据
        		this.$http.get(url).then(function(res){
        		//3 得到相应报文数据
        			var body =res.body;
        		//4 判断响应报文中状态值 返回0是正确 非0则是错误信息 提示给用户
        		if(body.status !=0){
        			Toast(body.message);
        			return;
        		}
        		this.list = body.message;

        		})
        	}
        }
  }

</script>

<style>
 .mui-table-view img{
 	height:80px;
 	width:80px;
 }

 .mui-table-view .mui-media-object{
	 max-width: 80px;
	 line-height: 80px;
 }

	.ft{
		margin-top: 1.5em;
		font-size: 14px;
		color:#0094ff;
	}

 .ft .click{
	 margin-left: 20px;
 }
</style>