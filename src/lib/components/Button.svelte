<script lang="ts">
	export let variant: 'highlight' | null = null;
</script>

<button
	class="w-full px-4 h-10 rounded-md text-gray-50 {variant === 'highlight'
		? 'bg-blue-600 hover:bg-blue-700'
		: 'bg-gray-900 hover:bg-gray-800'}"><slot /></button
>
