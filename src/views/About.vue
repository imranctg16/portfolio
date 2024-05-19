<script>
import AboutMe from '@/components/about/AboutMe';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

	
	</div>
</template>

<style scoped></style>
