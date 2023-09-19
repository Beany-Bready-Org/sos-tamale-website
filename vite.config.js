import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sos-tamale-website/",
  plugins: [react()],
})
