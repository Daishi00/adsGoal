<script lang="ts">
	import man from '$lib/assets/man.png';
	import Experience from '$lib/assets/experience.svelte';
	import Marketing from '$lib/assets/marketing.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	let y: number = 0;
	let minY: number = 0;
	let { posts, page } = data;

	console.log(posts);
	$: if (y > minY) {
		minY = y;
	}
</script>

<svelte:head>
	<title>O mnie</title>
	<meta
		name="description"
		content="Myślę, że łatwiej byłoby wskazać branże, z którymi nie miałem do czynienia niż wymienić te, z
			którymi współpracowałem pod kątem kampani Google Ads"
	/>
</svelte:head>

<svelte:window bind:scrollY={y} />
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-screen container">
	<div class="flex justify-center place-items-start order-2 lg:order-1 h-full">
		<img src={man} alt="Person in suit" class="rounded-full h-[300px] md:h-[400px] lg:h-[500px]" />
	</div>
	<div class="flex flex-col gap-12 place-items-center order-1 lg:order-2">
		<h2 class="text-3xl lg:text-5xl font-bold text-center">{page.header1}</h2>
		<Card icon="user">{@html posts[0].about.text}</Card>
	</div>
	<div class="flex flex-col place-items-center gap-12 order-3">
		<h2 class="text-3xl lg:text-5xl font-bold text-center leading-snug">{page.header2}</h2>
		<Card icon="handshake">
			{@html posts[1].about.text}</Card
		>
	</div>
	<div class="order-4 flex align-bottom justify-end">
		{#if minY > 200}
			<div class="w-3/4 mx-auto" in:fade={{ duration: 800 }}>
				<Experience />
			</div>
		{/if}
	</div>
	<div class="order-6 lg:order-5 flex align-bottom justify-end">
		{#if minY > 900}
			<div class="w-3/4 mx-auto lg:mt-24" in:fade={{ duration: 800 }}>
				<Marketing />
			</div>
		{/if}
	</div>
	<div class="flex flex-col place-items-center gap-12 order-5 lg:order-6 lg:mt-24">
		<h2 class="text-3xl lg:text-5xl font-bold text-center leading-snug">{page.header3}</h2>
		<Card icon="chart">
			{@html posts[2].about.text}
		</Card>
	</div>
</div>
