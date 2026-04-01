---
sidebar_position: 9
slug: /language-reference/syntax
title: Language Syntax
description: A practical overview of the plain-text journal syntax Giduru works with.
---

# Language Syntax

Giduru works with the [hledger journal format](https://hledger.org/hledger.html#journal-format), an open plain-text format for double-entry accounting.

This page is a practical overview of the parts you will use most in Giduru. It is not a replacement for the full hledger manual, but it covers the shape of the language that the app is built around.

## Transactions

A transaction starts with a date and description, followed by two or more postings:

```ledger
2026-03-25 Farmer's Market
    expenses:food:groceries    42.50 USD
    assets:bank:checking      -42.50 USD
```

The last posting amount can be omitted. hledger (and Giduru) will infer it:

```ledger
2026-03-25 Farmer's Market
    expenses:food:groceries    42.50 USD
    assets:bank:checking
```

That balancing behavior is one of the reasons double-entry is pleasant in plain text.

## Account names

Accounts are colon-separated hierarchies. By convention, top-level accounts are one of: `assets`, `liabilities`, `equity`, `income`, `expenses`.

```text
assets:bank:checking
assets:bank:savings
expenses:food:groceries
expenses:housing:rent
liabilities:credit-card:visa
income:salary
```

These names matter semantically. Giduru uses them for autocomplete, validation, hierarchy-aware views, and account-type analysis.

## Comments and tags

Comments usually start with `;`. Tags are often represented inside comments:

```ledger
2026-03-25 Farmer's Market  ; location: downtown
    expenses:food:groceries    42.50 USD
    assets:bank:checking
```

Giduru reads comments and tags as part of the journal, not as disposable decoration.

## Directives

### Account declarations

```ledger
account assets:bank:checking
account expenses:food:groceries
```

Account declarations are especially important in Giduru because they improve autocomplete and enable stronger validation. For the details, see [Account Directives](/docs/language-reference/account-directives).

### Commodity declarations

```ledger
commodity USD
  format 1,000.00 USD
```

Commodity declarations tell the ledger how amounts are formatted and interpreted.

### Price directives

```ledger
P 2026-03-25 EUR $1.08
```

Price directives let Giduru value holdings and compute cross-commodity views such as net worth.

### Include

```ledger
include 2026.journal
include accounts.journal
```

Includes are what make multi-file vaults practical. Giduru follows them from the root entry file and treats the reachable files as one logical ledger.

## Multi-file journals

Most serious vaults use a root file such as `main.journal`:

```ledger
include accounts.journal
include commodities.journal
include banking/checking.journal
include credit-card/2026.journal
```

That lets you split the ledger physically without losing the coherence of one accounting system.

## What Giduru Pays Attention To

Giduru is not just syntax-highlighting the file. It is actively using parts of the language to drive the workspace:

- account declarations for validation and completion
- include resolution across the vault
- commodity and price data for analysis
- inferred balancing amounts
- comments and tags for filtering and interpretation

## Learn more

- [hledger documentation](https://hledger.org/hledger.html)
- [Plain Text Accounting](https://plaintextaccounting.org/)
- [Account Directives](/docs/language-reference/account-directives)
