<script lang="ts">
	import Button from '../Button.svelte';
	import type { Price } from './types';
	import MdStars from 'svelte-icons/md/MdStars.svelte';

	export let props: Price;
	$: ({ type, cost, budget, text, variant } = props);
</script>

<div
	class="border-gray-300 border rounded-md p-6 max-w-lg flex flex-col gap-4 xl:h-[350px] relative"
>
	<div class="flex justify-between text-gray-600">
		<h5>{type}</h5>
		{#if variant === 'highlight'}
			<div class="flex gap-2">
				<h5>Najczęściej wybierany</h5>
				<div class="w-6 text-blue-600"><MdStars /></div>
			</div>
		{/if}
	</div>
	<h3 class="text-gray-950 text-4xl">
		{cost} <span class="text-lg text-gray-500">/ miesięcznie</span>
	</h3>
	<h3 class="text-gray-500 text-lg">{budget}</h3>
	<p class="text-justify">
		{text}
	</p>
	<div class="mt-auto">
		<Button {variant}>Skontaktuj się</Button>
	</div>
</div>
