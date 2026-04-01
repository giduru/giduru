---
sidebar_position: 1
slug: /getting-started/what-is-giduru
title: What Is Giduru?
description: Giduru is a file-first personal finance workspace for plain-text double-entry accounting.
---

# What Is Giduru?

Giduru is a personal finance app for people who want the power of real accounting without giving up ownership of their data.

Instead of storing your financial history in a proprietary database, Giduru works directly with plain-text journals in the [hledger](https://hledger.org) and Ledger ecosystem. Your finances live in files on disk, not rows in someone else's backend.

Think of it like a serious accounting workspace with the ergonomics of a modern editor and the durability of plain text.

## Personal Finance With Real Accounting

Giduru is not just an expense tracker with prettier charts. It is built around double-entry bookkeeping.

That means you can model:

- assets like checking, savings, retirement accounts, and property
- liabilities like credit cards, loans, and mortgages
- income, expenses, equity, transfers, and price data
- multi-file journals that grow with you over time

For personal finance, that matters. Double-entry gives you a system that can explain where money came from, where it went, and what it means for your net worth.

## `file > app`

Most finance apps make the app canonical and your data incidental. The records live in their system, in their format, behind their product.

Giduru flips that around. Your files are canonical. The app is a tool for reading, editing, validating, and analyzing them.

That gives you a few guarantees:

- your ledger stays readable outside Giduru
- Git, backup, and sync workflows stay normal because they operate on real files
- derived views can be rebuilt at any time from the underlying journal
- if you stop using Giduru, your data still works with hledger, Ledger, and plain text editors

## Core principles

- **Plain text, full control.** Your financial data lives in `.journal`, `.hledger`, or `.ledger` files that you can inspect, diff, and back up.
- **Local-first.** Giduru reads files from your vault and computes analysis locally from the current draft state.
- **Real accounting semantics.** Includes, directives, commodities, price data, and balancing rules are part of the model, not decoration.
- **Analysis beside editing.** You can edit a ledger file and inspect the effect immediately in charts, tables, and search views.
- **No lock-in.** Your data works with hledger, Ledger, and any text editor that can open a file.

## What You Do In Giduru

1. **Open a vault.** Point Giduru at a folder containing your hledger journal files.
2. **Edit your journals.** Use the built-in editor with syntax highlighting, autocomplete, and live validation.
3. **Inspect the results.** Open analysis views for balances, net worth, recurring transactions, holdings, monthly expenses, and more.

Your files are never replaced by an app-owned format. Giduru is there to make file-based accounting practical, not to take possession of it.

## Read This Next

- [Open and Install Giduru](/docs/getting-started/open-and-install)
- [Core Ideas](/docs/getting-started/core-ideas)
- [Demo Tutorial](/docs/getting-started/demo-tutorial)
