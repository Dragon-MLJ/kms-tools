import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Shiki)
      },
    }),
    UnoCSS(),
    AutoImport({
      dts: './src/typings/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core'],
      resolvers: [ArcoResolver()],
    }),
    Components({
      dts: './src/typings/components.d.ts',
      resolvers: [
        ArcoResolver({
          sideEffect: false,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
