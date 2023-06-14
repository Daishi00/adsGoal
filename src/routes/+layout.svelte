<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-screen r">
	<Header />
	<main class="max-w-screen m-4 md:m-10 flex flex-1 flex-col">
		<slot />
	</main>
	<Footer />
</div>
