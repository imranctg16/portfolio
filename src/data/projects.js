// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Regulatory Compliance Management',
		category: 'Official',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Dynamic Workflow Engine',
		category: 'Official',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'BARD: ERP',
		category: 'Official',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 4,
		title: 'JWT: TOKEN',
		category: 'Personal',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 5,
		title: 'LEETCODES',
		category: 'Personal',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
