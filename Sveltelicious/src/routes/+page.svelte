<script>
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import Loading from './Loading.svelte';

	let recipes = [];
	let allRecipes = [];

	onMount(async () => {
		const response = await fetch('src/lib/data/rezepte.json');
		allRecipes = await response.json();
		recipes = allRecipes;
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

<a href="/" class="font-heading text-black font-black text-6xl">
	<span class="text-sv-red">Svelte</span>licious
</a>
<label for="search">Product Search</label>
<input id="search" bind:value={search} on:input={handle_search} />
{#if searching}
	<Loading />
{/if}
<div class="flex flex-row">
	{#each recipes as recipe}
		<Card>
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