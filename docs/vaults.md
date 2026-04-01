---
sidebar_position: 8
slug: /guides/structuring-your-vault
title: Structuring Your Vault
description: Recommended file layouts for a Giduru vault, from single-file ledgers to multi-folder setups.
---

# Structuring Your Vault

A vault is any folder containing your ledger files. Giduru does not require one fixed structure, but some layouts work much better than others once the ledger grows.

## Recommended Default

For most people, this is the best starting point:

```text
my-finances/
  .giduru/
    settings.json
  main.journal
  accounts.journal
  commodities.journal
  banking/
    checking.journal
    savings.journal
  credit-card/
    2026.journal
  loans/
    mortgage.journal
    student-loan.journal
```

Why this works:

- `main.journal` gives the vault one obvious entry point
- `accounts.journal` keeps the chart of accounts explicit
- `commodities.journal` keeps currency and pricing directives separate
- folders let you organize by institution or obligation without fragmenting the logical ledger

## Keep One Entry File

Set one root file, usually `main.journal`, and include everything from there:

```ledger
include accounts.journal
include commodities.journal
include banking/checking.journal
include credit-card/2026.journal
include loans/mortgage.journal
```

This is simpler than trying to remember which file is the real root of the ledger.

## Separate Structure From Activity

As a rule of thumb:

- put account declarations in `accounts.journal`
- put commodity and price setup in `commodities.journal` or `prices.journal`
- put transactions in files grouped by account, institution, year, or workflow

That separation keeps configuration stable while transaction files continue to grow.

## Supported file types

Giduru recognizes files with these extensions:
- `.journal`
- `.hledger`
- `.ledger`

## Organization patterns

### Single file ledger

The simplest possible vault:

```
my-finances/
  ledger.journal
```

This is fine when you are starting. Move on when navigation, includes, or account declarations start to feel cramped.

### By year

Split your journal by year for easier navigation:

```
my-finances/
  main.journal        # includes the yearly files
  2024.journal
  2025.journal
  2026.journal
```

This works well if your ledger is mostly chronological and you do not need separate files by institution.

### By institution or account type

This is the pattern used by the demo vault and is usually the best long-term default:

```text
my-finances/
  main.journal
  accounts.journal
  commodities.journal
  banking/
    checking.journal
    savings.journal
  credit-card/
    2026.journal
  loans/
    mortgage.journal
```

It mirrors how people think about their finances while keeping the journal modular.

### By responsibility

Separate files for different aspects of your finances:

```text
my-finances/
  main.journal
  accounts.journal
  prices.journal
  income.journal
  expenses.journal
```

This can work, but it tends to become awkward if you later want institution-specific files too. Use it if you strongly prefer semantic separation over account-based grouping.

## Include directives

Use hledger's `include` directive to compose multiple files:

```ledger
; main.journal
include accounts.journal
include 2026.journal
```

Giduru resolves includes across your vault, so all files contribute to a single unified analysis.

## Suggested Rules

- prefer one root entry file
- keep account declarations in their own file
- split only when the split has a clear navigation benefit
- choose folder names that reflect how you think about the data later
- do not optimize for the perfect final structure too early

## Starter vault

When you open an empty folder as a vault, Giduru can generate a starter ledger with common account declarations to help you get started.
