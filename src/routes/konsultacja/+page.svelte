<script>
	import Form from '$lib/components/Form/Form.svelte';
	import Contact from '$lib/assets/contact.svelte';
</script>

<svelte:head>
	<title>Bezpłatna konsultacja</title>
	<meta
		name="description"
		content="Nie mogę się doczekać współpracy z Tobą! Skorzystaj z formularza"
	/>
</svelte:head>

<div class="grid gap-16 lg:grid-cols-2 p">
	<div class="flex flex-col justify-center place-items-center gap-4">
		<h2 class="text-4xl text-center font-bold max-w-lg">
			Nie mogę się doczekać współpracy z Tobą!
		</h2>
		<h3 class="text-xl text-center text-gray-500">Skorzystaj z poniższego formularza.</h3>
		<Form />
	</div>
	<div class="grid place-items-center w-3/4 mx-auto">
		<Contact />
	</div>
</div>
