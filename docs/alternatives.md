---
sidebar_position: 9
title: Alternatives
description: Free tools you can use with the same file format. No lock-in, ever.
---

# Alternatives

Giduru is built on the hledger/ledger plain-text format. This means your data works with a whole ecosystem of free, open-source tools. You're never locked in.

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

## Why this matters

If Giduru ever shuts down, changes its pricing, or just isn't what you need anymore, your data is safe. It's plain text on your filesystem, and there are multiple free tools that can read it. Your financial history doesn't depend on any single application.
