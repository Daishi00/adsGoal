<script lang="ts">
	import Button from '../Button.svelte';
	import PriceItem from './PriceItem.svelte';
	import { prices } from './constants';
</script>

<ul class="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-4">
	{#each prices as price (price.id)}
		{#if price.id < 4}
			<li>
				<PriceItem props={price} />
			</li>
		{/if}{/each}
	<li
		class="xl:col-start-2 xl:col-end-3 border-blue-200 border rounded-md p-6 w-full max-w-xl xl:max-w-md flex flex-col gap-4"
	>
		<h5 class="text-gray-600 text-sm">Pakiet indywidulany</h5>
		<p>Rozliczenia fee zależne od obrotu etc.</p>
		<a href="/konsultacja">
			<Button>Skontaktuj się</Button>
		</a>
	</li>
</ul>
