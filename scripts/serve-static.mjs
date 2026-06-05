import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 8080);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer((req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^\.\.(\/|\\|$)/, "");
    let filePath = join(root, safePath === "/" ? "index.html" : safePath);

    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = join(root, "index.html");
    }

    res.setHeader("Content-Type", types[extname(filePath)] || "application/octet-stream");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    const stream = createReadStream(filePath);
    stream.on("error", (err) => {
      console.error("[serve] stream error:", err.message);
      if (!res.headersSent) res.writeHead(500);
      res.end("Internal error");
    });
    stream.pipe(res);
  } catch (err) {
    console.error("[serve] request error:", err);
    if (!res.headersSent) res.writeHead(500);
    res.end("Internal error");
  }
});

server.on("error", (err) => {
  console.error("[serve] server error:", err);
});

server.listen(port, host, () => {
  console.log(`Static preview running at http://${host}:${port}`);
});

process.on("uncaughtException", (err) => console.error("[serve] uncaught:", err));
process.on("unhandledRejection", (err) => console.error("[serve] unhandled:", err));
