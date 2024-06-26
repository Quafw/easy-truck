import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/dashboard.github.io/" : "/",
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: { chunkSizeWarningLimit: 1600 },
  base: "/dashboard.github.io/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
