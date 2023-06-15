<script lang="ts">
	import FaUserTie from 'svelte-icons/fa/FaUserTie.svelte';
	import FaHandshake from 'svelte-icons/fa/FaHandshake.svelte';
	import FaChartBar from 'svelte-icons/fa/FaChartBar.svelte';
	export let icon: 'user' | 'handshake' | 'chart';
</script>

<div
	class="py-4 px-6 rounded-md flex justify-center flex-col place-items-center gap-4 border border-blue-200 relative max-w-lg"
>
	<div class="w-10 h-10 bg-blue-600 text-white grid place-items-center rounded-full">
		<div class="w-5">
			{#if icon === 'user'}
				<FaUserTie />
			{:else if icon === 'handshake'}
				<FaHandshake />
			{:else if icon === 'chart'}
				<FaChartBar />
			{/if}
		</div>
	</div>
	<div class="w-full h-[1px] bg-blue-200" />
	<p class="text-justify">
		<slot />
	</p>
</div>
