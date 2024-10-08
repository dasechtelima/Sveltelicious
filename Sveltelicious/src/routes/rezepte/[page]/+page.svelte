<script>
	export let data;
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { fetchRecipes } from '$lib';

	let recipe = {};
	let zutaten = [];
	let zubereitungsSchritte = [];
	let portionen = 4;
	let desc = true;

	onMount(async () => {
		recipe = (await fetchRecipes()).find((recipe) => recipe.Name === data.name);
		if (!recipe) {
			error(404, {
				message: 'Not found'
			}); // TODO: 404 page routing
		}
		zutaten = recipe.Zutaten;
		zubereitungsSchritte = recipe.Zubereitung;
	});
</script>

<div class="bg-sv-beige/50 flex flex-col min-h-screen pb-14">
	<div class="flex justify-between items-center mx-8 mt-3">
		<a href="/" class="font-heading text-black font-black text-6xl">
			<span class="text-sv-red">Svelte</span>licious
		</a>
	</div>

	<div class="flex justify-center flex-grow">
		<div class="flex flex-col w-3/5 gap-2">
			<div class="flex flex-col align-middle">
				<div class="flex justify-center">
					<div class="mb-2 max-h-72 w-1/2 rounded-xl bg-slate-400 overflow-hidden">
						{#if recipe.Bild != undefined}
							<img
								class="object-cover h-full w-full"
								src="/src/lib/data/img/{recipe.Bild}"
								alt="This dish"
							/>
						{/if}
					</div>
				</div>
				<div class="text-center font-semibold">
					<h1 class="font-heading text-6xl">{data.name}</h1>
					<h2>
						{recipe.Kategorie}, ⏱️ {recipe.Dauer >= 60 ? Math.floor(recipe.Dauer / 60) + ' h ' : ''}
						{recipe.Dauer % 60 ? (recipe.Dauer % 60) + ' min' : ''}, {'⭐'.repeat(
							recipe.Schwierigkeit
						)}
					</h2>
				</div>
			</div>
			<hr class="border-black" />
			<div class="flex gap-12 pt-4">
				<div class="flex gap-2 flex-col">
					<div class="flex justify-between items-center">
						<h3 class="text-xl font-bold">Zutaten</h3>
						<div class="flex w-40">
							<input
								type="number"
								id="portions"
								bind:value={portionen}
								min="1"
								class="w-14 bg-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 py-1 pl-4 text-right"
							/>
							<label for="portions" class="rounded-r-lg bg-sv-green py-1 px-4">Portionen</label>
						</div>
					</div>
					<div class="border rounded-3xl">
						<table class="bg-sv-white rounded-3xl w-72 font-bold text-base">
							<tbody>
								{#each [...zutaten] as zutat}
									<tr class="border">
										<td class="text-right"
											>{zutat[0] != 0 ? zutat[0] * portionen + zutat[1] : ''}</td
										>
										<td class="pl-6">{zutat[2] ?? ''}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					{#if recipe.Beschreibung}
						<div class="selection:bg-transparent">
							<label for="desc" class="text-lg font-bold cursor-pointer selection:bg-transparent relative ml-[-1.3em]">{desc ? "▼" : "▶"}</label>
							<input type="checkbox" id="desc" bind:checked={desc} class="hidden pointer "><label for="desc" class="text-xl font-bold  cursor-pointer">Beschreibung</label>
							{#if desc}
								<p class="mt-1">{recipe.Beschreibung}</p>
							{/if}
						</div>
					{/if}
					<div>
						<h2 class="font-bold text-2xl mb-1">Zubereitung</h2>
						{#each [...zubereitungsSchritte] as zubereitungsSchritt}
							<p class="mb-4">{zubereitungsSchritt}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
