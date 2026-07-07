export default {
  root: "outputs/zenova-web",
  server: {
    port: 8787,
    strictPort: false,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 8787,
    strictPort: false
  },
  build: {
    outDir: "../../dist/zenova-web",
    emptyOutDir: true
  }
};
