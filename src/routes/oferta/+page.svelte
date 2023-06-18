<script lang="ts">
	import PriceList from '$lib/components/Prices/PriceList.svelte';
	import Analytics from '$lib/assets/analytics.svelte';
	import { prices } from '$lib/components/Prices/constants';
	import PriceItem from '$lib/components/Prices/PriceItem.svelte';
	import Analysis from '$lib/assets/analysis.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts, page } = data);
	console.log(data.posts);
</script>

<svelte:head>
	<title>Oferta</title>
	<meta
		name="description"
		content="Dynamiczna oferta cenowa w zależności od twoich potrzeb. Google Ads pakiety, Wdrożenie Analityki (GA4), Audyt kampanii Google Ads"
	/>
</svelte:head>

<div class="grid grid-cols-1 gap-12 md:gap-16">
	<h1 class="text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
		{page.headermain}
	</h1>
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		{page.header1}
	</h2>
	{#if posts}
		<PriceList offerArr={posts} />
	{/if}
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		{page.header2}
	</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1">
			<Analytics />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			<PriceItem props={data.posts[3]} />
		</div>
	</div>
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		{page.header3}
	</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1">
			<Analysis />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			<PriceItem props={data.posts[4]} />
		</div>
	</div>
</div>
