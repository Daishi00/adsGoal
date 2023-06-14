<script lang="ts">
	export let variant: 'highlight' | null = null;
</script>

<button
	class="w-full h-10 rounded-md text-gray-50 {variant === 'highlight'
		? 'bg-blue-600'
		: 'bg-gray-900'}"><slot /></button
>
