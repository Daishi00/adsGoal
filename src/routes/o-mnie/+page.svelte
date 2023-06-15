<script>
	import man from '$lib/assets/man.png';
	import Experience from '$lib/assets/experience.svelte';
	import Marketing from '$lib/assets/marketing.svelte';

	import Card from '$lib/components/Card/Card.svelte';
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
	<div class="flex justify-center place-items-start order-2 lg:order-1 h-full">
		<img src={man} alt="Person in suit" class="rounded-full h-[500px]" />
	</div>
	<div class="flex flex-col gap-12 place-items-center order-1 lg:order-2">
		<h2 class="text-5xl font-bold text-center">Kim jestem?</h2>
		<Card icon="user">
			W branży marketingu internetowego działam nieprzerwanie od 6 lat, od początku specjalizuję się
			w <span class="font-bold text-blue-600">Google Ads</span>. Przez 5,5 roku pracowałem w 2
			topowych agencjach interaktywnych w Polsce. Ostatnie 2 lata pracy agencyjnej byłem dyrektorem
			działu wykonawczego ADS i poza zarządzaniem działem (9 osób) zajmowałem się obsługą kluczowych
			klientów.</Card
		>
	</div>
	<div class="flex flex-col place-items-center gap-12 order-3">
		<h2 class="text-5xl font-bold text-center">Moje doświadczenie</h2>
		<Card icon="handshake">
			Myślę, że łatwiej byłoby wskazać branże, z którymi nie miałem do czynienia niż wymienić te, z
			którymi współpracowałem pod kątem kampanii <span class="font-bold text-blue-600"
				>Google Ads</span
			>. Specjalizuję się w <span class="font-bold text-blue-600">Ecommerce</span>, choć z branżami
			usługowymi również świetnie sobie radzę. Mam na swoim koncie historię współpracy z czołowymi
			brandami w swoich branżach i wieloletnie doświadczenie w pracy z budżetami rzędu kilkuset
			tysięcy złotych miesięcznie dla pojedynczego klienta (z sukcesami). Oczywiście z klientem
			średnim i małym również bardzo dobrze sobie radzę. W pracy freelancera cenię sobie fakt, że
			mogę skupić się na detalach i nie ma czynników, które mnie ograniczają. Z klientami buduję
			jasne relacje biznesowe, które są zorientowane na wynik.</Card
		>
	</div>
	<div class="grid place-items-center order-4">
		<Experience />
	</div>
	<div class="grid place-items-center order-6 lg:order-5">
		<Marketing />
	</div>
	<div class="flex flex-col place-items-center gap-12 order-5 lg:order-6 lg:mt-24">
		<h2 class="text-5xl font-bold text-center">Co dla Ciebie zrobię?</h2>
		<Card icon="chart">
			W pracy z systemem <span class="font-bold text-blue-600">Google Ads</span> zapewniam
			kompleksową obsługę klienta. Zadbam o każdy element współpracy (od stworzenia konta Ads
			poprzez odpowiednie tagowanie z pomocą <span class="font-bold text-blue-600">GTM</span>,
			stworzenie i skonfigurowanie <span class="font-bold text-blue-600">GA4</span> aż do przejrzystego
			raportowania wyników kampanii). Jeśli Twoim problemem jest to, że pojedyncza złotówka wydawana
			na budżet przynosi zbyt mało złotówek zwrotu, to z dużą dozą prawdopodobieństwa będę w stanie Tobie
			pomóc w zwiększeniu obrotów i/lub ROAS. Z kolei, jeśli Twój biznes to niestandardowy projekt wymagający
			myślenia ‘poza schematem’, to również będę w stanie opracować odpowiednią strategię, by osiągnąć
			założone cele współpracy.
		</Card>
	</div>
</div>
