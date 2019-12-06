<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import { goto } from "@sapper/app";
</script>


<style>
	div#aboutus > div {
		display:grid;
		grid-auto-rows: min-content;
	}

	.buttons {
		justify-self: center;
		margin: 3em 0;
	}

	.buttons > button {
		margin: 0 1em;
	}


	button {
        background-color: var(--button-colour);
        border: 2px solid var(--button-text-colour);
        padding: 10px;
        border-radius: 5px;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    button:hover {
        border-color: var(--button-active-colour);
        background-color: var(--button-active-colour);
        color:var(--button-active-text-colour);
    }

	/* desktop only */
    @media only screen and (min-width: 769px){
		div#aboutus {
			display:grid;
			grid-template-columns: min-content auto;
			column-gap: 1em;
		}
	}
	
</style>

<div id="aboutus">
	<img src="about.png" alt="about_us" />
	<div>
		<h1>About us</h1>

		<p>
			Here at ThinkCol, our passions drive us to deliver the best AI solutions. ThinkCol spearheads data solutions
			through artificial intelligence and machine learning. We work with clients in an AI ecosystem to transform them
			into data-driven entities. This includes creating custom-made AI solutions, consulting, providing training, 
			and organising hackathons and more. Over time, ThinkCol has grown from serving its first client, Lenovo, to reaching
			powerhouses of different industries.
		</p>

		<div class="buttons">
			<button on:click={()=>goto("service")}>Our Services</button>
			<button on:click={()=>goto("contact")}>Contact Us</button>
		</div>
	</div>
	
</div>
