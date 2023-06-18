<script lang="ts">
	import Nav from './Nav/Nav.svelte';
	import FaBolt from 'svelte-icons/fa/FaBolt.svelte';
	import Hamburger from '$lib/components/Hamburger.svelte';
	export let open: boolean = false;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<header
	class="w-full bg-gray-100 0 h-14 flex pl-4 shadow-sm shadow-blue-200 md:p-0 justify-between md:justify-around items-center flex-shrink-0 fixed z-50"
>
	<div class="flex justify-center">
		<a href="/" class="text-xl lg:text-3xl font-bold flex z-50">
			Ads<span class="text-blue-700">Performance</span>
			<div class="w-4 lg:w-5 text-blue-700 ml-1"><FaBolt /></div></a
		>
	</div>
	<Nav {open} {onClick} />
	<Hamburger {open} {onClick} />
</header>
