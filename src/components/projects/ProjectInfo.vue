<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li v-for="info in projectInfo.companyInfos" :key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<span class="font-bold text-primary-dark dark:text-primary-light">{{ info.title }}: </span>
						<a href="#" :class="info.title == 'Website' || info.title == 'Phone'
						? 'hover:underline cursor-pointer'
						: ''" aria-label="Project Website and Phone">{{ info.details }}</a>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.objectivesHeading }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.technologies[0].title }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a v-for="social in projectInfo.socialSharings" :key="social.id" :href="social.url" target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i
							:data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				{{ projectInfo.projectDetailsHeading }}
			</p>
			
			<div class="mermaid-container">
				<div class="prose" ref="markdownContainer" v-html="this.markdownToHtml()"></div>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';
import { marked } from 'marked';
import mermaid from 'mermaid';
import markdowns from '../../data/markdowns';

export default {
	name: "ProjectInfo",
	props: ['projectInfo','id'],
	data() {
        return {
            markdownText: ``
    };
	},
	mounted() {
        this.setMarkdownText();
		mermaid.initialize();
		feather.replace();
		this.renderMarkdown();
		setTimeout(() => {
			this.changeColor();
		}, 3000);
	},
	updated() {
		this.renderMarkdown();
		feather.replace();
	},
	methods: {
		renderMarkdown() {
			this.$nextTick(() => {
				const mermaidElements = this.$refs.markdownContainer.querySelectorAll('.language-mermaid');
				if (mermaidElements.length > 0) {
					mermaidElements.forEach((element) => {
						mermaid.init(undefined, element);
					});
				}
			});
		},
		markdownToHtml() {
			let html = marked(this.markdownText);
			return html;
		},
		changeColor() {
			// Find all elements with IDs matching the specified pattern
			const mermaidElements = document.querySelector('[id^="mermaid-"]');
			const preElement = mermaidElements.parentNode.parentNode;
			console.log(preElement);
			// Check if the found element is a pre tag
			if (preElement && preElement.tagName === 'PRE') {
				// Change the background color of the pre tag to white
				preElement.style.setProperty('background-color', 'white', 'important');
			}
		},
        setMarkdownText(){
            this.markdownText = markdowns[this.id].markdownText
        }
		
	}
};

</script>

<style scoped></style>