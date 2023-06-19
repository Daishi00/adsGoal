<script lang="ts">
	import Button from '../Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<form
	name="contact"
	method="POST"
	action="https://formspree.io/f/xeqwykwb"
	class="container max-w-lg"
>
	<Input type="text" label="Imię" name="name" />
	<Input type="email" label="Email" name="email" />
	<div>
		<TextArea label="Wiadomość" name="message" />
	</div>
	<Button variant="highlight">Wyślij</Button>
</form>
