import babel from "rollup-plugin-babel";
import sizes from "rollup-plugin-sizes";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      sizes()
    ]
  }
];
