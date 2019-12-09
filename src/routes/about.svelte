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

	.bottom {
		display:grid;
		grid-auto-rows: min-content;
		justify-self:center;
	}

	.bottom > .buttons > button {
		padding: 10px 40px 10px 40px;
	}

	.buttons {
		justify-self: center;
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

    .timeline .timeline-item .timeline-marker.is-image{
        border: 0px solid #ffffff;
        background:#ffffff;
    }


	.timeline-content{
	width:400px;
	}
	.timeline-item:nth-of-type(2n) .timeline-content{
	width:400px;
	flex-basis:auto;
	}
</style>

<div id="aboutus">
	<img class = "d-none d-lg-block" src="about.png" alt="about_us" height="300px"/>
	<div>
		<h1>About us</h1>

		<p>
			Having met in their previous consulting jobs, Kane and Sam sparked the same idea in providing quality AI services.  They believe in the self-sustainable power of AI and see the potential it brings for organizations, regardless of their size and industry.  
 
		</p> <p>
             
            ThinkCol’s team has grown over the years.  It is now home to consultants, business analysts, data scientists, programmers and UI/UX designers.  Our diverse team works actively to identify clients’ business risks, develop potential ideas through constant communication and collaboration in our AI ecosystem.
		</p>

		<div class="buttons">
			<button on:click={()=>goto("cases")}>Case Studies</button>
			<button on:click={()=>goto("contact")}>Contact Us</button>
		</div>
	</div>
	
</div>
<div class="timeline is-centered" style="padding-top:50px">
    <header class="timeline-header"></header>
    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_Founding.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content" style="padding-top:0px;">
            <p class="heading">2016</p>
            <b>Founded ThinkCol</b>
            <p class="smalltxt">Kane & Sam founded Thinkcol in 2016 after their data consultancy experience in Ernst & Young</p>
        </div>
    </div>

    <div class="timeline-item is-info">
        <div class="timeline-marker  is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_AIWorkshop_1.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content">
            <p class="heading">2017</p>
            <b>Created Hong Kong Data Science Society</b>
            <p class="smalltxt">Created HKDSS to promote data science in Hong Kong through workshops and talks</p>
        </div>
    </div>

    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_Lenovo.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content">
            <p class="heading">2017</p>
            <b>Lenovo NLP Project</b>
            <p class="smalltxt">Created more than 100 AI models to automatically generate social media insights for Lenovo Beijing</p>
        </div>
    </div>
    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_Li%26FungHackathon.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content" style="padding-top:0px;">
            <p class="heading">2017</p>
            <b>Hosted first data science hackathon for Li & Fung</b>
            <p class="smalltxt">Li & Fung engaged ThinkCol to organise the first data science hackathon in Hong Kong</p>
        </div>
    </div>
    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_ASWastonBusinessUnit.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content">
            <p class="heading">March 2018</p>
            <b>Started AI.Lab with A.S Watson</b>
            <p class="smalltxt">Created AI.Lab to create more than 30 AI prototypes for different Business Units of A.S. Watson</p>
        </div>
    </div>



    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_Fasta.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content" style="padding-top:0px;">
            <p class="heading">2019</p>
            <b>Provided AI services to 20 major companies in Hong Kong</b>
            <p class="smalltxt">Services include Machine Learning, Visualization, Hackathons and Training</p>
        </div>
    </div>

    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_ExpandingTeam.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content">
            <p class="heading">2019</p>
            <b>Team grew from 3 people to 15 people</b>
            <p class="smalltxt">Established both consulting team and product team</p>
        </div>
    </div>

    <div class="timeline-item is-info">
        <div class="timeline-marker is-image is-128x128">
            <img src="https://thinkcol-site-assets.s3.ap-east-1.amazonaws.com/Milestone_icon_HKTaiwan.png" alt="timeline image" height="128px"/>
        </div>
        <div class="timeline-content" style="padding-top:0px;">
            <p class="heading">2019</p>
            <b>Expanded to Taiwan</b>
            <p class="smalltxt">Created a Taiwan branch to start extending our services in different regions</p>
        </div>
    </div>

</div>
<div class = "bottom">
	<div class="buttons">
		<button on:click={()=>goto("cases")}>Learn More</button>
		<button on:click={()=>goto("contact")}>Contact Us</button>
	</div>
</div>