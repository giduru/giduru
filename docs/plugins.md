---
sidebar_position: 8
slug: /using-giduru/settings-and-hotkeys
title: Settings and Hotkeys
description: Configure the vault, editor, appearance, and keyboard-driven workflow.
---

# Settings And Hotkeys

Giduru stores workspace configuration alongside the vault in `.giduru/*.json`. That keeps the settings file-based and inspectable, just like the journal itself.

## General Vault Settings

The main settings file controls the accounting workspace itself.

Important fields include:

- `entryFile` for the root journal file Giduru should parse
- `defaultCommodity` for the primary commodity used in charts and analysis

In practice, this usually means a `.giduru/settings.json` file like:

```json
{
  "entryFile": "main.journal",
  "defaultCommodity": "USD"
}
```

## Editor Settings

Editor preferences are stored separately so the vault can keep stable accounting data and adjustable workspace behavior.

Current editor options include:

- font size
- line numbers
- Vim mode
- word wrap
- tab size

## Appearance And Workspace

Giduru also stores appearance and workspace preferences in `.giduru/*.json`, including:

- theme
- sidebar width
- side panel width
- whether the sidebar starts open on web

## Hotkeys

Hotkeys are configurable and stored as data, not hard-coded user state.

Useful defaults include:

- `Mod+S` to save the active file
- `Mod+,` to open settings
- `Ctrl+G Ctrl+G` to open the command palette
- `Ctrl+G P` to open the file picker
- `Ctrl+G N` to create a new file

## Why This Fits The Product

The settings model follows the same philosophy as the rest of Giduru:

- configuration is stored in real files
- the app can regenerate its derived state from the vault
- workspace behavior is transparent rather than hidden in a private database

That makes the app more durable, more debuggable, and easier to reason about.
