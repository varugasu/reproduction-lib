import glob from "glob";
import path from "node:path";

import { defineBuildConfig } from "unbuild";

const entries = glob.sync("src/**/index.ts");

export default defineBuildConfig({
  entries,
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  sourcemap: true,
  declaration: true,
  clean: true,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
    esbuild: {
      jsx: "automatic",
    },
  },
});
