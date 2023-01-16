import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@api", replacement: path.resolve(__dirname, "src/api") },
      { find: "@query", replacement: path.resolve(__dirname, "src/query") },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
