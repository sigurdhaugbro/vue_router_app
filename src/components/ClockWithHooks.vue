<template>
	<div>{{ today }}</div>
</template>

<script>
	/* 
		lifecycle
			- create
			- mount
			- update
			- unmount

		lifecycle hooks -> "this." er tilgjengelig
			- created
				- beforeCreate
			- mounted*
				- beforeMount
			- updated*
				- beforeUpdate
			- unmounted*
				- beforeUnmount
	*/

	export default {
		data() {
			return {
				timer: null,
				today: this.getTime(),
			};
		},

		mounted() {
			this.timer = setInterval(() => {
				this.today = this.getTime();
			}, 1000);

			console.log('mounted clock');
		},

		updated() {
			console.log('updated clock');
		},

		unmounted() {
			clearInterval(this.timer);
			console.log('unmounted clock');
		},

		beforeUnmount() {
			// window.alert('Are you sure?!')
		},

		methods: {
			getTime() {
				return new Date().toTimeString().slice(0, 8);
			},
		},
	};
</script>

<style></style>
