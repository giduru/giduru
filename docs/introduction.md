---
sidebar_position: 1
title: Introduction
description: Giduru is a file-first personal finance app built on plain-text hledger journals.
---

# What is Giduru?

Giduru is a personal finance application that treats your files as the source of truth. Instead of storing your financial data in a proprietary database, Giduru works directly with [hledger](https://hledger.org) journal files. Plain text files that you own, control, and can edit with any tool.

Think of it like Obsidian, but for your finances.

## file > app

Most finance apps own your data. They store it in their database, in their format, behind their paywall. If they shut down or you stop paying, your financial history disappears.

Giduru is different. Your ledger files are plain text on your filesystem. They work with hledger, ledger, or any text editor. Giduru gives you a better way to work with them, but it's never the only way.

## Core principles

- **Plain text, full control.** Your financial data lives in `.journal` files. Human-readable, git-friendly, and yours forever.
- **You own your data.** No cloud sync, no accounts, no tracking. Giduru reads files from your disk and never phones home.
- **No lock-in.** Uses the same format as hledger and ledger. Stop using Giduru any time. Your data still works with free CLI tools.
- **Live analysis.** Net worth charts, spending treemaps, recurring transaction detection, and duplicate warnings. Computed live as you edit.
- **Runs everywhere.** iOS, Android, web, desktop, CLI, and PWA. Same ledger files, every platform.

## How it works

1. **Open a vault.** Point Giduru at a folder containing your hledger journal files.
2. **Edit your journals.** Use the built-in CodeMirror editor with syntax highlighting, autocomplete, and real-time validation.
3. **See your finances.** Analysis views update live as you type, showing net worth trends, spending breakdowns, recurring patterns, and more.

Your files are never modified unless you explicitly save. All analysis is derived from your plain-text files and computed locally.
