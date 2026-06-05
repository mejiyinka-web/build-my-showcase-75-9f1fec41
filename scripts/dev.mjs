import { spawn } from "node:child_process";

const script = "scripts/serve-static.mjs";
let restarts = 0;

function start() {
  const child = spawn(process.execPath, [script], {
    stdio: "inherit",
    env: { ...process.env, PORT: process.env.PORT || "8080", HOST: "0.0.0.0" },
  });
  child.on("exit", (code, signal) => {
    restarts++;
    console.error(`[dev] preview server exited code=${code} signal=${signal}; restarting (#${restarts}) in 500ms`);
    setTimeout(start, 500);
  });
  child.on("error", (err) => {
    console.error("[dev] failed to spawn preview server:", err);
  });
}

process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
start();
