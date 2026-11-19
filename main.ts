// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: this program hands the gate the post's
// address by copying POST.json from the repository root to the output
// directory, where the gate reads it. That is all it has to do.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success. No network, no wall clock, no files
// outside the repository; two runs write the same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(BOT_DIR, "POST.json");

if (!existsSync(src)) {
  console.error(`POST.json not found in ${BOT_DIR}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(readFileSync(src, "utf8"));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string"
) {
  console.error('POST.json must be an object with a "url" string');
  process.exit(1);
}

// The url must be an X/Twitter post address:
// https://x.com/<handle>/status/<digits> or
// https://twitter.com/<handle>/status/<digits>, with an optional
// www./mobile. prefix or /i/web/status/<digits> form. A query string
// or fragment is allowed and ignored.
const X_POST_URL =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:[A-Za-z0-9_]+\/status\/\d+|i\/web\/status\/\d+)(?:[?#].*)?$/;

const url = (post as { url: string }).url;
if (!X_POST_URL.test(url)) {
  console.error(`POST.json "url" is not a valid X post URL: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, join(OUTPUT_DIR, "POST.json"));
