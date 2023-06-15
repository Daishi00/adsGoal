<script>
	import Nav from './Nav/Nav.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import FaBolt from 'svelte-icons/fa/FaBolt.svelte';
</script>

<header
	class="w-full bg-gray-100 h-14 flex justify-around items-center flex-shrink-0 shadow-md fixed z-50"
>
	<div class="flex justify-center">
		<a href="/" class="text-3xl font-bold flex">
			Ads<span class="text-blue-600">Performance</span>
			<div class="w-5 text-blue-600 ml-1"><FaBolt /></div></a
		>
	</div>
	<Nav />
	<button class="lg:hidden w-12">
		<IoMdMenu />
	</button>
</header>
