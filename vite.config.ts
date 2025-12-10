import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// Get directory name (compatible with ESM)
const __dirname = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

// Conditionally load Manus plugin only in Manus environment
const isManusEnvironment = process.env.MANUS_RUNTIME === "true";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];

// Only add Manus runtime plugin in Manus environment
if (isManusEnvironment) {
  try {
    const { vitePluginManusRuntime } = await import("vite-plugin-manus-runtime");
    plugins.push(vitePluginManusRuntime());
  } catch {
    // Plugin not available, skip it
  }
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(__dirname),
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
