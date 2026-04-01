---
sidebar_position: 10
slug: /guides/working-with-other-tools
title: Working With Other Tools
description: Giduru is designed to coexist with hledger, Ledger, Git, and normal text editors.
---

# Working With Other Tools

Giduru is built on the hledger and Ledger plain-text journal format. That means your data already belongs to a larger ecosystem. You do not need to choose between Giduru and every other tool.

## hledger

[hledger](https://hledger.org) is a powerful command-line accounting tool. It reads the same journal files as Giduru and provides reports, balance sheets, income statements, and more from your terminal.

```bash
# Install
brew install hledger     # macOS
apt install hledger      # Debian/Ubuntu

# Usage
hledger -f ledger.journal balance
hledger -f ledger.journal register expenses
hledger -f ledger.journal incomestatement
```

hledger also includes a web UI (`hledger-web`) for browser-based access.

## Ledger

[Ledger](https://ledger-cli.org) is the original plain-text accounting tool that inspired hledger. It uses a very similar format and provides powerful command-line reporting.

```bash
# Install
brew install ledger

# Usage
ledger -f ledger.journal balance
ledger -f ledger.journal register
```

## Any text editor

Since your financial data is plain text, you can always edit it with any text editor. VS Code, Vim, Emacs, Notepad, whatever you prefer. Many editors have hledger syntax highlighting plugins available.

## Git and backups

Because the vault is just files, normal software hygiene works:

- use Git for history and review
- sync with your preferred backup system
- archive the ledger without an export step
- diff changes before and after large cleanups

## Why this matters

If Giduru ever shuts down, changes its pricing, or just isn't what you need anymore, your data is safe. It's plain text on your filesystem, and there are multiple free tools that can read it. Your financial history doesn't depend on any single application.
