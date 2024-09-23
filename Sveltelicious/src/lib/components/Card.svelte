<script>
	export let imgBase64 = '';
	let imgSrc = "data:image/png;base64, " + imgBase64;
</script>

<div class="flex flex-col bg-sv-beige/60 w-96 h-[450px] p-2 mx-4 rounded-xl">
	<img class="bg-slate-400 rounded-4 mb-2 h-32" src={imgSrc} alt="This dish"/>
	<div class="mx-2 mb-[34px]">
		<slot name="Name" />
		<div class="flex flex-row">
			<slot name="Dauer" />
			,
			<slot name="Schwierigkeit" />
		</div>
		<slot name="Kategorie" />
		<p class="font-extrabold text-base mt-4 mb-1">Beschreibung</p>
		<slot name="Beschreibung" />
		<p class="font-extrabold text-base mt-4 mb-1">Zutaten</p>
		<slot name="Zutaten" />
	</div>
</div>