<script lang="ts">
	import PriceList from '$lib/components/Prices/PriceList.svelte';
	import Analytics from '$lib/assets/analytics.svelte';
	import PriceItem from '$lib/components/Prices/PriceItem.svelte';
	import Analysis from '$lib/assets/analysis.svelte';
	import type { PageData } from './$types';
	import { blur } from 'svelte/transition';

	export let data: PageData;
	let { posts, page } = data;
	let y: number = 0;
	let minY: number = 0;

	$: if (y > minY) {
		minY = y;
	}
</script>

<svelte:head>
	<title>Oferta</title>
	<meta
		name="description"
		content="Dynamiczna oferta cenowa w zależności od twoich potrzeb. Google Ads pakiety, Wdrożenie Analityki (GA4), Audyt kampanii Google Ads"
	/>
</svelte:head>
<svelte:window bind:scrollY={y} />

<div class="container grid grid-cols-1 gap-12 md:gap-18 mx-auto">
	<div class="xl:w-[70%] m-auto">
		<h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
			{page.headermain}
		</h1>
	</div>
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
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1 w-1/2">
			<Analytics />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			{#if minY > 450}
				<div in:blur={{ duration: 700 }}>
					<PriceItem props={posts[4]} />
				</div>
			{/if}
		</div>
	</div>
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		{page.header3}
	</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1 w-1/2">
			<Analysis />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			{#if minY > 950}
				<div in:blur={{ duration: 700 }}>
					<PriceItem props={posts[5]} />
				</div>
			{/if}
		</div>
	</div>
</div>
