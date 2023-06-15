<script>
	import Form from '$lib/components/Form/Form.svelte';
	import Contact from '$lib/images/contact.svelte';
</script>

<div class="grid gap-32 mt-12 grid-cols-2">
	<div class="flex flex-col justify-center place-items-center gap-2">
		<h2 class="text-4xl text-center font-bold">Nie mogę się doczekać współpracy z Tobą!</h2>
		<h3 class="text-1xl text-center text-gray-500">Skorzystaj z poniższego formularza.</h3>
		<Form />
	</div>
	<div class="w-full">
		<Contact />
	</div>
</div>
