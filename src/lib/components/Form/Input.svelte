<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: 'email' | 'text' | 'website' | 'phone';
</script>

<p>
	<label class="text-gray-600"
		>{label} <br />
		<input
			class="w-full h-8 border-blue-200 border-2 rounded-md my-2 focus:outline-none focus:border-blue-600 p-1"
			{name}
			{type}
		/></label
	>
</p>
