// // place files you want to import through the `$lib` alias in this folder.

// Lädt die Rezepte aus der JSON-Datei und gibt sie als Array zurück
export async function fetchRecipes(fetch) {
	const response = await fetch('/data/recipes.json');
	if (!response.ok) {
		throw new Error('Failed to fetch recipes');
	}
	return await response.json();
}

// Gibt die Dauer in einem lesbaren Format zurück
export function getDurationFormatted(durationInMin) {
	const hours = Math.floor(durationInMin / 60);
	const minutes = durationInMin % 60;
	return `${hours ? `${hours} h` : ''}${minutes ? `${minutes} min` : ''}`;
}