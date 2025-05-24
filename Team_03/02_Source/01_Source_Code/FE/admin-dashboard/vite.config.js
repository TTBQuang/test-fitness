import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy":
        "frame-ancestors 'self' https://*.skycloak.io https://*.vercel.app;",
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8088",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
