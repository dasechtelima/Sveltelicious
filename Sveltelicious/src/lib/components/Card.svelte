<script>
	export let singleRecipe;
	import { getDurationFormatted } from '$lib';

	function getStars(difficulty) {
		return '⭐'.repeat(difficulty);
	}
</script>

<button
	on:click={() => (window.location.href = `/rezepte/${singleRecipe.name}`)}
	on:keydown={(e) => e.key === 'Enter' && (window.location.href = `/rezepte/${singleRecipe.name}`)}
	aria-label={`View recipe ${singleRecipe.name}`}
	class="text-left"
>
	<div class="flex flex-col bg-sv-beige/60 min-w-96 max-w-96 h-[450px] p-2 mx-4 rounded-xl">
		<div class="mb-2 max-h-44 rounded-xl bg-slate-400 overflow-hidden">
			<img class="object-cover h-full w-full" src={`/img/${singleRecipe.image}`} alt="This dish" />
		</div>
		<div class="mx-2 mb-6">
			<div class="flex flex-row justify-between items-baseline">
				<p class="font-heading text-2xl font-black">{singleRecipe.name}</p>
				<div class="flex flex-row">
					<p>
						<span class="font-extrabold text-sm">{getDurationFormatted(singleRecipe.duration)}</span
						>,
						{getStars(singleRecipe.difficulty)}
					</p>
				</div>
			</div>
			<p class="font-extrabold text-sm">{singleRecipe.category}</p>
			<p class="font-extrabold text-base mt-2 mb-1">Beschreibung</p>
			<p class="font-semibold text-sm">{singleRecipe.description}</p>
			<p class="font-extrabold text-base mt-2 mb-1">Zutaten</p>
			<ul class="font-semibold text-sm">
				{#each singleRecipe.ingredients as ingredient}
					{ingredient[0]} {ingredient[1]} {ingredient[2]},&nbsp;
				{/each}
			</ul>
		</div>
	</div>
</button>
