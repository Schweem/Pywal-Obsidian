Obsidian Pywal Theme
A dynamic theme plugin for Obsidian that applies your system's Pywal color palette directly into the editor.

Features
Automatically themes Obsidian with your Pywal colors on startup.

Provides a command palette option to manually reload the theme.

Works with both light and dark base themes.

Installation
Manual Installation
Download the main.js, manifest.json, and styles.css files from the latest release.

Go to your Obsidian vault's configuration folder: YourVault/.obsidian/.

Create a new folder named pywal-theme.

Place the downloaded files inside the YourVault/.obsidian/plugins/pywal-theme/ folder.

Restart Obsidian.

Go to Settings > Community Plugins, find "Pywal Theme", and enable it.

Usage
Make sure you have run wal on your system to generate a color palette. The plugin looks for the colors.json file at ~/.cache/wal/colors.json.

After enabling the plugin, the theme should apply automatically.

If you generate a new Pywal palette while Obsidian is running, open the command palette (Cmd/Ctrl + P) and run the command "Reload Pywal Theme" to apply the new colors.

License
This project is licensed under the MIT License. See the LICENSE file for details.