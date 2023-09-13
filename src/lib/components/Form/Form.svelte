<script lang="ts">
	import Button from '../Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<form name="contact" method="POST" action="https://formspree.io/f/xeqwykwb" class=" max-w-lg">
	<Input type="text" label="Imię" name="name" />
	<div class="grid grid-cols-2 gap-6">
		<Input type="email" label="Email" name="email" />
		<Input type="phone" label="Telefon" name="phone" />
	</div>
	<Input type="website" label="Twoja strona www" name="website" />
	<TextArea label="Wiadomość" name="message" />
	<Button variant="highlight">Wyślij</Button>
</form>
