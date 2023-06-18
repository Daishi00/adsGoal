<script lang="ts">
	import type { Offer } from '../../../routes/oferta/+page.server';
	import Button from '../Button.svelte';
	import MdStars from 'svelte-icons/md/MdStars.svelte';

	export let props: Offer;
	$: ({ type, cost, budget, text, id } = props.offer);
	console.log(props);
</script>

<div
	class="border-blue-200 border rounded-md p-6 max-w-xl xl:max-w-md flex flex-col gap-4 relative lg:h-[360px]"
>
	<div class="flex justify-between text-gray-600 text-xs lg:text-sm">
		<p>{type}</p>
		{#if type === 'Standard'}
			<div class="flex gap-1">
				<p>Najczęściej wybierany</p>
				<div class="w-4 lg:w-5 text-blue-600"><MdStars /></div>
			</div>
		{/if}
	</div>
	<h3 class="text-xl lg:text-3xl">
		{cost}
		{#if id < 4}
			<span class="text-sm lg:text-lg text-gray-500">/ brutto miesięcznie</span>
		{:else}
			<span class="text-sm lg:text-lg text-gray-500"> brutto</span>
		{/if}
	</h3>
	{#if budget}
		<h3 class="text-gray-500 text-sm lg:text-lg">{budget}</h3>
	{/if}
	<p class="text-justify text-sm lg:text-base">
		{text}
	</p>
	<a href="/konsultacja" class="mt-auto">
		<Button variant={type === 'Standard' ? 'highlight' : null}>Skontaktuj się</Button>
	</a>
</div>
