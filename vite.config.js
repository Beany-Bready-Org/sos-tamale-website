import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/sos-tamale-website",
	plugins: [
		react(),
		replace({
			// Environment variables
			"process.env.REACT_APP_EMAILJS_SERVICE_ID": JSON.stringify(
				process.env.REACT_APP_EMAILJS_SERVICE_ID
			),
			"process.env.REACT_APP_EMAILJS_TEMPLATE_ID": JSON.stringify(
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID
			),
			"process.env.REACT_APP_EMAILJS_PUBLIC_KEY": JSON.stringify(
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			),
		}),
	],
});
