<script>
	export let singleRecipe;

	function getStars(difficulty) {
		return '⭐'.repeat(difficulty);
	}
</script>

<button
	on:click={() => (window.location.href = `/rezepte/${singleRecipe.Name}`)}
	on:keydown={(e) => e.key === 'Enter' && (window.location.href = `/rezepte/${singleRecipe.Name}`)}
	aria-label={`View recipe ${singleRecipe.Name}`} class="text-left"
>
	<div class="flex flex-col bg-sv-beige/60 w-96 h-[450px] p-2 mx-4 rounded-xl">
		<div class="mb-2 max-h-44 rounded-xl bg-slate-400 overflow-hidden">
			<img
				class="object-cover h-full w-full"
				src="src/lib/data/img/{singleRecipe.Bild}"
				alt="This dish"
			/>
		</div>
		<div class="mx-2 mb-6">
			<div class="flex flex-row justify-between items-baseline">
				<p class="font-heading text-2xl font-black">{singleRecipe.Name}</p>
				<div class="flex flex-row">
					<p class="font-extrabold text-sm">{singleRecipe.Dauer}</p>
					,
					<p>{getStars(singleRecipe.Schwierigkeit)}</p>
				</div>
			</div>
			<p class="font-extrabold text-sm">{singleRecipe.Kategorie}</p>
			<p class="font-extrabold text-base mt-2 mb-1">Beschreibung</p>
			<p class="font-semibold text-sm">{singleRecipe.Beschreibung}</p>
			<p class="font-extrabold text-base mt-2 mb-1">Zutaten</p>
			<ul class="font-semibold text-sm">
				{#each singleRecipe.Zutaten as zutat}
					{zutat[0]} {zutat[1]} {zutat[2]},&nbsp;
				{/each}
			</ul>
		</div>
	</div>
</button>
