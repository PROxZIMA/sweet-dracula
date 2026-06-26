import semanticTokenColors from "./semantic-token-colors.mjs";
import tokenColors from "./token-colors.mjs";
import workbenchColors from "./workbench-colors.mjs";

const template = {
    $schema: "vscode://schemas/color-theme",
    author: "felcadev",
    maintainers: ["felcadev <pichaosdev@gmail.com>"],
    semanticHighlighting: true,
    semanticTokenColors,
    colors: workbenchColors,
    tokenColors
};

function getPaletteValue(palette, path) {
    return path.split(".").reduce((value, key) => {
        if (value && Object.prototype.hasOwnProperty.call(value, key)) {
            return value[key];
        }

        throw new Error(`Missing palette color: ${path}`);
    }, palette.colors);
}

function resolveValue(value, palette) {
    if (Array.isArray(value)) {
        return value.map((item) => resolveValue(item, palette));
    }

    if (value && typeof value === "object") {
        return Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, resolveValue(item, palette)])
        );
    }

    if (typeof value !== "string") {
        return value;
    }

    return value.replace(/\{([^}]+)\}/g, (_, key) => getPaletteValue(palette, key));
}

export function createTheme(palette) {
    const resolved = resolveValue(template, palette);

    return {
        ...resolved,
        name: palette.name,
        type: palette.type ?? "dark"
    };
}
