import { defineConfig } from "vite";
// import envPlugin from "vite-plugin-env";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
});
