<script>
	export let imgBase64 = '';
	let imgSrc = 'data:image/png;base64, ' + imgBase64;
</script>

<div class="flex flex-col bg-sv-beige/60 w-96 h-[450px] p-2 mx-4 rounded-xl">
	<div class="mb-2 max-h-44 rounded-xl bg-slate-400 overflow-hidden">
		<img class="object-cover h-full w-full" src={imgSrc} alt="This dish" />
	</div>
	<div class="mx-2 mb-6">
		<div class="flex flex-row justify-between items-baseline">
			<slot name="Name" />
			<div class="flex flex-row">
				<slot name="Dauer" />
				,
				<slot name="Schwierigkeit" />
			</div>
		</div>
		<slot name="Kategorie" />
		<p class="font-extrabold text-base mt-2 mb-1">Beschreibung</p>
		<slot name="Beschreibung" />
		<p class="font-extrabold text-base mt-2 mb-1">Zutaten</p>
		<slot name="Zutaten" />
	</div>
</div>