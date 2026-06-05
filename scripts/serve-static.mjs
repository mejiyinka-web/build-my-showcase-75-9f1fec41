import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 8080);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^\.\.(\/|\\|$)/, "");
  let filePath = join(root, safePath === "/" ? "index.html" : safePath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(root, "index.html");
  }

  res.setHeader("Content-Type", types[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
}).listen(port, host, () => {
  console.log(`Static preview running at http://${host}:${port}`);
});