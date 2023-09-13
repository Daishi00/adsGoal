<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<p>
	<label class="text-gray-500 text-sm"
		>{label} <br />
		<textarea
			{name}
			class="w-full border-blue-200 border rounded-md my-2 h-52 resize-none focus:outline-none focus:border-blue-600 p-1"
		/></label
	>
</p>
