---
sidebar_position: 5
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

## Multi-file editing

Open multiple journal files in tabs. Giduru resolves `include` directives across files, so your analysis reflects the full picture even when your ledger spans many files.

## Vim keybindings

The editor supports optional vim keybindings for users who prefer modal editing.

## File watching

If you edit a file outside Giduru (e.g., in your terminal with hledger or a text editor), Giduru detects the change and offers to reload the file. Your vault files are always the source of truth.
