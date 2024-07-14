// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Regulatory Compliance Management',
		category: 'Official',
		img: require('@/assets/images/rcms_1.png'),
	},
	{
		id: 2,
		title: 'Dynamic Workflow Engine',
		category: 'Official',
		img: require('@/assets/images/dwe_1.png'),
	},
	{
		id: 3,
		title: 'BARD: ERP',
		category: 'Official',
		img: require('@/assets/images/bard_1.png'),
	},
	{
		id: 4,
		title: 'JWT: TOKEN',
		category: 'Personal',
		img: require('@/assets/images/jwt_token_1.png'),
	},
	{
		id: 5,
		title: 'LEETCODES',
		category: 'Personal',
		img: require('@/assets/images/leetcode.png'),
	},
	{
		id: 6,
		title: 'RabbitMQ Microservice',
		category: 'Personal',
		img: require('@/assets/images/rabbitmq.png'),
	},
	
];

export default projects;
