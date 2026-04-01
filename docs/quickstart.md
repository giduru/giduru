---
sidebar_position: 4
slug: /getting-started/demo-tutorial
title: Demo Tutorial
description: Walk through the demo vault and learn the core Giduru workflow.
---

# Demo Tutorial

The demo is the fastest way to understand what Giduru is for. It gives you a realistic personal finance vault with multiple accounts, multiple files, and enough history for the analysis views to be useful.

## 1. Load The Demo

Open the [demo app](https://app.giduru.com?demo=1) or click **Load demo** on the home screen.

Giduru creates a disposable in-memory vault for you. The demo dates are shifted forward so the charts and recurring views feel current.

## 2. Start With `main.journal`

Open `main.journal` first.

This file is the root of the vault. It includes the other ledgers:

```ledger
include accounts.journal
include commodities.journal
include banking/checking.journal
include banking/savings.journal
include loans/mortgage.journal
include credit-card/2024.journal
```

That is the first key idea in Giduru: one logical ledger, many physical files.

## 3. Open `accounts.journal`

Now open `accounts.journal`.

You will see explicit account declarations such as:

```ledger
account assets:bank:checking
account liabilities:credit-card:visa
account income:salary
account expenses:food:groceries
```

This is where the vault defines its chart of accounts. It is also what lets Giduru provide better autocomplete, validation, and account-aware analysis.

## 4. Inspect A Real Transaction File

Open `banking/checking.journal` or `credit-card/2024.journal`.

You will see ordinary double-entry transactions such as salary, transfers, groceries, bills, and card payments. The important thing is that nothing about the format is app-owned. These are normal journal files.

Look for patterns like:

```ledger
2026-03-25 Grocery Store
    expenses:food:groceries    52.30 USD
    liabilities:credit-card:visa
```

and:

```ledger
2026-03-28 Payroll
    assets:bank:checking       5,250.00 USD
    expenses:taxes:federal     1,180.00 USD
    expenses:taxes:state         420.00 USD
    income:salary
```

## 5. Open The Analysis Views

Use the views panel to open a few core reports:

- **Net Worth Over Time** for the big picture
- **Accounts Balance** to inspect balances by account
- **Recurring Transactions** to detect subscriptions, payroll, and regular bills
- **Possible Duplicates** to find suspiciously similar transactions
- **Monthly Expenses** to review spending by month
- **Income Flow (Sankey)** to see where income ends up

The important thing to notice is that these views are derived from the same files you are editing.

## 6. Edit Something And Watch It Recompute

Change an amount in one of the transaction files or add a new transaction.

You should notice:

- syntax highlighting and autocomplete in the editor
- validation if the entry becomes invalid
- analysis views updating from the current draft, not only from saved files

That side-by-side loop is the core Giduru experience.

## 7. Use The Demo As A Template

The demo vault is intentionally opinionated. It is a good starting template for a real vault:

- `main.journal` as the entry file
- `accounts.journal` for account declarations
- `commodities.journal` for currency setup
- folders split by institution or obligation such as `banking/`, `credit-card/`, and `loans/`

If that shape makes sense to you, continue with:

- [Ways to Use Giduru](/docs/guides/ways-to-use-giduru)
- [Structuring Your Vault](/docs/guides/structuring-your-vault)
- [Language Syntax](/docs/language-reference/syntax)
