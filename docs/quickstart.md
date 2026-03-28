---
sidebar_position: 2
title: Quickstart
description: Get started with Giduru in under a minute.
---

# Quickstart

## Open the app

Head to [app.giduru.com](https://app.giduru.com) in your browser. No account or installation required.

## Open a vault

Click **Open Vault** and select a folder on your machine. This folder (your "vault") should contain one or more hledger journal files (`.journal`, `.hledger`, or `.ledger` extensions).

:::tip
Don't have any journal files yet? Giduru can generate a starter ledger for you when you open an empty folder.
:::

## Edit your journals

The editor supports:
- **Syntax highlighting** for hledger journal format
- **Autocomplete** for account names and descriptions
- **Real-time validation.** Errors are highlighted as you type
- **Multi-file editing** with tabs
- **Vim keybindings** (optional)

## View your analysis

Switch to any of the built-in analysis views to see your finances visualized:

| View | What it shows |
| --- | --- |
| **Net Worth Over Time** | Line chart of your net worth by commodity |
| **Accounts Treemap** | Visual breakdown of spending by account |
| **Account Balance** | Filterable table of all account balances |
| **Possible Duplicates** | Transactions that look like duplicates |
| **Recurring Transactions** | Detected recurring patterns (rent, subscriptions, etc.) |
| **Posting Search** | Filter postings by account, type, commodity, date, tags |
| **Transaction Search** | Full-text search across all transactions |

All analysis is computed locally from your plain-text files. Nothing is sent to a server.
