<template>
	<div>
		<h1>{{msg}}</h1>
		<img src="../static/images/logo.png">
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				msg: 'hello,vue'
			}
		},
		created() {
			
		}
	}
</script>
<style type="text/css" scoped>
	h1 {
		color: red;
	}
</style>