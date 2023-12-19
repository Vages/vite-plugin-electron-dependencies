import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import { dependencies as rootDependencies } from "./package.json";
const packagesThatOnlyWorkIfLeftOutsideOfBundle = Object.keys(rootDependencies);

export default defineConfig({
  plugins: electron({
    entry: "./main.ts",
    vite: {
      build: {
        rollupOptions: { external: packagesThatOnlyWorkIfLeftOutsideOfBundle },
      },
    },
  }),
});
