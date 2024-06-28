<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div class="sm:col-span-3 flex justify-center">
			<Carousel class="carousel-container">
				<slide class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
					<div class="carousel__item">
						<img :src="projectImage.img" alt="Slide image"
							class="rounded-xl cursor-pointer shadow-lg sm:shadow-none carousel__image">
					</div>
				</slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
	props: ['projectImages'],
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			slides: [
				{ image: 'https://placehold.it/360x270' },
				{ image: 'https://placehold.it/360x270' },
				{ image: 'https://placehold.it/360x270' }
			]
		}
	},
};
</script>

<style scoped>.carousel-container {
	width: 80%;
	/* Adjust the width as needed */
	max-width: 1200px;
	/* Maximum width for larger screens */
}

.carousel__item {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
}

.carousel__image {
	width: 100%;
	/* Adjust to fit within the carousel container */
	height: auto;
	/* Maintain aspect ratio */
}

.rounded-xl {
	border-radius: 1rem;
}

.cursor-pointer {
	cursor: pointer;
}

.shadow-lg {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.sm\:shadow-none {
	box-shadow: none;
}

.mb-10 {
	margin-bottom: 2.5rem;
}

.sm\:mb-0 {
	margin-bottom: 0;
}
</style>