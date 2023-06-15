<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<p>
	<label class="text-gray-600"
		>{label} <br />
		<textarea
			{name}
			class="w-full border-gray-200 border-2 rounded-sm my-2 max-h-64"
			rows="4"
		/></label
	>
</p>
