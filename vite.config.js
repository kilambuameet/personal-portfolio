import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  // ✅ Set base to '/' for root domain deployment
  base: "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
