#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function decodeJsonEscapedText(text) {
  try {
    return JSON.parse(`"${text}"`);
  } catch {
    return text
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\\\/g, "\\")
      .replace(/\\"/g, '"');
  }
}

function escapeMarkdownLabel(text) {
  return text.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function extractPlaylistItems(html) {
  const re =
    /"playlistVideoRenderer":\{"videoId":"([A-Za-z0-9_-]{11})"[\s\S]*?"title":\{"runs":\[\{"text":"((?:\\.|[^"\\])*)"\}\]/g;

  const items = [];
  const seen = new Set();
  let match;

  while ((match = re.exec(html)) !== null) {
    const videoId = match[1];
    if (seen.has(videoId)) {
      continue;
    }
    seen.add(videoId);

    const rawTitle = match[2];
    const title = decodeJsonEscapedText(rawTitle);
    items.push({ videoId, title });
  }

  return items;
}

function toMarkdown(items) {
  return items
    .map(({ videoId, title }) => {
      const safeTitle = escapeMarkdownLabel(title);
      return `- [${safeTitle}](https://www.youtube.com/watch?v=${videoId})`;
    })
    .join("\n");
}

function main() {
  const inputPath = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.resolve(__dirname, "input1.html");
  const outputPath = process.argv[3] ? path.resolve(process.argv[3]) : null;

  const html = fs.readFileSync(inputPath, "utf8");
  const items = extractPlaylistItems(html);
  const markdown = toMarkdown(items);

  if (outputPath) {
    fs.writeFileSync(outputPath, `${markdown}\n`, "utf8");
    process.stdout.write(
      `Wrote ${items.length} videos to ${path.relative(process.cwd(), outputPath)}\n`
    );
    return;
  }

  process.stdout.write(`${markdown}\n`);
}

main();
