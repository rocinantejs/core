import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss-modules";
import postcssImport from 'postcss-import';
import autoprefixer from "autoprefixer";

import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    commonjs(),
    typescript(),
    postcss({
      minimize: true,
			extract: true,
			plugins: [postcssImport(), autoprefixer()],
      writeDefinitions: true,
      modules: {
        generateScopedName: "[folder]_[local]___[hash:base64:5]",
      }
		}),
  ],
};
