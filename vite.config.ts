import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
