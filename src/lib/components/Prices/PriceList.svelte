<script lang="ts">
	import PriceItem from './PriceItem.svelte';
	import { prices } from './constants';
</script>

<ul
	class="grid grid-cols-1 xl:grid-cols-3 place-items-center place-content-center gap-6 container m-auto"
>
	{#each prices as price (price.id)}
		<li>
			<PriceItem props={price} />
		</li>
	{/each}
</ul>
