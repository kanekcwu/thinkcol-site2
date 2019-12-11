<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>
<script>
	export let segment;
	import { goto } from "@sapper/app";
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-family: Noto Sans;
		padding: 0 1em;
		display: flex;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		height:70px;
		display: grid;
		float: left;
		margin-left:10px;
		align-items:center;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		color:#000000;
		font-size: 20px;
		font-weight: 300;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	a.logo{
		padding:0px;
		display:flex;
		margin-top:15px;
	}

	a.logo img {
		height:35px;
	}

	button {
        background-color: #ffffff;
        border: 2px solid #30486C;
        padding: 5px 15px 5px 15px;
        border-radius: 5px;
        transition: all 0.2s ease;
        cursor: pointer;
        color:#30486C;
        display:block;
        align-self:center;
        justify-self: center;
    }

    button:hover {
        border-color: var(--button-active-colour);
        background-color: var(--button-active-colour);
        color:var(--button-active-text-colour);
    }
	.sticky {
	  position: -webkit-sticky;
	  position: -moz-sticky;
	  position: -ms-sticky;
	  position: -o-sticky;
	  position: sticky;
	  top: 0px;
	  z-index: 100;
	}

</style>


<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top sticky" style = "background-color: #ffffff">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand logo" href="."><img src="thinkcol-logo.png" alt="logo" /></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class:selected='{segment === undefined}' href='.'>Home</a></li>
	  <li class="nav-item"><a class:selected='{segment === "about"}' href='about'>About</a></li>
	  <li class="nav-item"><a class:selected='{segment === "cases"}' href='cases'>Case Studies</a></li>
	  <li class="nav-item"><button on:click={()=>goto("contact")}>Contact</button></li>
    </ul>
  </div>
</nav>
