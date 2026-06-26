import { existsSync, readFileSync } from "node:fs";
import { relative } from "node:path";

const root = process.cwd();
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const themes = packageJson.contributes?.themes ?? [];
const errors = [];

function fail(message) {
    errors.push(message);
}

function readJson(path) {
    try {
        return JSON.parse(readFileSync(path, "utf8"));
    } catch (error) {
        fail(`${path} is not valid JSON: ${error.message}`);
        return undefined;
    }
}

if (themes.length === 0) {
    fail("package.json does not contribute any themes.");
}

for (const theme of themes) {
    if (!theme.label) {
        fail("A contributed theme is missing label.");
    }

    if (!theme.path) {
        fail(`${theme.label ?? "Unknown theme"} is missing path.`);
        continue;
    }

    if (!existsSync(theme.path)) {
        fail(`${theme.label} points to missing file: ${theme.path}`);
        continue;
    }

    const data = readJson(theme.path);
    if (!data) {
        continue;
    }

    if (data.name !== theme.label) {
        fail(`${theme.path} name "${data.name}" does not match label "${theme.label}".`);
    }

    if (theme.uiTheme === "vs-dark" && data.type !== "dark") {
        fail(`${theme.label} uses uiTheme vs-dark but type is "${data.type}".`);
    }

    if (theme.uiTheme === "vs" && data.type !== "light") {
        fail(`${theme.label} uses uiTheme vs but type is "${data.type}".`);
    }

    if ("colorVars" in data) {
        fail(`${theme.path} contains colorVars; generated themes should not include internal palette metadata.`);
    }

    const text = readFileSync(theme.path, "utf8");
    if (/\{[A-Za-z][^}]*\}/.test(text)) {
        fail(`${theme.path} contains unresolved palette placeholders.`);
    }
}

for (const generatedPath of ["themes/sweetdracula-color-theme.json", ".vsixmanifest"]) {
    if (existsSync(generatedPath)) {
        fail(`${relative(root, generatedPath)} should not exist in the source tree.`);
    }
}

if (errors.length > 0) {
    console.error(errors.map((error) => `- ${error}`).join("\n"));
    process.exit(1);
}

console.log(`Validated ${themes.length} themes.`);
