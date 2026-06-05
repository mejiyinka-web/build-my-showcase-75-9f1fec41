import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 8080);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function sendResponse(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store, max-age=0",
  });
  response.end(body);
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  const decodedPathname = decodeURIComponent(url.pathname);
  const normalizedPathname = decodedPathname === "/" ? "/index.html" : decodedPathname;
  const safePath = path.normalize(normalizedPathname).replace(/^([/\\])+/, "");
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  return filePath;
}

const server = createServer(async (request, response) => {
  try {
    const filePath = resolveRequestPath(request.url || "/");
    if (!filePath) {
      sendResponse(response, 403, "Forbidden");
      return;
    }

    let finalPath = filePath;
    if (!existsSync(finalPath)) {
      const fallbackPath = path.join(rootDir, "404.html");
      finalPath = existsSync(fallbackPath) ? fallbackPath : path.join(rootDir, "index.html");
      response.statusCode = 404;
    }

    const fileStat = await stat(finalPath);
    if (!fileStat.isFile()) {
      sendResponse(response, 404, "Not found");
      return;
    }

    const contentType = mimeTypes.get(path.extname(finalPath).toLowerCase()) || "application/octet-stream";
    response.writeHead(response.statusCode || 200, {
      "Content-Type": contentType,
      "Content-Length": fileStat.size,
      "Cache-Control": "no-store, max-age=0",
    });

    const stream = createReadStream(finalPath);
    stream.on("error", (error) => {
      console.error("Stream error:", error);
      if (!response.headersSent) {
        sendResponse(response, 500, "Server error");
      } else {
        response.destroy(error);
      }
    });
    stream.pipe(response);
  } catch (error) {
    console.error("Request error:", error);
    if (!response.headersSent) {
      sendResponse(response, 500, "Server error");
    } else {
      response.destroy(error);
    }
  }
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}`);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});