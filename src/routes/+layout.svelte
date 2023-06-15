<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex flex-1 justify-center">
		<div class="container my-16 mx-8">
			<slot />
		</div>
	</main>
	<Footer />
</div>
