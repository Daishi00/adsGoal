<script lang="ts">
	import Button from '../Button.svelte';
	import PriceItem from './PriceItem.svelte';
	import type { Offer } from '../../../routes/oferta/+page.server';
	import { blur } from 'svelte/transition';

	export let offerArr: Offer[];
</script>

<ul class="grid grid-cols-1 xl:grid-cols-3 place-items-center xl:place-items-stretch gap-4">
	{#each offerArr as item (item.offer.id)}
		{#if item.offer.id <= 4}
			<li
				in:blur={{ delay: 100 * (item.offer.id * 2.5), duration: 600 }}
				class={item.offer.id === 4
					? 'xl:col-start-2 xl:col-end-3 max-w-xl xl:max-w-m w-full  '
					: ''}
			>
				<PriceItem props={item} />
			</li>
		{/if}{/each}
</ul>
