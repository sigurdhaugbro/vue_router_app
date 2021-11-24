<template>
	<Form />
	<Header />
	<RouterView />
	<!-- <Slideshow /> -->
	
</template>

<script>
	import Header from '../components/Header.vue'
	import Form from '../views/Form.vue'
	// import Slideshow from '../views/Slideshow.vue'


	export default {
		// name: 'Router test app',
		
		components: {
			Header,
			Form,
			// Slideshow
		}
	}
</script>,


<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/style.css';
</style>
