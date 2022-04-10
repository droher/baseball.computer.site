import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				{
				  name: "isolation",
				  configureServer(server) {
					server.middlewares.use((_req, res, next) => {
					  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
					  next();
					});
				  },
				},
			  ],
			server: {
				fs: {
					allow: ['./shim']
				}
			}
		},

		serviceWorker: {
			register: false
		}
	}
};

export default config;
