## Obsidian Pywal Theme
A simple obsidian plugin to enable the usage of pywal color palletes in the Obsidian workspace.

---
### Features
- Automatically themes Obsidian with your Pywal colors on startup.
  - Compares current theme colors to pywal files to reduce redundant reskins.  
- Provides a command palette option to manually reload the theme.
- Works with both light and dark `base themes`.
- Customize path to pywal colors in settings.

---

### Installation
```
- Download latest release
- Locate your obsidian vault and its plugins folder
- Place into you plugins forlder
  - Place the downloaded files inside the YourVault/.obsidian/plugins/pywal-theme/ folder.
- Restart Obsidian.
- Go to Settings > Community Plugins, find "Pywal Theme", and enable it.
```
---

### Usage
Make sure you have run wal on your system to generate a color palette. The plugin looks for the colors.json file at ~/.cache/wal/colors.json.

- After enabling the plugin, the theme should apply automatically.
- If you generate a new Pywal palette while Obsidian is running, `open the command palette (Cmd/Ctrl + P) and run the command "Reload Pywal Theme" to apply the new colors`.
- Default colors.json location can be changed in settings under the `community plugins` area. 

---

### Contribution
Things are bound to break or not work *all* the time. If something goes wrong submit a PR, we can get it sorted. 

---

### License
This project is licensed under the MIT License. See the LICENSE file for details.
