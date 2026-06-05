import { spawn } from "node:child_process";

const restartDelayMs = 1000;
let child = null;
let stopping = false;
let restartCount = 0;

function startServer() {
  child = spawn(process.execPath, ["scripts/serve-static.mjs"], {
    stdio: "inherit",
    env: {
      ...process.env,
      HOST: process.env.HOST || "0.0.0.0",
      PORT: process.env.PORT || "8080",
    },
  });

  child.on("exit", (code, signal) => {
    child = null;

    if (stopping) {
      return;
    }

    restartCount += 1;
    console.error(`Preview server exited (${signal || code}). Restarting #${restartCount}...`);
    setTimeout(startServer, restartDelayMs);
  });
}

function stop() {
  stopping = true;
  if (child) {
    child.kill("SIGTERM");
  }
  process.exit(0);
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

startServer();