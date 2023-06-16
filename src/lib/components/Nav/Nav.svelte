<script lang="ts">
	import Button from '../Button.svelte';
	import { navArr } from './constants';
	import { fly } from 'svelte/transition';
	export let open: boolean = false;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<nav>
	<ul class="hidden md:flex flex-row gap-10 text-lg place-items-center">
		{#each navArr as navItem (navItem.id)}
			<li>
				<a href={navItem.href}
					>{#if navItem.href === '/konsultacja'}<Button variant="highlight">{navItem.name}</Button>
					{:else}
						<p class="hover:text-blue-700">{navItem.name}</p>
					{/if}</a
				>
			</li>
		{/each}
	</ul>
</nav>
{#if open}
	<nav
		class="absolute md:hidden z-40 bg-gray-100 top-14 right-0 w-full pb-4"
		in:fly={{ y: -200 }}
		out:fly={{ y: -200 }}
	>
		<ul class="flex flex-col justify-center place-items-center gap-4">
			{#each navArr as navItem (navItem.id)}
				<li>
					<a href={navItem.href} on:click={onClick}
						>{#if navItem.href === '/konsultacja'}<Button variant="highlight">{navItem.name}</Button
							>
						{:else}
							<p class="hover:text-blue-700 text-2xl">{navItem.name}</p>
						{/if}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
