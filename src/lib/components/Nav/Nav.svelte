<script>
	import Button from '../Button.svelte';
	import { navArr } from './constants';
</script>

<nav>
	<ul class="hidden lg:flex flex-row gap-10 text-lg place-items-center">
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
