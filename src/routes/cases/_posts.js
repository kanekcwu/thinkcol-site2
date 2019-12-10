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
		piclink: 'watson.jpg',
		title: 'Enabling A.S. Watson to be at the forefront of AI in Hong Kong',
		subtitle: `With the help of ThinkCol, A.S. Watson (ASW) launched an AI.Lab to create numerous AI prototype solutions in a short period of time.`,
		slug: 'watsons',
		html: `
			<p>Accelerating the process of solving business issues, ThinkCol advised ASW’s big data team to build ASW AI.Lab. The Lab brings together startups and consulting firms to solve real life business objectives through data science, maximizing the company’s potential. They construct prototypes and demos, then pitch their ideas to the ASW managements who aims to implement their projects in bigger scale to solve specific business pain points.
			</p> 
			<p>Over the short span of nine months, the ASW AI.Lab helped solving 6 business problems, created more than 20 prototypes, attracting around 30 companies to join the Lab. To quote one of the business cases as an example, a prototype was developed to create an algorithm to measure store cannibalization to develope a simulation to understand the individual customer lifetime value.
			</p>
			<p>The ASW AI Lab has also gained prominence as a platform of strong communal spirit where entrepreneurial and data science ideas thrive and come to life. Long term relationships with various startup communities such as Austrade and HKU were forged. ThinkCol’s role of understanding, cleaning and massaging the data ensured that the deliverables suggested were viable business solutions to ASW. ASW AI.Lab is the prime example of how data science can facilitate real business decision making, facilitated by ThinkCol.
			</p>
		`
	},

	{
		category: ['ml'],
		piclink: 'Lenovo.JPG',
		title: 'Lenovo Tunes into Customer Satisfaction Levels with ThinkCol',
		subtitle: 'With customers satisfaction in mind, Lenovo uses ThinkCol’s tailor made model to provide more insights.',
		slug: 'lenovo',
		html: `	
		<p>
		To measure Lenovo’s customer satisfaction levels, ThinkCol launched a model on topic classification and sentiment analysis for the multinational technology company. The model utilizes social media data and Natural Language Processing to discover common talking points of Lenovo customers. Through deploying 70+ models and tagging the data in ThinkCol’s self-service modelling application, Lenovo can automatically summarize and understand customer stories on a simple interface.
		</p>
		<p>
		With ThinkCol’s innovation, Lenovo has obtained more clarity on customer opinions. These insights enable Lenovo to easily identify opportunities and company pain points to adjust company directions adequately. Lenovo no longer require staff to work on mundane manual tagging tasks. Efficiently utilizing their manpower, they take advantage of ThinkCol’s technology by employing machines to tag all social media and creating reports. The model also allows Lenovo to further compare their products with competitors on specific attributes as well as identify product issues, maximizing their market potential.
		</p>
		`
	},

	{
		category: ['innovation'],
		piclink: 'AIAHackathon.JPG',
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
		category:['Data','Data Analytics'],
		piclink: 'CulturalResistance.JPG',
		title:'Managing Cultural Resistance in AI Adoption',
		slug:'DebtCollection',
		html:`
		<p>
		ThinkCol worked with one of the largest organization with a business nature similar to collecting debt in Hong Kong. ThinkCol helped change the manual process in the firm and allow the company to be more data-driven.
		</p>
		<p>
		As time is money, one of the firm’s largest pain points is to generate a comprehensive debtor list based on different criteria. Previously, the partners of the firm and the employees decided on who to chase through manual work and static reports.
		</p>
		<p>
		ThinkCol built dashboards for the firm using machine learning techniques where the AI recommends a debtor list for staff to contact. As the industry is conservative and traditional, there was cultural resistance in adopting the dashboards and the utilization of AI.
		</p>
		<b> ThinkCol approached the cultural resistance through the following ways:</b>
		<p>1. Provide training to staff and management on the new dashboards to acquire actionable insights</p>
		<p>2. Gradual adoption of the dashboard from a simple dashboard to a more comprehensive one </p>
		<p>3. Assign responsibilities to staff on data cleanliness and quality</p>
		<p>4. Track the usage of dashboards </p>
		<p>5. Create incentives for staff performance </p>
		<p>6. Updating and maintaining the dashboard through frequent communication, understanding of the manual process, the pain points and needs of the business </p>

		`
		
	},
	{
		category:['Innovation'],
		piclink:'KerryLogistics.jpg',
		title:'Kerry Logistics Further Boosts Innovation with ThinkCol',
		slug:'KerryLogistics',
		html:`
		<p>Kerry Logistics is an Asia-based, global 3PL with a network covering 53 countries and territories. Its core businesses encompass integrated logistics, international freight forwarding, express and supply chain solutions. Continuously pushing forward innovation internally and externally, Kerry Logistics organized a one of a kind hackathon with ThinkCol – the Kerry Logistics Hackathon: Drone Applications for Smart Warehouse.  Not only was the event Kerry Logistics’ first hackathon, it was also Hong Kong’s first hackathon involving drones.
		</p>
		<p>
		<b>The Challenge</b><br>
		Leveraging the power of autonomous drones and AI techniques, hackers devised innovative warehouse solutions in the Kerry Logistics Hackathon on 23-24 February, 2019.  In the two-part challenge, eight teams of participants first created applications for autonomous drones to enhance efficiency and accuracy in the warehouse. Their second challenge was to develop a smart warehouse presentation that involves drones and incorporate innovative technological solutions to solve operational problems.
		</p>
		<p>
		Judges and mentors from Kerry Logistics, Legislative Council, Hong Kong Logistics Association, and more witnessed participants efforts.  Proposals that participants raised adopted advanced technologies, such as Light Detection and Ranging (LIDAR). The hackathon winners walked away with more than HK$90,000 cash prize.
		</p>
		<p>
		<b>Results</b><br>
		Utilizing the capabilities of drones, machine learning, and artificial intelligence, the hackathon was a testimony of Kerry Logistics’ dedication to motivate innovation and harness creativity in the digital age.  It acted as a major platform for Kerry Logistics to connect with younger generations of limitless creativity, bringing together talented drone enthusiasts, specialists, coders and industry experts from Hong Kong, Shenzhen and Macau.  Hackers not only had the opportunity to collaborate with each other and work with experts of different fields, they also solved real warehouse problems and reshaped the logistics industry with unconventional technology.
		</p>
		<p>
		Wilson Lee, Group Director of Information Technology, Kerry Logistics, reiterated the innovative efforts of the hackathon were in line with Kerry Logistics’ Warehouse 4.0 initiative for automation. “As we have witnessed at the Hackathon, the contestants have demonstrated their attitude of thinking outside the box, which is what innovation is all about. New perspectives and imagination will enable our existing operational model to evolve and improve, allowing us to maintain our competitive edge in value creation and disrupt the market rather than being disrupted.”
		</p>

		`
	},

	{
		category:['People'],
		piclink:'Jewellery.JPG',
		title:'Leading Jewellery Retailer Equips Staff with AI Knowledge',
		subtitle: 'From exhibiting various examples to leading a variety of hands-on activities, ThinkCol provided design thinking and AI training for one of Hong Kong’s biggest jewellery retailer to continue their vision of innovation.',
		slug:'Jewellery',
		html:`
		<p>
		ThinkCol provided a 2-day design thinking and AI training course for the senior management of one of Hong Kong’s leading jewellery retailer. With more than fifty shops in Hong Kong and forty in the Mainland, the jewellery retailer was the first Hong Kong retail chain store to offer customers fixed-price diamond jewellery.
		</p>
		<p>
		Utilizing real-life examples from different industries, ThinkCol created various class materials and taught machine learning and data science. More importantly, utilizing the framework of design thinking, ThinkCol guided the jewellery retailer to identify company pain points and brainstorm ideas on how machine learning can ease their daily work dilemmas and expedite workflows.
		</p>
		<p>
		The jewellery retailer’s partnership with ThinkCol is an exciting example of how ThinkCol’s services can be utilized in luxury retailing. The AI knowledge and knowhow that ThinkCol imparted has helped the client to identify company challenges and understand potential solutions that utilize the efficiencies of AI and other new technologies.
		</p>

		`
	},
	{
		category:['People'],
		piclink:'Construction.jpeg',
		title:'Preparing a Construction Giant for the AI Era',
		subtitle:'With ThinkCol’s courses, one of Asia’s biggest construction company embraces Artificial Intelligence as they strategize innovation as their organization’s key principle.',
		slug:'Construction',
		html:`
		<p>
		ThinkCol delivered two training courses for a leading construction and engineering contractor who designed and constructed some of the most prominent buildings and infrastructures in Asia.
		</p>
		<p>
		ThinkCol conducted a 4-week intense data science course for their data scientists as well as a 2-day workshop for the client’s business users.  Through learning about Python, machine learning and methods of integrating AI into their existing practices, the leading construction and engineering contractor stays true to their company value of being the source of innovative solutions and services.  ThinkCol customized every lesson with examples from the construction industry, so that the attendees were able to integrate what they’ve learnt into their work. This included utilizing data science methods and a concrete dataset from the client to create a machine learning model that the client’s computer scientists can replicate.
		</p>
		<p>
		The workshops created an essential base needed for the client’s future adoption of AI in their practices.  It utilized a bottom-up approach that allowed not only their staff to understand data science methodologies, but also their business users – both who have large impacts on the company’s overall workflow.  For more advanced users, the courses also motivated domain experts to discover new data project leads and inspired data science consultants to assemble an effective data pipeline for the company. The technical fundamentals learnt in ThinkCol’s workshops were key to improve the construction giant’s relationship  with customers as well as improve the operational efficiency within the business.
		</p>
		`
	},


	{
		category: ['people','innovation'],
		piclink: 'Li&FungTraining.JPG',
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
		category:['innovation'],
		piclink:'ASWHackathon.JPG',
		title:'A.S. Watson Unearths Tech Talents',
		subtitle:'36 hours. 110 hackers.  A.S. Watson Hackathon 2018 is a one of a kind event that combines artificial intelligence and the retail industry, nurturing more locally groomed data scientists.',
		slug:'A.S.WatsonHackathon',
		html:`
		<p><iframe width=100% height=500px; src="https://www.youtube.com/embed/59z5U1Maxlg"> </iframe></p>
		<p>
		With over 14,900 stores in 25 markets, A.S. Watson is the world’s largest international health and beauty retailer. In hope of scouting suitable data analytics consultants for its Data Lab, ThinkCol and A.S. Watson (ASW) organized Hong Kong’s first ever retail-themed big data hackathon. ASW provided the 16 competing groups gigabytes of ASW real operating data to come up with retail-related solutions for the company.
		</p>
		<p>
		<b>The Challenge</b><br>
		A.S. Watson recognizes the importance of adopting a data-first strategy to understand and anticipate customer needs. Participants were challenged to find innovative solutions on four main themes – analysing health patterns to create the most business value, improving product availability to capture market opportunities, evaluating pricing strategies and looking at different areas in the business to aid customer personalization.
		</p>
		<p>
		<b>Results</b><br>
		The Hackathon cultivated talent and injected new blood for ASW Data Team through exposure to real-world business scenarios. From utilizing collaborative filtering logic to providing optimal discounts, the Hackathon unleashed the power of artificial intelligence in an unconventional industry, revolutionising how people think of the retail sector. The champion of the Hackathon integrated weather, search keyword, product information to provide personalized product recommendations. The Hackathon also emboldened local start-up communities, data scientists and data engineers to bring creative ideas to life and fully utilize the capabilities of machine learning to provide solutions and derive insights, so that retailers like A.S. Watson can operate smarter and faster.
		</p>
		`
	},

	{
		category:['data','data analytics','people','ml'],
		piclink:'Gov.JPG',
		title:'Transforming a Quasi-governmental Organization to Become More Data-driven',
		subtitle:'ThinkCol continuously trained, consulted, and built prototypes for a quasi-governmental organization, increasing its AI and Big Data capabilities to be more self-sustaining.',
		slug:'Quasi-governmentalOrganization',
		html:`
		<p>
		ThinkCol facilitated a quasi-governmental organization to implement various AI projects. ThinkCol not only conducted training for the organization’s staff, but also provided consultation, advising them to adopt projects to create self-sustaining data solutions.
		</p>
		<p>
		ThinkCol first gathered information from staff of each division and department level to comprehend the organization’s priorities. It then organized a series of tailor made training sessions for the organization’s senior executives and middle management staff. The consultations and trainings were essential in prioritizing the organization’s big data opportunities, so that they can leverage future big data and AI opportunities. The information gathered from the consultations also allowed ThinkCol to facilitate projects such as a property price prediction prototype, chatbot, HR succession planning model, and digital marketing for the quasi-governmental organization.
		</p>
		<p>
		The projects conducted by ThinkCol were crucial in identifying the opportunities and pain points of the organization as well as providing solutions to them. The efforts of ThinkCol also leveraged the organization’s time and resources in managing their future projects, equipping them with the knowledge of AI and Big Data to adapt to future challenges.
		</p>
		`
	},

	{
		category:['innovation'],
		piclink:'L&FHackathon.JPG',
		title:'Li & Fung Turns to ThinkCol to Uncover New Supply Chain Solutions',
		subtitle:'Li & Fung’s Hack the Rack 2018 brings together experts from different fields to co-create solutions focused on international supply chains, accelerating innovation and engaging future talent.',
		slug:'Li&FungHackathon',
		html:`
		<p><iframe width=100% height=500 src="https://www.youtube.com/embed/gqjGUccotEs"> </iframe></p>
		<p>
		Held in Li & Fung’s newest Hong Kong innovation hub, Explorium, Hack the Rack is one of Fung’s newest initiatives to tackle real Li & Fung business challenges with speed and innovation. Bringing together data scientists, software engineers, UX/UI designers and over 30 industry professionals from Li & Fung’s business units who acted as mentors, ThinkCol organized the global supply chain giant’s hackathon for 2 consecutive years. ThinkCol also offered 12 weeks of data science training to Fung Group business users to enhance the company’s capabilities.
		</p>
		<p><b>The Challenge</b><br>
		Hack the Rack 2018 aimed to search for novel solutions for different Li & Fung’s lines of business. Participants selected from a series of four challenges: using data to deliver customized promotions and offers to Circle K customers, humanizing image search in Li & Fung’s huge catalogue of products and repository of product images, predicting the weekly freight volume demand and streamlining the garment measurement process for faster quality control. Participants had the unique opportunity to play with real data from the retail, sourcing and logistics businesses within Fung Group to tackle real challenges facing the industry today.
		</p>
		<p><b>Results</b><br>
		From using deep learning technology for an optimized online-catalogue interface to utilizing artificial intelligence to influence buying decisions of shoppers, the hackathon witnessed stellar innovations on the future of retail, generating 16 prototypes. In first place, Team Reboot seek to raise the company’s container utilization to more than 90% by combining data analytics, order data and third-party shipping API. With ThinkCol’s initiative, Li & Fung is currently in pilot talks with Team Reboot to create a more centralized system of carriers.
		</p>
		<p>
		“Seeing groups of talent on the floor solving real business challenges, using our feedback and their technical skills, I can see the power of open-sourcing and collaboration with the external communities.”
		</p>
		<p align="left">
		– Lawrence Chan,
		</p>
		<p align="left">
		Senior Department Manager,
		</p>
		<p align="left">
		Category Development, Circle K
		</p>
		`
	},

	{
		category:['innovation'],
		piclink:'AXAHackathon.JPG',
		title:'ThinkCol creates AXA’s First Health Data Focused Hackathon',
		slug:'AXAHackathon',
		html:`
		<p>
		AXA offers a wide range of life, health, property and casualty protection, as well as wealth management and retirement solutions to help customers achieve stability and prosperity. It prides itself as one of the largest health protection providers in Hong Kong and Macau.
		</p>
		<p>
		To push AXA’s innovation to its forefront, ThinkCol helped AXA to organize AXA Hack for Health from 18-20 October 2019 at Microsoft’s office in Cyberport. AXA Hack for Health was AXA’s first health data focused hackathon. ThinkCol recruited almost 200 top-notch talents from 10 nationalities and selected close to 100 participants to join the event.
		</p>
		<p><b>The Challenge</b><br>
		During the 2.5-day hackathon, 19 teams of AI, data, and tech enthusiasts as well as medical talents came together to develop innovative solutions for illness detection and lifestyle management. The participating teams had to come up with solutions focusing on how best to detect customers at risk and propose early interventions, or how to proactively engage customers and offer health support as their lifelong partner. After the ideation process, the teams presented concepts and demos of their design prototypes to a panel of professional judges.
		</p>
		<p><b>Results</b><br>
		The news of the hackathon was picked up by SCMP, Yahoo News, CT Jobs, PC Magazine, ET Net and more. Through the close-knitted collaboration between industry professionals and hackers, the hackathon achieved AXA’s aim of sourcing new and innovative ideas into AXA's health business, driving more product innovations and humanizing AXA’s customer experience. It is expected that the winning solutions will be implemented in AXA’s solutions and services.
		</p>
		<p>
		"At AXA, we strive to be our customers' health partner along their life journey. The Hack for Health challenge provides the nurturing ground for exciting new ideas around illness prevention and health protection which helps us further fulfil our commitment to customers. We are greatly impressed with the participants energy and product quality demonstrated at the hackathon. Going forward, we will continue to foster partnerships and build the ecosystem for delivering more superior protection for our customers," said Sally Wan, Chief Executive Officer, AXA Hong Kong and Macau.
		</p>
		`
	},

	{
		category:['Data','Data Analytics'],
		piclink:'mallinchina.JPG',
		title:'Analyze Mall Traffic to Understand Customers and Competition',
		slug:'MallTraffic',
		html:`
		<p>
		ThinkCol engaged with a Hong Kong based conglomerate. ThinkCol helped one of its mall in China to create dashboards for tenants to further understand its customers and their competition within the mall.
		</p>
		<p>
		ThinkCol conducted thorough consultation sessions with the client to understand the business problem and to ensure the built solution addresses the pain point.  After receiving the raw data of customer traffic, ThinkCol cleaned the data, conducted analysis to identify different traffic patterns and segment customers.  The result were displayed in an easy-to-use dashboard for tenants to visualize insights.
		</p>
		`
	},

	{
		category:['Data'],
		piclink:'largedatatransaction.JPG',
		title:'Analyze Large Data Sets to Identify Potential Customer',
		slug:'LargeDataSet',
		html:`
		<p>
		A client with above 5 billion transaction records wanted to explore the possibilities of its data set and outline some future possible directions.  ThinkCol helped them with data exploration, data visualization, data cleansing and modelling.
		</p>
		<p>
		With the huge amount of transaction data, ThinkCol identified the difference between various types of customers and tried to use Machine Learning to validate their hypothesis, provide insights, and drive more customer value.  To accelerate the procedure of data processing and improve the performance, ThinkCol utilized PySpark to process Big Data.  
		</p>ThinkCol’s efforts helped the luxury retailing powerhouse streamline its current human resources workflow. Its senior management team can now, for the first time, acquire clearer insights amongst all levels and regions of their company.  For instance, they can easily identify vacant positions, realize diversity and collect information about new hires. Thus, helping the client to make more informed decision.  The client is currently in the process of disseminating the system for different regional HR divisions and the dashboard will be launched to other teams in the near future.
		</p>
		`
	},

	{
		category:['data','data analytics'],
		piclink:'LuxuryRetailer.JPG',
		title:'Luxury Retailer Streamlines HR Workflow with ThinkCol',
		slug:'RetailHRWorkflow',
		html:`
		<p>
		With the help of ThinkCol, a travel retailer that has an international network of duty-free stores located in major airports and in downtown areas re-engineered their human resources pipeline. Utilizing various data from the client’s human resources, finance and sales departments, ThinkCol created interactive human resources dashboards, so that the travel retail giant can systemize their internal data with ease.  The dashboards consolidate cross-department data and created more than 10 interactive dashboards using Power BI.
		</p>
		<p>
		ThinkCol’s efforts helped the luxury retailing powerhouse streamline its current human resources workflow. Its senior management team can now, for the first time, acquire clearer insights amongst all levels and regions of their company.  For instance, they can easily identify vacant positions, realize diversity and collect information about new hires. Thus, helping the client to make more informed decision.  The client is currently in the process of disseminating the system for different regional HR divisions and the dashboard will be launched to other teams in the near future.
		</p>
		`
	},

	{
		category:['people'],
		piclink:'AIAccelerator.JPG',
		title:'Building the First AI Accelerator for a Multinational Conglomerate',
		slug:'AIAccelerator',
		html:`
		<p>
		A multinational conglomerate that is reThinkCol tailored each session to specific business units and offered training to staff of all levels.  The courses helped them to develop the technological skills that would help them in their respective positions in the company.  For instance, staff from client-facing departments learned more convenient ways to input and search for client data as well as generate reports for specific purposes.
		</p>nowned for its five arms of business (ports, retail, infrastructure, energy and telecommunications) wanted to incorporate AI into its business and therefore engaged ThinkCol to create a structured accelerator program. 
		</p>
		<p>
		After understanding business users’ pain points in a workshop with different departments and introducing AI technology in the industry, ThinkCol conducted site visits and worked with different start ups to look for solutions to solve specific users’ pain points.  Solutions developed may be deployed across the company and a blueprint on how to run similar Acceleration Programs for other Business Units will be created.
		</p>
		`
	},

	{
		category:['people'],
		piclink:'LuxuryRetailTraining.JPG',
		title:'Luxury Retailer Promotes Better Data Management',
		slug:'DataManagement',
		html:`
		<p>
		ThinkCol taught staff from a retail company that specializes in selling luxury goods data management through the use of commercial softwares.  The series of courses focused on user utilization and used the client’s real store data as teaching material.
		</p>
		<p>
		ThinkCol tailored each session to specific business units and offered training to staff of all levels.  The courses helped them to develop the technological skills that would help them in their respective positions in the company.  For instance, staff from client-facing departments learned more convenient ways to input and search for client data as well as generate reports for specific purposes.
		</p>
		`
	},
	{
		category: ['data','ml'],
		piclink: 'Vinsionaire.jpeg',
		title: 'Automating and Predicting Wine Prices for the Future',
		subtitle: 'Vinsionaire’s new system allows the wine retailer to understand future trends and offer even better services to its clients.',
		slug: 'vinsionaire',
		html: `
			<p>
			Vinsionaire is a Hong Kong-based retailer of fine wines. With the vision of offering an innovative and shopper-friendly wine purchasing experience, Vinsionaire wanted to know more about wine price fluctuation so as to provide the best wine prices for their clients. Utilizing Deep Learning techniques, ThinkCol predicted and automated Vinsionaire’s wine pricing system. In order to gain a deeper understanding on the wine industry and the market price of wines, ThinkCol also employed web scraping techniques to gather data from other wine websites and auction houses.			</p>
			<p>
			With ThinkCol’s efforts, Vinsionaire no longer manually prices its 5,000 rare and fine wines. They now utilize ThinkCol’s machine learning algorithm to automatically price and auction its wines. The newly programmed system allows the wine retailer to get more in depth insights in relation to the latest market information. Vinsionaire’s clients are also able to savour the best wine the company can offer within their price range.
			</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
