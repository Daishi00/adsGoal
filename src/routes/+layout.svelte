<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/Transition.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col h-screen">
	<Header />
	<PageTransition key={data.url} duration={200}>
		<div class="container mt-32 mb-16 mx-8">
			<slot />
		</div>
	</PageTransition>
	<Footer />
</div>
