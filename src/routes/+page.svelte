<script>
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/assets/search.svelte';
	import IoMdMegaphone from 'svelte-icons/io/IoMdMegaphone.svelte';
	import MdShowChart from 'svelte-icons/md/MdShowChart.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
</script>

<svelte:head>
	<title>Wykorzystaj potencjał GoogleAds</title>
	<meta
		name="description"
		content="Wykorzystaj potencjał GoogleAds. Rozwiń swój biznes i dotrzyj do większej liczby potencjalnych klientów"
	/>
</svelte:head>

<div class="grid gap-12 place-items-center">
	<div class="grid grid-cols-1 lg:grid-cols-2 place-items-start gap-x-36 gap-y-12 container">
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
	<div class="w-screen bg-blue-700 h-128 py-8">
		<h2 class="text-center text-3xl lg:text-5xl text-white ont-bold">
			Dlaczego <span class="">Google Ads</span>?
		</h2>
		<div
			class="flex gap-16 mt-8 justify-center text-center flex-col lg:flex-row items-center lg:items-stretch"
		>
			<div
				class="bg-white flex flex-col w-96 rounded-lg p-4 items-center gap-2 shadow-2xl flex-wrap"
			>
				<div class="w-16 text-blue-700">
					<IoMdMegaphone />
				</div>
				<h3 class="text-blue-700 font-bold text-2xl">Duży zasięg</h3>
				<p class="">
					Google jest jednym z najpopularniejszych wyszukiwarek na świecie, a Google Ads umożliwia
					dotarcie do potencjalnych klientów na całym świecie lub w wybranych regionach.
				</p>
			</div>
			<div class="bg-white flex flex-col w-96 rounded-lg p-4 items-center gap-2 shadow-2xl">
				<div class="w-16 text-blue-700">
					<MdShowChart />
				</div>
				<h3 class="text-blue-700 font-bold text-2xl">Natychmiastowe wyniki</h3>
				<p>
					W przeciwieństwie do wielu innych form reklamy, Google Ads pozwala na natychmiastowe
					wyświetlanie Twoich reklam potencjalnym klientom w wynikach wyszukiwania Google. Dzięki
					temu możesz szybko zdobywać nowych klientów i zwiększać sprzedaż.
				</p>
			</div>
			<div class="bg-white flex flex-col w-96 rounded-lg p-4 items-center gap-2 shadow-2xl">
				<div class="w-16 text-blue-700">
					<MdPeople />
				</div>
				<h3 class="text-blue-700 font-bold text-2xl">Precyzyjne docieranie do grupy docelowej</h3>
				<p>
					Google Ads umożliwia precyzyjne określenie, kto ma zobaczyć Twoje reklamy na podstawie
					różnych kryteriów, takich jak lokalizacja, wiek, płeć, zainteresowania itp. To pozwala
					skupić się na potencjalnych klientach, którzy są bardziej skłonni do zakupu Twoich
					produktów lub usług.
				</p>
			</div>
		</div>
	</div>
</div>
