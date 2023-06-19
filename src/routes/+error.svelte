<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="flex flex-col justify-center place-items-center gap-12 h-full">
	<h1 class=" text-6xl">{$page.status}</h1>
	{#if $page.status === 404}
		<h2 class="text-xl lg:text-3xl text-gray-700">Ups! Ta strona nie istnieje.</h2>
	{:else}
		<h2>Coś poszło nie tak...</h2>
	{/if}
	<a href="/"><Button>Wróć na stronę główną</Button></a>
</div>
