import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@duckdb/duckdb-wasm")) return "duckdb";
          if (id.includes("@finos/perspective")) return "perspective";
          if (id.includes("apache-arrow")) return "arrow";
          if (
            id.includes("@codemirror") ||
            id.includes("svelte-codemirror") ||
            id.includes("@lezer")
          )
            return "codemirror";
          return undefined;
        },
      },
    },
  },
  worker: {
    format: "es",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
