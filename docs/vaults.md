---
sidebar_position: 6
title: Vaults
description: How Giduru works with folders of journal files.
---

# Vaults

A vault is any folder on your filesystem that contains hledger journal files. Giduru doesn't impose any particular structure. Use whatever organization makes sense to you.

## Supported file types

Giduru recognizes files with these extensions:
- `.journal`
- `.hledger`
- `.ledger`

## Organization patterns

### Single file

The simplest approach. One file for everything:

```
my-finances/
  ledger.journal
```

### By year

Split your journal by year for easier navigation:

```
my-finances/
  main.journal        # includes the yearly files
  2024.journal
  2025.journal
  2026.journal
```

### By category

Separate files for different aspects of your finances:

```
my-finances/
  main.journal
  accounts.journal    # account declarations
  prices.journal      # commodity prices
  income.journal
  expenses.journal
```

## Include directives

Use hledger's `include` directive to compose multiple files:

```
; main.journal
include accounts.journal
include 2026.journal
```

Giduru resolves includes across your vault, so all files contribute to a single unified analysis.

## Starter ledger

When you open an empty folder as a vault, Giduru can generate a starter ledger with common account declarations to help you get started.
