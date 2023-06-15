<script lang="ts">
	import { fade } from 'svelte/transition';
	export let key: string;
	export let duration: number = 300;
</script>

{#key key}
	<main in:fade={{ duration }} class="overflow-y-visible flex flex-1 justify-center">
		<slot />
	</main>
{/key}
