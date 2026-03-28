---
sidebar_position: 4
title: Core Concepts
description: Key concepts behind Giduru's file-first approach.
---

# Core Concepts

## Vaults

A vault is simply a folder on your filesystem that contains your hledger journal files. When you open a vault in Giduru, it reads all supported files and builds an in-memory model of your finances.

Vaults can contain:
- `.journal`, `.hledger`, or `.ledger` files
- Nested folders for organization
- `include` directives to compose multiple files

## Canonical vs. derived state

Giduru draws a clear line between what's **canonical** (your files) and what's **derived** (everything else):

| Canonical (your files) | Derived (regenerable) |
| --- | --- |
| Journal files in your vault | Parse trees and indexes |
| Account declarations | Balances and totals |
| Price directives | Charts and visualizations |
| | Duplicate detection results |
| | Recurring pattern analysis |

If you delete Giduru's cache or switch tools entirely, you lose nothing. Everything is recomputed from your files.

## The hledger format

Giduru uses the [hledger journal format](https://hledger.org/hledger.html#journal-format), a plain-text double-entry accounting format. A simple transaction looks like:

```
2026-03-25 Grocery Store
    expenses:food:groceries    $42.50
    assets:checking
```

Each transaction has a date, a description, and two or more postings that must balance to zero. The format supports account declarations, commodity declarations, price directives, tags, comments, and `include` directives for multi-file setups.

## Local-first

Giduru runs entirely in your browser. It uses the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) to read and write files directly on your disk. No data is ever sent to a server.
