<script>
	import StartSurveyQ from "../components/home/startsurveyq.svelte";
</script>


<style>

	p {
		text-align: center;
		margin: 0 auto;
		margin: 1em auto;
		line-height: 2em;
	}

	img {
		position: absolute;
		top:0;
		right:0;
		z-index: 0;
		max-width: 100%;
		max-height: 100%;
	}


	img ~ div {
		z-index: 1;
		position: relative;
		margin-top:5em;
	}



	/* desktop only */
    @media only screen and (min-width: 769px) {
		p {
			max-width: 30em;
			text-align: left;
			margin:0;
		}
	}


	.space {
		height: 4em;
	}

</style>

<svelte:head>
  <title>Thinkcol</title>
</svelte:head>


<img src="home.png" alt="home" />
<div>
	<h2>Your One-stop Solution For Tailor-made AI Ecosystems</h2>
	<p>
		ThinkCol is a Hong Kong-based AI and data science consultancy firm. We create custom AI solutions, provide consulting services, training, organise hackathons and more. Our AI solutions include NLP, predictive analytics, computer vision etc.
	</p>
	<div class="space"></div>
	<StartSurveyQ />
</div>

<!-- <figure>
			<img alt='Borat' src='great-success.png'>
			<figcaption>HIGH FIVE!</figcaption>
		</figure>
	-->
