/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default ({ mode }) => {
  return defineConfig({
    test: {
      globals: true,
      environment: 'jsdom', // Use 'node' for Node.js projects
      setupFiles: './test/setup.ts',
    },
  });
};
