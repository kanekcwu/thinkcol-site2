<script>
	import Nav from '../components/Nav.svelte';
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 80em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: calc(100vh - 18.7em);

		--button-colour : transparent;
        --button-text-colour: #242424;
		--button-active-colour : #f7574b;
        --button-active-text-colour: white;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />