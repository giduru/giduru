---
sidebar_position: 6
title: Editor
description: A CodeMirror-powered editor built for hledger journals.
---

# Editor

Giduru's editor is built on [CodeMirror 6](https://codemirror.net/) with a custom hledger language mode. It's designed to make editing journal files fast and error-free.

## Syntax highlighting

The editor understands hledger syntax. Dates, descriptions, account names, amounts, comments, directives, and tags are all highlighted distinctly.

## Autocomplete

Start typing an account name and the editor suggests completions based on accounts declared or used in your vault. The same applies to transaction descriptions.

## Real-time validation

As you type, Giduru validates your journal entries:
- **Syntax errors.** Malformed dates, unbalanced transactions, invalid amounts.
- **Accounting errors.** Transactions that don't balance, undeclared accounts (in strict mode).
- **Missing amounts.** Automatic inference of the balancing amount.

Errors appear inline as you edit, so you catch mistakes immediately.

## Tabs and columns

Open multiple journal files in tabs. Split the editor into side-by-side columns to view or edit two files at once. Giduru resolves `include` directives across files, so your analysis reflects the full picture even when your ledger spans many files.

## Command palette

Press `Cmd+Shift+P` (or `Ctrl+Shift+P`) to open the command palette. Search for any action, setting, or view by name.

## File picker

Press `Cmd+P` (or `Ctrl+P`) to quickly open any file in your vault by name. Fuzzy matching helps you find files fast, even in large vaults.

## Hotkeys

Common actions have keyboard shortcuts. Open the command palette and type "keyboard shortcuts" to see the full list. Hotkeys are customizable.

## Theme

Switch between light mode, dark mode, or follow your system preference. The editor theme updates to match.

## LSP

Giduru includes a built-in language server for hledger journals. It powers autocomplete, diagnostics, go-to-definition for accounts, and hover information. No external setup required.

## Vim keybindings

The editor supports optional vim keybindings for users who prefer modal editing.

## File watching

If you edit a file outside Giduru (e.g., in your terminal with hledger or a text editor), Giduru detects the change and offers to reload the file. Your vault files are always the source of truth.
