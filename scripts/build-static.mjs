import { cp, mkdir, rm, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const filesToCopy = [
  "index.html",
  "404.html",
  "favicon.ico",
  "placeholder.svg",
  "portrait.jpg",
  "robots.txt",
  "sitemap.xml",
  ".nojekyll",
];

const directoriesToCopy = ["assets"];

async function copyIfPresent(relativePath) {
  const source = path.join(rootDir, relativePath);
  const destination = path.join(distDir, relativePath);

  if (!existsSync(source)) {
    console.warn(`Skipping missing file: ${relativePath}`);
    return;
  }

  const sourceStat = await stat(source);
  if (sourceStat.isDirectory()) {
    await cp(source, destination, { recursive: true, force: true });
  } else {
    await mkdir(path.dirname(destination), { recursive: true });
    await cp(source, destination, { force: true });
  }
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const relativePath of filesToCopy) {
  await copyIfPresent(relativePath);
}

for (const relativePath of directoriesToCopy) {
  await copyIfPresent(relativePath);
}

console.log("Static site built to dist/");