<script>
	import { onMount } from 'svelte';
	import { fetchRecipes } from '$lib';
	import Card from '$lib/components/Card.svelte';

	let recipes = [];
	let allRecipes = [];

	onMount(async () => {
		recipes = await fetchRecipes();
		allRecipes = recipes;
		console.log(recipes);
	});

	function getStars(difficulty) {
		return '⭐'.repeat(difficulty);
	}

	// Searchbar
	let search = '';
	let timeout;
	let searching = false;

	function handle_search() {
		searching = true;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(get_recipes, 300);
	}

	function get_recipes() {
		if (!search) {
			reset();
			return;
		}

		const searchTerm = search.toLowerCase();
		recipes = allRecipes.filter(recipe => recipe.Name.toLowerCase().includes(searchTerm));
		searching = false;
	}

	function reset() {
		recipes = allRecipes;
		searching = false;
	}
</script>
<div class="flex justify-between items-center mx-8 mt-3">
	<a href="/" class="font-heading text-black font-black text-6xl">
		<span class="text-sv-red">Svelte</span>licious
	</a>
	<div class="flex justify-center">
		<input placeholder="Search for recipe"
					 class="p-2 border-solid bg-[#EDEDED] border-2 border-sv-green rounded-xl w-64 h-10" id="search"
					 bind:value={search}
					 on:input={handle_search}>
	</div>
</div>
<div class="flex place-content-center">
	<p class="font-heading text-5xl m-2">What do you fancy today?</p></div>
<div class="flex flex-row place-content-center">
	{#each recipes as recipe}
		<Card imgBase64={recipe.Bild}>
			<p slot="Name" class="font-heading text-2xl font-black">{recipe.Name}</p>
			<p slot="Dauer" class="font-extrabold text-sm">{recipe.Dauer}</p>
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