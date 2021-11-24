// her detter jeg av

<template>
	<ClockWithHooks v-if="$route.params.component_id == 'clock'" />
</template>

<script>
	import ClockWithHooks from '../components/ClockWithHooks.vue';

	export default {
		components: {
			ClockWithHooks
		},
		
		data() {
			return {};
		}
	};
</script>

<style></style>
