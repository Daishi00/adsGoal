<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<p>
	<label class="text-gray-600"
		>{label} <br />
		<input type="text" class="w-full h-8 border-gray-200 border-2 rounded-sm my-2" {name} /></label
	>
</p>
