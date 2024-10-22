import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Ensure the build is configured properly for both client and SSR
		ssr: true,
		outDir: 'build'
	}
});
