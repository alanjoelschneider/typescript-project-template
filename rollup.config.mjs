import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/main.ts',
  output: {
    format: 'iife',
    file: './dist/bundle.js',
  },
  plugins: [typescript(), production && terser()],
};
