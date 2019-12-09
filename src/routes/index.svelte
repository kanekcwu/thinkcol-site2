<script>
	import StartSurveyQ from "../components/home/startsurveyq.svelte";
	import { goto } from "@sapper/app";
</script>


<style>
	div#index {
		display:grid;
		align-items: center;
		justify-items: center;
		text-align: justify;
		grid-template-columns:  repeat(auto-fit, minmax(400px, 1fr));
		grid-gap: 40px;
		color: #30486C;
		padding-bottom:20px;
	}
	b{
	color:#009FDB;
	}
	p {
	margin-top:10px;
	}
	h2 {
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	color: #30486C;
	}

	h4 {
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: #30486C;
	}
	h5 {
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	color: #30486C;
	}

	img {
	object-fit: cover;
	}

	.buttons {
		display:grid;
		justify-self: center;
	}

	.buttons > button {
		margin: 0 1em;
	}

	button {
        background-color: var(--button-colour);
        border: 2px solid var(--button-text-colour);
        padding: 10px 30px 10px 30px;
        border-radius: 5px;
        transition: all 0.2s ease;
        cursor: pointer;
        color:#30486C;
        justify-self: center;
    }

    button:hover {
        border-color: var(--button-active-colour);
        background-color: var(--button-active-colour);
        color:var(--button-active-text-colour);
    }

    div#figures {
    	margin-top:30px;
		display:grid;
		align-items: center;
		justify-self: center;
		grid-template-columns:  repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 40px;
		color: #30486C;
		text-align:center;
	}

	div#journey {
		display:grid;
		grid-template-columns: 100px auto 100px;
		text-align:justify;
	}

	div#ml-services{
		padding:20px;
		display:grid;
		text-align:center;
		grid-template-columns:  repeat(auto-fit, minmax(150px, 1fr));
	}

	.figures_img{
		height:150px;
		padding:30px;
	}

	.ml_img{
		height:130px;
		padding-top:20px;
		padding-bottom:10px;
	}

</style>

<svelte:head>
  <title>Thinkcol</title>
</svelte:head>



<div id="index">
	<div>
		<h2>Your One-stop Solution For Tailor-made AI Ecosystems</h2>
		<p>
			ThinkCol is a Hong Kong-based AI and data science consultancy firm. We create custom AI solutions, provide consulting services, training, organize hackathons and more. Our AI solutions include NLP, predictive analytics, computer vision etc. United with the vision of cultivating sustainable AI ecosystems, ThinkCol has grown from serving its first international client to reaching pioneers of different industries.
		</p>
		<div class="buttons">
			<button on:click={()=>goto("service")}>Learn More</button>
		</div>

	</div>
	<div>
		<img src="home.png" alt="home" height = "500px"/>
	</div>
</div>

<div id = "figures">
	<div>
		<h4> <b>14+</b> Industries</h4>
		<img src = "Industry.png", alt = 'industry' class = "figures_img"/>
	</div>
	<div>
		<h4> <b>100+</b> Prototypes/AI Solutions</h4>
		<img src = "AI Solution.png", alt = 'ai solution' class = "figures_img"/>
	</div>
	<div>
		<h4> <b>23+</b> Hackathons</h4>
		<img src = "Hackathon.png", alt = 'hackathon' class = "figures_img"/>
	</div>
</div>

<div id = "journey">
	<div></div>
	<div>
		<p>
		Every company’s AI journey is different, hence, there is no one-size-fits-all solution to transform companies into more innovative and data-driven entities.
		</p>
		<p>
		Here at ThinkCol, we’ve created an AI ecosystem which provides the right solution regardless of your AI readiness. Our 5 sphere of services provide an one-stop platform for your AI needs.  We tailor our AI solutions through an in-depth understanding of your business problems, so that our deliverables solve targeted pain points.
		</p>
	</div>
	<div></div>
</div>

<div id = "ml-services">
	<div>
		<img src = "Natural Language Processing.png", alt = 'ai solution' class = "ml_img"/>
		<h5>Natural Language Processing</h5>
	</div>
	<div>
		<img src = "Predictive Analytics.png", alt = 'ai solution' class = "ml_img"/>
		<h5>Predictive Analytics</h5></div>
	<div>
		<img src = "Visualization.png", alt = 'ai solution' class = "ml_img" style="margin-left:20px"/>
		<h5>Visualization</h5></div>
	<div>
		<img src = "Computer Vision.png", alt = 'ai solution' class = "ml_img"/>
		<h5>Computer Vision</h5></div>
	<div>
		<img src = "Big Data Processing.png", alt = 'ai solution' class = "ml_img"/>
		<h5>Big Data Processing</h5></div>
</div>