import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sweetDracula from "../src/palettes/sweet-dracula.mjs";
import sweetDraculaBlue from "../src/palettes/sweet-dracula-blue.mjs";
import sweetDraculaSoft from "../src/palettes/sweet-dracula-soft.mjs";
import { createTheme } from "../src/theme-template.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(root, "themes");
const palettes = [sweetDracula, sweetDraculaBlue, sweetDraculaSoft];

await mkdir(outputDir, { recursive: true });

for (const palette of palettes) {
    const theme = createTheme(palette);
    const outputPath = join(outputDir, palette.filename);

    await writeFile(outputPath, `${JSON.stringify(theme, null, 4)}\n`);
    console.log(`Generated ${palette.filename}`);
}
