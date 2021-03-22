import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssimport from 'postcss-import';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [
        postcssimport(),
        tailwindcss(),
        autoprefixer(),
      ],
    }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
        {
          src: 'src/tailwind.scss',
          dest: 'build',
          rename: 'tailwind.scss',
        },
      ],
    }),
  ],
};
