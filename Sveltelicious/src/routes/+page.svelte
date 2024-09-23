<script>
	import { onMount } from 'svelte';
	import { fetchRecipes } from '$lib';
	import Card from '$lib/components/Card.svelte';

	let recipes = [];

	onMount(async () => {
		recipes = await fetchRecipes();
		console.log(recipes);
	});

	function getStars(difficulty) {
		return '⭐'.repeat(difficulty);
	}
</script>

<a href="/" class="font-heading text-black font-black text-6xl">
	<span class="text-sv-red">Svelte</span>licious
</a>
<div class="flex flex-row">
	{#each recipes as recipe}
		<Card imgBase64={recipe.Bild}>
			<p slot="Name" class="font-heading text-3xl font-black">{recipe.Name}</p>
			<p slot="Dauer" class="font-extrabold">{recipe.Dauer}</p>
			<p slot="Schwierigkeit">{getStars(recipe.Schwierigkeit)}</p>
			<p slot="Kategorie" class="font-extrabold text-sm">{recipe.Kategorie}</p>
			<p slot="Beschreibung" class="font-semibold text-sm">{recipe.Beschreibung}</p>
			<ul slot="Zutaten" class="font-semibold text-sm">
				{#each recipe.Zutaten as zutat}
					{zutat[0]} {zutat[1]},&nbsp;
				{/each}
			</ul>
		</Card>
	{/each}
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>