import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import biomePlugin from "vite-plugin-biome"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      mode: "check",
      applyFixes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src/", import.meta.url)),
    },
  },
})
