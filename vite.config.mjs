
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const lifecycle = process.env.npm_lifecycle_event // 当前正在运行的 npm 脚本的名称
console.log(lifecycle, '当前运行的脚本名字');

// https://vitejs.dev/config/
// /** @type {import('vite').UserConfig} */

export default defineConfig({
  plugins: [vue()],
  lintOnSave:false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 相对需要base，绝对忽略base
    }
  },
  esbuild: {
    drop: lifecycle === 'build' ? ['console', 'debugger'] : [],
  },
})
