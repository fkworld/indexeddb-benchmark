import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // github pages need
  base: "/indexeddb-benchmark/",
  build: {
    outDir: "docs",
    assetsDir: ".",
  },
});
