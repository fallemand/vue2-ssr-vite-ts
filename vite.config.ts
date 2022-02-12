import { defineConfig, type UserConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
const config: UserConfig = {
  // https://vitejs.dev/config/#base
  base: '/',
  // Resolver
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      }
    ],
  },
  // https://vitejs.dev/config/#server-options
  server: {
  },
  plugins: [
    // Vue2
    // https://github.com/underfin/vite-plugin-vue2
    createVuePlugin({
      target: 'esnext',
    }),
    // compress assets
    // https://github.com/vbenjs/vite-plugin-compression
    // viteCompression(),
  ],
  // Build Options
  // https://vitejs.dev/config/#build-options
  build: {
    rollupOptions: {
      output: {
        plugins: [
          /*
          // if you use Code encryption by rollup-plugin-obfuscator
          // https://github.com/getkey/rollup-plugin-obfuscator
          obfuscator({
            globalOptions: {
              debugProtection: true,
            },
          }),
          */
        ],
      },
    },
    target: 'es2021',
    /*
    // Minify option
    // https://vitejs.dev/config/#build-minify
    minify: 'terser',
    terserOptions: {
      ecma: 2020,
      parse: {},
      compress: { drop_console: true },
      mangle: true, // Note `mangle.properties` is `false` by default.
      module: true,
      output: { comments: true, beautify: false },
    },
    */
  },
};

// Export vite config
export default config;
