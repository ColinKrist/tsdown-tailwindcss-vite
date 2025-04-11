import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
}) satisfies UserConfig as UserConfig;
