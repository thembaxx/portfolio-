import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { brand, logoPaths } from "../src/lib/brand.ts";

await mkdir("public/brand", { recursive: true });
const { paper, ink, orange } = brand.colors;
function mark(size, dark = false) {
  return h(
    "svg",
    { width: size, height: size, viewBox: "0 0 64 64" },
    h("path", { d: logoPaths.tile, fill: dark ? paper : ink }),
    h("path", { d: logoPaths.t, fill: dark ? ink : paper }),
    h("path", { d: logoPaths.m, fill: dark ? ink : paper }),
    h("circle", { cx: 53, cy: 52, r: 3, fill: dark ? brand.colors.lightOrange : orange }),
  );
}
function svg(dark = false) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>${brand.name} — TM monogram</title><path d="${logoPaths.tile}" fill="${dark ? paper : ink}"/><path d="${logoPaths.t}" fill="${dark ? ink : paper}"/><path d="${logoPaths.m}" fill="${dark ? ink : paper}"/><circle cx="53" cy="52" r="3" fill="${dark ? brand.colors.lightOrange : orange}"/></svg>\n`;
}
await writeFile("public/brand/logo.svg", svg());
await writeFile("public/brand/logo-dark.svg", svg(true));
await writeFile("src/app/icon.svg", svg());
async function png(element, width, height, fonts) {
  return Buffer.from(await new ImageResponse(element, { width, height, fonts }).arrayBuffer());
}
for (const size of [192, 512]) {
  await writeFile(`public/brand/icon-${size}.png`, await png(mark(size), size, size));
}
await writeFile(
  "src/app/apple-icon.png",
  await png(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          background: paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      mark(124),
    ),
    180,
    180,
  ),
);
const iconSizes = [16, 32, 48];
const frames = [];
for (const size of iconSizes) frames.push(await png(mark(size), size, size));
const header = Buffer.alloc(6 + frames.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, index) => {
  const start = 6 + index * 16;
  header[start] = iconSizes[index];
  header[start + 1] = iconSizes[index];
  header.writeUInt16LE(1, start + 4);
  header.writeUInt16LE(32, start + 6);
  header.writeUInt32LE(frame.length, start + 8);
  header.writeUInt32LE(offset, start + 12);
  offset += frame.length;
});
await writeFile("src/app/favicon.ico", Buffer.concat([header, ...frames]));
const regular = await readFile("assets/fonts/InstrumentSerif-Regular.ttf");
const italic = await readFile("assets/fonts/InstrumentSerif-Italic.ttf");
const fonts = [
  { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
  { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
];
const card = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      background: paper,
      color: ink,
      padding: "52px 64px",
      display: "flex",
      flexDirection: "column",
    },
  },
  h(
    "div",
    { style: { display: "flex", alignItems: "center", gap: 18, fontSize: 22, letterSpacing: 2 } },
    mark(58),
    "THEMBA MNDEBELE",
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        marginTop: 54,
        fontFamily: "Instrument Serif",
        fontSize: 102,
        lineHeight: 1,
      },
    },
    h("span", null, "Thoughtful interfaces."),
    h("span", { style: { fontStyle: "italic", color: orange } }, "Built to last."),
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "auto",
        paddingTop: 24,
        borderTop: "1px solid #c9c3b7",
        fontSize: 22,
      },
    },
    h("span", null, "Frontend Developer · South Africa"),
    h("span", null, "React / TypeScript / Next.js"),
  ),
);
await writeFile("public/brand/social.png", await png(card, 1200, 630, fonts));
console.log("Generated SVG logos, favicon, home-screen icons, and 1200×630 social card.");
