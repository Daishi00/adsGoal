<script lang="ts">
	import IoMdMegaphone from 'svelte-icons/io/IoMdMegaphone.svelte';
	import MdShowChart from 'svelte-icons/md/MdShowChart.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
	import type { HomeIcon } from '../../../utils/types';
	export let icon: HomeIcon;
	export let header: string;
</script>

<div class="bg-white flex flex-col w-96 rounded-lg p-4 items-center gap-2 shadow-2xl flex-wrap">
	<div class="w-16 text-blue-700">
		{#if icon === 'scale'}
			<IoMdMegaphone />
		{:else if icon === 'chart'}
			<MdShowChart />
		{:else if icon === 'group'}
			<MdPeople />
		{/if}
	</div>
	<h3 class="text-blue-700 font-bold text-2xl">{header}</h3>
	<p>
		<slot />
	</p>
</div>
