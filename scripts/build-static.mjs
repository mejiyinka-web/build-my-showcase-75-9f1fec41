import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const entries = [
  "index.html",
  "404.html",
  "robots.txt",
  "favicon.ico",
  "placeholder.svg",
  "portrait.jpg",
  "assets",
];

for (const entry of entries) {
  const source = join(root, entry);
  if (existsSync(source)) {
    cpSync(source, join(dist, entry), { recursive: true });
  }
}