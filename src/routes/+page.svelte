<script>
	import Advertise from '$lib/assets/advertise.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Wykorzystaj potencjał GoogleAds</title>
	<meta
		name="description"
		content="Wykorzystaj potencjał GoogleAds. Rozwiń swój biznes i dotrzyj do większej liczby potencjalnych klientów"
	/>
</svelte:head>

<div class="grid gap-24">
	<div class="flex flex-col lg:flex-row gap-4">
		<div class="flex flex-col gap-4 lg:gap-12 text-center lg:text-start place-content-center">
			<h1 class="text-4xl lg:text-6xl font-bold">
				Wykorzystaj potencjał <br /><span class="text-blue-700 leading-snug">Google Ads</span>
			</h1>
			<h2 class="text-2xl lg:text-3xl text-gray-700">
				Rozwiń swój biznes i dotrzyj do większej liczby potencjalnych klientów.
			</h2>
			<a href="/konsultacja" class="w-48 m-auto lg:m-0">
				<Button variant="highlight">Skontaktuj się</Button>
			</a>
		</div>
		<div class="grid place-items-center">
			<Advertise />
		</div>
	</div>
	<div>
		<h2 class="text-center text-3xl lg:text-5xl text-gray-800 font-bold">
			Dlaczego <span class="text-blue-700">Google Ads</span>?
		</h2>
	</div>
</div>
