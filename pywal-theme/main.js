const { Plugin } = require('obsidian');
const fs = require('fs');
const path = require('path');
const os = require('os');

const STYLE_ID = 'pywal-theme-styles';

class PywalThemePlugin extends Plugin {
    async onload() {
        console.log('Loading Pywal theme plugin');
        this.updateTheme();

        this.addCommand({
            id: 'reload-pywal-theme',
            name: 'Reload Pywal Theme',
            callback: () => {
                this.updateTheme();
            },
        });
    }

    onunload() {
        console.log('Unloading Pywal theme plugin');
        this.resetTheme();
    }

    async updateTheme() {
        const homeDir = os.homedir();
        const colorsPath = path.join(homeDir, '.cache', 'wal', 'colors.json');

        try {
            const colorsData = await fs.promises.readFile(colorsPath, 'utf8');
            const pywalColors = JSON.parse(colorsData);
            this.applyColors(pywalColors);
            console.log('Pywal theme updated successfully.');
        } catch (error) {
            console.error(`Pywal color file not found or could not be read at: ${colorsPath}`, error);
            this.resetTheme(); // Clear styles if the file can't be read
        }
    }

    applyColors(pywalColors) {
        const colors = pywalColors.colors;
        const special = pywalColors.special;

        // Create the CSS content as a string. This directly applies the theme.
        // Use a more specific selector to override default themes.
        const cssContent = `
            .theme-dark, .theme-light {
                --background-primary: ${special.background};
                --background-secondary: ${colors.color0};
                --background-secondary-alt: ${colors.color0};
                --background-modifier-border: ${colors.color8};
                --text-normal: ${special.foreground};
                --text-muted: ${colors.color7};
                --text-accent: ${colors.color4};
                --text-accent-hover: ${colors.color6};
                --interactive-accent: ${colors.color4};
                --interactive-accent-hover: ${colors.color6};
                --text-highlight-bg: ${colors.color2}40; /* 40 adds transparency */

                --color-red: ${colors.color1};
                --color-green: ${colors.color2};
                --color-yellow: ${colors.color3};
                --color-blue: ${colors.color4};
                --color-magenta: ${colors.color5};
                --color-cyan: ${colors.color6};
            }
        `;

        // Find the style element if it exists, or create it if it doesn't.
        let styleEl = document.getElementById(STYLE_ID);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = STYLE_ID;
            document.head.appendChild(styleEl);
        }

        // Update the content of the style element
        styleEl.textContent = cssContent;
    }

    resetTheme() {
        // Find the style element and remove it to unload the theme
        const styleEl = document.getElementById(STYLE_ID);
        if (styleEl) {
            styleEl.remove();
        }
    }
}

module.exports = PywalThemePlugin;
