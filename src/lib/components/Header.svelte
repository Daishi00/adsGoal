<script lang="ts">
	import Nav from './Nav/Nav.svelte';
	import Hamburger from '$lib/components/Hamburger.svelte';
	export let open: boolean = false;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<header
	class="w-full bg-gray-100 0 h-14 pl-4 shadow-sm shadow-blue-200 md:p-0 flex justify-center fixed z-50"
>
	<div class="flex justify-between md:justify-around items-center h-full w-full max-w-[1800px]">
		<div class="flex justify-center">
			<a href="/" class="text-3xl lg:text-4xl font-bold flex z-50">
				Ads<span class="text-blue-700">Goal</span>
			</a>
		</div>
		<Nav {open} {onClick} />
		<Hamburger {open} {onClick} />
	</div>
</header>
