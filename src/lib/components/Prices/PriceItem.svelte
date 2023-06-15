<script lang="ts">
	import Button from '../Button.svelte';
	import type { Price } from './types';
	import MdStars from 'svelte-icons/md/MdStars.svelte';

	export let props: Price;
	$: ({ type, cost, budget, text, variant, id } = props);
</script>

<div
	class="border-blue-200 border rounded-md p-6 max-w-xl xl:max-w-md flex flex-col gap-4 relative lg:h-[360px]"
>
	<div class="flex justify-between text-gray-600 text-sm">
		<h5>{type}</h5>
		{#if variant === 'highlight'}
			<div class="flex gap-1">
				<h5>Najczęściej wybierany</h5>
				<div class="w-5 text-blue-600"><MdStars /></div>
			</div>
		{/if}
	</div>
	<h3 class="text-gray-950 text-4xl">
		{cost}
		{#if id < 4}
			<span class="text-lg text-gray-500">/ miesięcznie</span>
		{/if}
	</h3>
	<h3 class="text-gray-500 text-lg">{budget}</h3>
	<p class="text-justify">
		{text}
	</p>
	<a href="/konsultacja" class="mt-auto">
		<Button {variant}>Skontaktuj się</Button>
	</a>
</div>
