// place files you want to import through the `$lib` alias in this folder.
export async function fetchRecipes() {
	const response = await fetch('/src/lib/data/rezepte.json');
	return await response.json();
}
