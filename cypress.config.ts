import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents() { 
    },
    baseUrl: "http://localhost:5173",
    defaultCommandTimeout: 30000,
  },
});
