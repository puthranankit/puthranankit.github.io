import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Ensure the output directory is set to 'build'
  },
  base: "/puthranankit.github.io/", // Ensure this matches your GitHub Pages repository name
});
