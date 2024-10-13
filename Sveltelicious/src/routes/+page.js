import { fetchRecipes } from '$lib';

// Beim Laden der Seite werden die Rezepte geladen und als `recipes` zur Verfügung gestellt (alternativ in onMount in +page.svelte)
export async function load({ fetch }) {
	const recipes = await fetchRecipes(fetch);

    // Die Rezepte werden als `recipes` übergeben
	return {
		recipes
	};
}
