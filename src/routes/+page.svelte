<script>
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/assets/search.svelte';
</script>

<svelte:head>
	<title>Wykorzystaj potencjał GoogleAds</title>
	<meta
		name="description"
		content="Wykorzystaj potencjał GoogleAds. Rozwiń swój biznes i dotrzyj do większej liczby potencjalnych klientów"
	/>
</svelte:head>

<div class="grid gap-12 place-items-center">
	<div class="grid grid-cols-1 lg:grid-cols-2 place-items-start gap-x-36 gap-y-12">
		<div class="flex flex-col gap-8 lg:gap-12 text-center lg:text-start place-content-center">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Wykorzystaj potencjał <br /><span class="text-blue-700 leading-snug">Google Ads</span>
			</h1>
			<h2 class="text-2xl lg:text-3xl text-gray-700 text-center lg:text-left">
				Rozwiń swój biznes i dotrzyj do większej liczby potencjalnych klientów.
			</h2>
			<a href="/oferta" class="w-48 m-auto lg:m-0">
				<Button variant="highlight">Sprawdź ofertę</Button>
			</a>
		</div>
		<div class="mx-auto w-1/2 lg:w-full">
			<Search />
		</div>
	</div>
	<div>
		<h2 class="text-center text-3xl lg:text-5xl text-gray-800 font-bold">
			Dlaczego <span class="text-blue-700">Google Ads</span>?
		</h2>
	</div>
</div>
