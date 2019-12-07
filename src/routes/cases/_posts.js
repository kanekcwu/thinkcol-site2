// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		category: ['innovation'],
		piclink: 'watsons.png',
		title: 'Enabling A.S. Watson to be at the forefront of AI in Hong Kong',
		subtitle: `With the help of ThinkCol, A.S. Watson (ASW) launched an AI.Lab to create numerous AI prototype solutions in a short period of time.`,
		slug: 'watsons',
		html: `
			<p>Accelerating the process of solving business issues, ThinkCol advised ASW’s big data team to build ASW AI.Lab. The Lab brings together startups and consulting firms to solve real life business objectives through data science, maximizing the company’s potential. They construct prototypes and demos, then pitch their ideas to the ASW managements who aims to implement their projects in bigger scale to solve specific business pain points.
			</p><p>
			Over the short span of nine months, the ASW AI.Lab helped solving 6 business problems, created more than 20 prototypes, attracting around 30 companies to join the Lab. To quote one of the business cases as an example, a prototype was developed to create an algorithm to measure store cannibalization to develope a simulation to understand the individual customer lifetime value.
			</p><p>
			The ASW AI Lab has also gained prominence as a platform of strong communal spirit where entrepreneurial and data science ideas thrive and come to life. Long term relationships with various startup communities such as Austrade and HKU were forged. ThinkCol’s role of understanding, cleaning and massaging the data ensured that the deliverables suggested were viable business solutions to ASW. ASW AI.Lab is the prime example of how data science can facilitate real business decision making, facilitated by ThinkCol.
			</p>
		`
	},

	{
		category: ['ml'],
		piclink: 'lenovo.png',
		title: 'Lenovo Tunes into Customer Satisfaction Levels with ThinkCol',
		subtitle: 'With customers satisfaction in mind, Lenovo uses ThinkCol’s tailor made model to provide more insights.',
		slug: 'lenovo',
		html: `	<p>
		To measure Lenovo’s customer satisfaction levels, ThinkCol launched a model on topic classification and sentiment analysis for the multinational technology company. The model utilizes social media data and Natural Language Processing to discover common talking points of Lenovo customers. Through deploying 70+ models and tagging the data in ThinkCol’s self-service modelling application, Lenovo can automatically summarize and understand customer stories on a simple interface.
		</p><p>
		With ThinkCol’s innovation, Lenovo has obtained more clarity on customer opinions. These insights enable Lenovo to easily identify opportunities and company pain points to adjust company directions adequately. Lenovo no longer require staff to work on mundane manual tagging tasks. Efficiently utilizing their manpower, they take advantage of ThinkCol’s technology by employing machines to tag all social media and creating reports. The model also allows Lenovo to further compare their products with competitors on specific attributes as well as identify product issues, maximizing their market potential.
		</p>
		`
	},

	{
		category: ['innovation'],
		piclink: 'aia.png',
		title: 'AIA Fostering Innovation in Insurance Industry',
		subtitle: 'LifeHack18 is AIA’s latest innovation effort in challenging the status quo and improving the way AIA interacts with its customers, employees and distribution channels in the insurance industry.',
		slug: 'innovation',
		html: `
			<p>
			AIA is the world’s largest pre-eminent life insurance provider. ThinkCol helped organize AIA’s first ever hackathon. 108 people, including AIA employees from 12 countries took part.
			</p>
			<p>
			<b>The Challenge</b> <br>
			The 48-hour hackathon challenged the hackers to brainstorm and develop innovative solutions to help people live healthier, longer, better lives.
			</p>
			<p>
			<b>Results</b> <br>
			The hackathon generated innovative ideas, challenging how people think of insurance. Ideas ranged from improvements to the AIA Vitality wellness programme to using artificial intelligence to detect early signs of dementia.
			</p>
	`
	},

	{
		category: ['people','innovation'],
		piclink: 'fungtraining.png',
		title: 'Sparking Data Solutions in Li and Fung',
		subtitle: 'With ThinkCol’s data science training, business executives of Fung Retailing can now initiate and sustain data projects.',
		slug: 'fungtraining',
		html: `
			<p>ThinkCol hosted a 13-week data science training for Fung Group to shift ownership of creative analytic work to its business team. The tailor-made course taught Fung Retailing business executives data analytics modelling, data visualization, predictive analytics, deep learning and machine learning. Utilizing training materials based on Fung Group’s data, the training emphasized on a hands-on teaching approach.
			</p>
			<p>
			The courses allowed business users of all levels, from domain experts with minimal background in coding to business analysts who want to extend their knowledge, to utilize business friendly tools and develop data solutions. It enabled Fung Group’s staff to understand how data analytics can be used to achieve effective change in an organization.
			</p>
			<p>
			With ThinkCol’s focus on hands-on projects, the training also provided opportunities for participants to apply the analytic skills they have learnt to actual real-life business problems and more importantly, their own business process. With ThinkCol’s initiative, the staff of Fung Group have a more in depth understanding of the potential of deep learning, machine learning and data solutions.
			</p>
		`
	},

	{
		category: ['data','ml'],
		piclink: 'vinsionaire.png',
		title: 'Automating and Predicting Wine Prices for the Future',
		subtitle: 'Vinsionaire’s new system allows the wine retailer to understand future trends and offer even better services to its clients.',
		slug: 'vinsionaire',
		html: `
			<p>Vinsionaire is a Hong Kong-based retailer of fine wines. With the vision of offering an innovative and shopper-friendly wine purchasing experience, Vinsionaire wanted to know more about wine price fluctuation so as to provide the best wine prices for their clients. Utilizing Deep Learning techniques, ThinkCol predicted and automated Vinsionaire’s wine pricing system. In order to gain a deeper understanding on the wine industry and the market price of wines, ThinkCol also employed web scraping techniques to gather data from other wine websites and auction houses.
			</p>
			<p>
			With ThinkCol’s efforts, Vinsionaire no longer manually prices its 5,000 rare and fine wines. They now utilize ThinkCol’s machine learning algorithm to automatically price and auction its wines. The newly programmed system allows the wine retailer to get more in depth insights in relation to the latest market information. Vinsionaire’s clients are also able to savour the best wine the company can offer within their price range.
			</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
