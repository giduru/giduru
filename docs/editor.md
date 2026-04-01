---
sidebar_position: 6
slug: /using-giduru/workspace-and-editor
title: Workspace and Editor
description: How the Giduru workspace, file explorer, and editor fit together.
---

# Workspace And Editor

Giduru is not just a text box for ledger files. The workspace is designed so you can move between files, views, diagnostics, and settings without losing track of the underlying journal.

## File Explorer

Open a vault and you get a normal file tree rooted at that folder.

Use it to:

- browse your journal files and folders
- open files in tabs
- create files and folders inside the vault
- reorganize the vault as it grows

The important constraint is that the file tree is real. You are not browsing an app-owned abstraction. You are browsing the actual vault.

## Tabs And Split Panes

You can open multiple files at once and keep analysis views beside them.

Typical layouts:

- one column for the active journal, one column for **Accounts Balance**
- one column for a card ledger, one column for **Recurring Transactions**
- one column for `main.journal`, one column for settings or a search view

This matters because Giduru is built around editing and understanding the ledger at the same time.

## Syntax highlighting

The editor understands hledger syntax. Dates, descriptions, account names, amounts, comments, directives, and tags are highlighted distinctly.

## Autocomplete

Start typing an account name and the editor suggests completions based on accounts declared or used in your vault. The same applies to transaction descriptions.

## Real-time validation

As you type, Giduru validates your journal entries:
- **Syntax errors.** Malformed dates, unbalanced transactions, invalid amounts.
- **Accounting errors.** Transactions that don't balance, undeclared accounts (in strict mode).
- **Missing amounts.** Automatic inference of the balancing amount.

Errors appear inline as you edit, so you catch mistakes immediately.

## Command palette

Use the command palette to jump to actions, files, and views without leaving the keyboard.

The current defaults are command-oriented rather than editor-style:

- `Ctrl+G Ctrl+G` opens the command palette
- `Ctrl+G P` opens the file picker

## File picker

The file picker gives you fuzzy search over the vault so you can jump directly to the file you want.

This becomes important once the ledger stops being a single-file toy.

## Saving And Disk Changes

Giduru tracks unsaved changes per tab and writes back to the real file when you save.

Because the vault is just files on disk, Giduru also has to deal with external changes. If another tool edits a file while it is open, the workspace can surface that fact instead of pretending it owns the file.

## Vim, Appearance, And Settings

Editor behavior is configurable through settings stored in `.giduru/*.json`.

That includes:

- font size
- line numbers
- Vim mode
- word wrap
- tab size
- theme and workspace preferences

For more, see [Settings and Hotkeys](/docs/using-giduru/settings-and-hotkeys).

Common actions have keyboard shortcuts, and the bindings are configurable. See [Settings and Hotkeys](/docs/using-giduru/settings-and-hotkeys).

## Theme

Switch between light mode, dark mode, or follow your system preference. The editor theme updates to match.

## Vim keybindings

The editor supports optional vim keybindings for users who prefer modal editing.

## File watching

If you edit a file outside Giduru (e.g., in your terminal with hledger or a text editor), Giduru detects the change and offers to reload the file. Your vault files are always the source of truth.
