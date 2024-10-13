import { error } from '@sveltejs/kit';
import { fetchRecipes } from '$lib';

// Beim Laden der Seite werden die Rezepte geladen und das passende Rezept als `recipe` zur Verfügung gestellt, oder, falls nicht gefunden, ein 404-Fehler geworfen
// load: Dazu da, um Daten zu laden, bevor die Seite gerendert wird
export async function load({ params, fetch }) {
	const recipes = await fetchRecipes(fetch);
	const recipe = recipes.find((r) => r.name === params.rezept);

	// Bei einer statischen Menge an Rezepten lässt sich stattdessen auch gut ein Param-Matcher verwenden (unter z.B. src/params/recipe.js => Pfad: src/routes/rezepte/[rezept=recipe]/...)
	if (!recipe) {
		throw error(404, 'Not found');
	}

	// Das gefundene Rezept wird als `recipe` übergeben
	return {
		recipe
	};
}
