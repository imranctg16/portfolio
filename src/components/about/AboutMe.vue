<script>
export default {
	setup() {
		return {
			"bios": [
				{
					"id": 1,
					"bio": "I am Mohammad Imran Hossain, and I am writing to express my interest in the Senior Software Engineer position at Brain Station 23 Ltd. I bring over five years of web development experience to the table. My focus lies in crafting user-friendly experiences, leveraging technologies like Amazon Web Services (AWS) and mastering microservices architecture. With proficiency in PHP (including Laravel and CakePHP), Python, Vue.js, and Tailwind CSS, I ensure the code I write is both understandable and maintainable. My strong communication and problem-solving skills ensure smooth collaboration and successful projects. Thank you for considering my application. I am looking forward to the possibility of discussing how my skills and experiences align with the needs of your team. Please find my resume link below for your review. I am available at your earliest convenience for an interview and can be reached via email at imranhossain16.ctg@gmail.com. Please feel free to browse my works below as well."
				},
				{
					"id": 2,
					"bio": "Resume Link: [Resume](insert_resume_link_here)\nPortfolio Link: [Portfolio](https://imran-hossain-16.netlify.app/)\nCertificate of Achievements Link: [Online Certificate](insert_certificate_link_here)\nPublication Link: [nameGist: a Novel Phonetic Algorithm with Bilingual Support | Request PDF](insert_publication_link_here)"
				}
			]
		}
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/my_profile_picture.jpg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
