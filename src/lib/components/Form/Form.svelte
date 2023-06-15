<script lang="ts">
	import Button from '../Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<form name="contact" data-netlify="true" class="w-full">
	<Input label="Imię" name="name" />
	<Input label="Email" name="email" />
	<div>
		<TextArea label="Wiadomość" name="message" />
	</div>
	<Button variant="highlight">Wyślij</Button>
</form>
