<template>
	<div id="tmpl">
		 <!--1.0 实现新闻详情-->
	   <div class="title">
		   <h4 v-text="info.title"></h4>
		   <p>{{ info.add_time | datefmt('YYYY-MM-DD') }}  {{info.click}}次浏览</p>
	   </div>
		<div id="content" v-html="info.content" ></div>
          <!--2.0 实现评论组件的集成-->
        <!--10.2 实现评论组件-->
        <comment :id = "id"></comment>
	</div>
</template>

<script>
import comment from '../../kits/common.js';
// 导如评论组件
 import comment from '../subcom/comment.vue';

	export default {

	}

</script>

<style scoped>
	

</style>