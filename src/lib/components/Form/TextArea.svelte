<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<p>
	<label class="text-gray-600"
		>{label} <br />
		<textarea
			{name}
			class="w-full border-blue-200 border-2 rounded-sm my-2 h-52 resize-none"
		/></label
	>
</p>
