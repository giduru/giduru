---
sidebar_position: 5
slug: /getting-started/core-ideas
title: Core Ideas
description: The ideas that make Giduru different from a typical personal finance app.
---

# Core Ideas

## Files Are Canonical

Giduru treats the filesystem as canonical and the app state as derived.

That means:

- your journal files are the source of truth
- editor state, balances, charts, indexes, and caches can all be rebuilt
- you can always leave Giduru without exporting or migrating your data

This is the practical meaning of `file > app`.

## Personal Finance Deserves Double-Entry

Giduru is built for plain-text accounting, not category-only budgeting.

A simple transaction already gives you more structure than a typical consumer finance app:

```ledger
2026-03-25 Grocery Store
    expenses:food:groceries    42.50 USD
    assets:bank:checking
```

Every posting has an account. Every transaction balances. Assets, liabilities, income, expenses, and equity all live in the same model. That is what makes net worth and reporting trustworthy.

## A Vault Is Just A Folder

A vault is an ordinary directory containing one or more journal files plus optional Giduru settings.

It can contain:

- `.journal`, `.hledger`, or `.ledger` files
- nested folders for organization
- `include` directives that assemble many files into one logical journal
- optional `.giduru/*.json` config files for workspace settings

## Canonical vs. derived state

Giduru draws a clear line between what's **canonical** (your files) and what's **derived** (everything else):

| Canonical (your files) | Derived (regenerable) |
| --- | --- |
| Journal files in your vault | Parse trees and indexes |
| Account declarations | Balances and totals |
| Price directives | Charts and visualizations |
| | Duplicate detection results |
| | Recurring pattern analysis |

If you delete a cache, close the app, or switch tools entirely, you lose nothing essential. Everything important is still in the ledger.

## Entry File Plus Includes

Giduru expects a root entry file, usually `main.journal`, and then follows `include` directives from there. This keeps large vaults manageable without turning the ledger into an app-specific project format.

Example:

```ledger
include accounts.journal
include commodities.journal
include banking/checking.journal
include credit-card/2026.journal
```

## Hledger-Native, Not Hledger-Themed

Giduru is opinionated about understanding the ledger as accounting data, not just highlighted text. Syntax, balancing rules, account directives, commodities, prices, and includes all matter.

If you want the syntax details, go to [Language Syntax](/docs/language-reference/syntax) and [Account Directives](/docs/language-reference/account-directives).

## Local-First

Giduru computes analysis from the files in your vault and the current in-memory draft. You do not need an account, an import pipeline, or a cloud backend to begin.
