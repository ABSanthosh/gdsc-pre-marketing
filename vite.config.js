import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          prependData: `@import './src/styles/_mixins.scss';`,
        },
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
    }),
  ],
});
