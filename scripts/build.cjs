const { spawnSync } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const tsc = path.join(root, "backend", "node_modules", "typescript", "bin", "tsc");

const result = spawnSync(process.execPath, [tsc, "-p", "tsconfig.json"], {
  cwd: path.join(root, "backend"),
  stdio: "inherit",
  shell: false
});

if (result.error) {
  console.error(`[ZENOVA] No se pudo ejecutar TypeScript: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status === null ? 1 : result.status);
