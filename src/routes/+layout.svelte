<script>
	import './styles.css';
	import Header from '../lib/Header.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>

	
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-auto-rows: max-content;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		overflow-x: hidden;
	}
	/* Tablet */
	@media (min-width: 768px){
		.container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	/* Tablet large and Laptop */
	@media (min-width: 1024px) {
		.container {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	/* Large screen */
	@media (min-width: 1280px){
		.container {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	/* Extra Large screen */
	@media (min-width: 1536px){
		.container {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}
	}

	main {
		grid-column: 1/-1;
	}
</style>
