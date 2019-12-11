	<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`cases.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
	let pillars = [
	{
		name:'Machine Learning',
		short_hand: 'ml',
	},
	{
		name:'Data',
		short_hand: 'data',
	},
	{
		name:'Innovation',
		short_hand: 'innovation',
	},
	{
		name:'Analytics',
		short_hand: 'analytics',
	},
	{
		name:'People',
		short_hand: 'people',
	},
	]
</script>


<style>
	.case {
		display:grid;
		grid-auto-rows: min-content;
		justify-self:center;
		text-align:center;
	}
	
	.pillar-title {
		padding:50px;
		display:grid;
		grid-auto-rows: min-content;
		justify-self:center;
		text-align:center;
	}
	.pillar{
		display:grid;
		align-items: center;
		justify-items: center;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-gap:80px;
	}

	img {
		background: black;
  		border-radius: 10%;
  		opacity: 0.8;
	}

	h2 {
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	color: #30486C;
	}

	#title {
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: #30486C;
    }

    .text-block {
  	  font-weight:normal;
      color: #ffff;
      width: 300px;
	  position: absolute;
	  top: 80%;
	  left: 50%;
	  transform: translate(-50%, -50%);

	}

	.image {
	  text-align: left;
  	  position: relative;
  	  background: 
		    linear-gradient(
		      to bottom,
		      rgba(0, 0, 0, 0),
		      rgba(0, 0, 0, 1.0)
		    );
	  border-radius: 10%;
	}

</style>

<svelte:head>
	<title>Cases</title>
</svelte:head>

<div class = "case">
	<h2> Case Studies </h2>
</div>


{#each pillars as pillar}
	<div class = "pillar-title">
		<h4 id = "title"> {pillar.name}</h4>
	</div>

	<div class = "pillar">
		{#each posts as post}
			{#if post.category.includes(pillar.short_hand)}
				<a rel='prefetch' href='cases/{post.slug}'>	
					<div class = 'image'>
						<img src={post.piclink} alt={post.title} width="350px"/>
						<div class="text-block">
						    {post.title}
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
{/each}
