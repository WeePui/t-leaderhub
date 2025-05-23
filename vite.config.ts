import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
      },
      {
        find: "@constants",
        replacement: fileURLToPath(new URL("./src/constants", import.meta.url)),
      },
      {
        find: "@features",
        replacement: fileURLToPath(new URL("./src/features", import.meta.url)),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@router",
        replacement: fileURLToPath(new URL("./src/router", import.meta.url)),
      },
      {
        find: "@services",
        replacement: fileURLToPath(new URL("./src/services", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
      {
        find: "@types",
        replacement: fileURLToPath(new URL("./src/types", import.meta.url)),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    ],
  },
});
