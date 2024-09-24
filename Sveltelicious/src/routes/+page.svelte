<script>
	import { onMount } from 'svelte';
	import { fetchRecipes } from '$lib';
	import Card from '$lib/components/Card.svelte';

	let recipes = [];
	let allRecipes = [];
	let activeCategory = '';

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

	function handle_search() {
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
	}

	function reset() {
		recipes = allRecipes;
		activeCategory = '';
	}

	//Category Filter

	function filter_category(category) {
		if (activeCategory === category) {
			reset();
			return;
		}

		activeCategory = category;
		const searchTerm = category.toLowerCase();
		recipes = allRecipes.filter(recipe => recipe.Kategorie.toLowerCase().includes(searchTerm));
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
<div class="flex place-items-center flex-col mb-8">
	<p class="font-heading text-5xl m-2">What do you fancy today?</p>
	<div class="flex flex-row place-content-center font-semibold mt-3">
		<button on:click={() => filter_category('Frühstück')} on:blur={reset}
						class={`bg-[#EDEDED] border-solid border-2 rounded-xl border-[#D9D9D9] w-28 h-11 p-2 hover:bg-sv-green hover:border-black ${activeCategory === 'Frühstück' ? 'bg-sv-green' : ''}`}>
			Frühstück
		</button>
		<button on:click={() => filter_category('Mittag')} on:blur={reset}
						class={`mx-2 bg-[#EDEDED] border-solid border-2 rounded-xl border-[#D9D9D9] w-28 h-11 p-2 hover:bg-sv-green hover:border-black ${activeCategory === 'Mittag' ? 'bg-sv-green' : ''}`}>
			Mittag
		</button>
		<button on:click={() => filter_category('Abend')} on:blur={reset}
						class={`bg-[#EDEDED] border-solid border-2 rounded-xl border-[#D9D9D9] w-28 h-11 p-2 hover:bg-sv-green hover:border-black ${activeCategory === 'Abend' ? 'bg-sv-green' : ''}`}>
			Abend
		</button>
	</div>
</div>
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