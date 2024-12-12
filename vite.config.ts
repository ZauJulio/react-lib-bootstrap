import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

import dts from 'vite-plugin-dts';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import { libInjectCss } from 'vite-plugin-lib-inject-css';
import biomePlugin from 'vite-plugin-biome';
import svgr from 'vite-plugin-svgr';

const paths = {
  index: path.resolve(__dirname, './lib/index.tsx'),
  components: path.resolve(__dirname, './lib/components/index.tsx'),
  styles: path.resolve(__dirname, './lib/styles/index.tsx'),
  services: path.resolve(__dirname, './lib/services/index.ts'),
  utils: path.resolve(__dirname, './lib/utils/index.ts'),
  types: path.resolve(__dirname, './lib/types/index.tsx'),
  contexts: path.resolve(__dirname, './lib/contexts/index.tsx'),
  repos: path.resolve(__dirname, './lib/repos/index.ts'),
  hooks: path.resolve(__dirname, './lib/hooks/index.tsx'),
};

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
    publicDir: path.resolve(__dirname, './lib/assets'),
    plugins: [
      svgr(),
      react(),
      libInjectCss(),
      viteTsconfigPaths(),
      dts({ include: ['lib'], tsconfigPath: './tsconfig.app.json' }),
      biomePlugin({ mode: 'lint', files: './lib', applyFixes: true }),
    ],
    build: {
      emptyOutDir: true,
      lib: { entry: paths, formats: ['es'] },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        output: {
          dir: 'dist',
          format: 'es',
          entryFileNames: ({ name }) => {
            return name === 'index' ? 'index.js' : '[name]/index.js';
          },
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return '@vendor';
            }

            return 'index';
          },
        },
      },
    },
    define: { 'process.env': env },
    resolve: {
      preserveSymlinks: true,
      alias: {
        unfetch: 'cross-fetch',
        ...(Object.keys(paths) as (keyof typeof paths)[])
          .filter((key) => key !== 'index')
          .reduce(
            (acc, key) => {
              // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
              return { ...acc, [`@${key}`]: paths[key] };
            },
            {} as Record<string, string>,
          ),
      },
    },
  });
};
