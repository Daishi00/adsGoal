<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/assets/search.svelte';
	import HomeCard from '$lib/components/Card/HomeCard.svelte';
	import type { PageData } from './$types';
	import type { HomeIcons } from '../utils/types';

	export let data: PageData;

	let { posts, page } = data;
	let icons: HomeIcons = ['scale', 'chart', 'group'];
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
				{@html page.header1}
			</h1>
			<h2 class="text-2xl lg:text-3xl text-gray-700 text-center lg:text-left">
				{@html page.header2}
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
		<h2 class="text-center text-3xl lg:text-5xl text-white ont-bold">{@html page.header3}</h2>
		<div
			class="flex gap-16 mt-8 justify-center text-center flex-col lg:flex-row items-center lg:items-stretch"
		>
			{#each posts as post, i (post.home.id)}
				<HomeCard icon={icons[i]} header={post.home.type}>
					{post.home.text}
				</HomeCard>
			{/each}
		</div>
	</div>
</div>
