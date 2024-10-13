<script>
	// Exporting the singleRecipe prop to be passed from the parent component
	export let singleRecipe;

	function getStars(difficulty) {
		return '⭐'.repeat(difficulty);
	}
</script>

<!-- Button to navigate to the recipe details page -->
<button
	on:click={() => (window.location.href = `/rezepte/${singleRecipe.name}`)}
	on:keydown={(e) => e.key === 'Enter' && (window.location.href = `/rezepte/${singleRecipe.name}`)}
	aria-label={`View recipe ${singleRecipe.name}`}
	class="text-left"
>
	<!-- Card layout -->
	<div class="flex flex-col bg-sv-beige/60 min-w-96 max-w-96 h-[450px] p-2 mx-4 rounded-xl">
		<div class="mb-2 max-h-44 rounded-xl bg-slate-400 overflow-hidden">
			<!-- Using a prop in an attribute -->
			<img
				class="object-cover h-full w-full"
				src="src/lib/data/img/{singleRecipe.image}"
				alt="This dish"
			/>
		</div>
		<div class="mx-2 mb-6">
			<div class="flex flex-row justify-between items-baseline">
				<!-- Using a prop in text content -->
				<p class="font-heading text-2xl font-black">{singleRecipe.name}</p>
				<div class="flex flex-row">
					<p class="font-extrabold text-sm">{singleRecipe.duration}min</p>
					,
					<p>{getStars(singleRecipe.difficulty)}</p>
				</div>
			</div>
			<p class="font-extrabold text-sm">{singleRecipe.category}</p>
			<!-- If block to conditionally render description -->
			{#if singleRecipe.description !== undefined}
				<p class="font-extrabold text-base mt-2 mb-1">Beschreibung</p>
				<p class="font-semibold text-sm">{singleRecipe.description}</p>
			{/if}
			<p class="font-extrabold text-base mt-2 mb-1">Zutaten</p>
			<ul class="font-semibold text-sm">
				{#each singleRecipe.ingredients as ingredient}
					{ingredient[0]} {ingredient[1]} {ingredient[2]},&nbsp;
				{/each}
			</ul>
		</div>
	</div>
</button>
