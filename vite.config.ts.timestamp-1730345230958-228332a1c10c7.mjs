// vite.config.ts
import { defineConfig } from "file:///F:/githup/vue-ts-unocss-template/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.9_sass@1.77.6/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import Pages from "file:///F:/githup/vue-ts-unocss-template/node_modules/.pnpm/vite-plugin-pages@0.32.3_vite@5.3.1_vue-router@4.4.0/node_modules/vite-plugin-pages/dist/index.js";
import vue from "file:///F:/githup/vue-ts-unocss-template/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.30/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///F:/githup/vue-ts-unocss-template/node_modules/.pnpm/unocss@0.61.0_postcss@8.4.38_vite@5.3.1/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///F:/githup/vue-ts-unocss-template/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@10.11.0/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_dirname = "F:\\githup\\vue-ts-unocss-template";
var vite_config_default = defineConfig({
  resolve: {
    // 目录别名
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  plugins: [vue(), UnoCSS(), Pages({ dirs: "src/views" }), AutoImport({
    imports: ["vue"],
    dts: "./auto-import.d.ts",
    eslintrc: {
      enabled: true
    }
  })],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxnaXRodXBcXFxcdnVlLXRzLXVub2Nzcy10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcZ2l0aHVwXFxcXHZ1ZS10cy11bm9jc3MtdGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2dpdGh1cC92dWUtdHMtdW5vY3NzLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICAvLyBcdTc2RUVcdTVGNTVcdTUyMkJcdTU0MERcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuanNvbicsICcudnVlJ11cclxuICB9LFxyXG4gIHBsdWdpbnM6IFt2dWUoKSwgVW5vQ1NTKCksIFBhZ2VzKHsgZGlyczogJ3NyYy92aWV3cycgfSksIEF1dG9JbXBvcnQoe1xyXG4gICAgaW1wb3J0czogWyd2dWUnXSxcclxuICAgIGR0czogXCIuL2F1dG8taW1wb3J0LmQudHNcIixcclxuICAgIGVzbGludHJjOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH1cclxuICB9KV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1IsU0FBUyxvQkFBb0I7QUFDclQsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBTHZCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQTtBQUFBLElBRVAsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLFFBQVEsU0FBUyxNQUFNO0FBQUEsRUFDNUQ7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQyxHQUFHLFdBQVc7QUFBQSxJQUNsRSxTQUFTLENBQUMsS0FBSztBQUFBLElBQ2YsS0FBSztBQUFBLElBQ0wsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUFBLEVBQ0YsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
