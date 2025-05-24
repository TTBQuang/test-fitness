import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; frame-ancestors 'self' https://*.skycloak.io https://*.vercel.app https://fcaaf0a4-fd3e-4274-8377-7a88e78f9086.app.skycloak.io; frame-src 'self' https://*.skycloak.io https://fcaaf0a4-fd3e-4274-8377-7a88e78f9086.app.skycloak.io; connect-src 'self' https://*.skycloak.io https://*.vercel.app;",
      "X-Frame-Options":
        "ALLOW-FROM https://fcaaf0a4-fd3e-4274-8377-7a88e78f9086.app.skycloak.io",
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
