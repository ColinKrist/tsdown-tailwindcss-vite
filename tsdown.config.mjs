import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  fromVite: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  outDir: 'dist/lib',
  platform: 'browser',
});
