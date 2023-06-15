<script>
	import PriceItemn from '$lib/components/Prices/PriceItem.svelte';
	import PriceList from '$lib/components/Prices/PriceList.svelte';
</script>

<div class="grid grid-cols-1 gap-12 md:gap-24">
	<div class="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
		<h1>Dynamiczna oferta cenowa <br />w zależności od twoich potrzeb.</h1>
	</div>
	<PriceList />
</div>
