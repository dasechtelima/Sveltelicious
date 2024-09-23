<script>
	export let imgBase64 = '';
	let imgSrc = "data:image/png;base64, " + imgBase64;
</script>

<div class="flex flex-col bg-sv-beige/60 w-[424px] h-[519px] p-2 mx-[17px] rounded-[20px]">
	<img class="h-[199px] bg-slate-400 rounded-[15px] mb-[15px]" src={imgSrc} alt="This dish"/>
	<div class="mx-2 mb-[34px]">
		<div class="flex flex-row justify-between items-center">
			<slot name="Name" />
			<div class="flex flex-row">
				<slot name="Dauer" />
				,
				<slot name="Schwierigkeit" />
			</div>
		</div>
		<slot name="Kategorie" />
		<p class="font-extrabold text-xl mt-[20px] mb-[5px]">Beschreibung</p>
		<slot name="Beschreibung" />
		<p class="font-extrabold text-xl mt-[20px] mb-[5px]">Zutaten</p>
		<slot name="Zutaten" />
	</div>
</div>