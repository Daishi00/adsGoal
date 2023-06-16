<script>
	import PriceList from '$lib/components/Prices/PriceList.svelte';
	import Analytics from '$lib/assets/analytics.svelte';
	import Button from '$lib/components/Button.svelte';
	import { prices } from '$lib/components/Prices/constants';
	import PriceItem from '$lib/components/Prices/PriceItem.svelte';
	import Analysis from '$lib/assets/analysis.svelte';
</script>

<svelte:head>
	<title>Oferta</title>
	<meta
		name="Dynamiczna oferta cenowa w zależności od twoich potrzeb. Google Ads pakiety, Wdrożenie Analityki (GA4), Audyt kampanii Google Ads"
	/>
</svelte:head>

<div class="grid grid-cols-1 gap-12 md:gap-16">
	<h1 class="text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
		Dynamiczna oferta cenowa <br />w zależności od twoich potrzeb.
	</h1>
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		Google Ads pakiety:
	</h2>
	<PriceList />
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		Wdrożenie Analityki (GA4):
	</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1">
			<Analytics />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			<PriceItem props={prices[3]} />
		</div>
	</div>
	<h2 class="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
		Audyt kampanii Google Ads:
	</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
		<div class="grid place-items-center lg:col-start-1 lg:col-end-3 order-2 lg:order-1">
			<Analysis />
		</div>
		<div class="lg:col-start-3 lg:col-end-3 order-1 lg:order-2">
			<PriceItem props={prices[4]} />
		</div>
	</div>
</div>
