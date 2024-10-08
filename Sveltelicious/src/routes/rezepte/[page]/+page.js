// src/routes/rezepte/[page]/+page.js
export const load = ({ params }) => {
	return {
		name: params.page
	};
};
