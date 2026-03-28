---
sidebar_position: 7
title: hledger Format
description: A quick reference for the hledger journal format used by Giduru.
---

# hledger Journal Format

Giduru uses the [hledger journal format](https://hledger.org/hledger.html#journal-format), an open, plain-text double-entry accounting format. This page covers the basics.

## Transactions

A transaction starts with a date and description, followed by two or more postings:

```
2026-03-25 Farmer's Market
    expenses:food:groceries    $42.50
    assets:checking           -$42.50
```

The last posting amount can be omitted. hledger (and Giduru) will infer it:

```
2026-03-25 Farmer's Market
    expenses:food:groceries    $42.50
    assets:checking
```

## Account names

Accounts are colon-separated hierarchies. By convention, top-level accounts are one of: `assets`, `liabilities`, `equity`, `income`, `expenses`.

```
assets:checking
assets:savings
expenses:food:groceries
expenses:housing:rent
liabilities:credit-card
income:salary
```

## Comments and tags

Lines starting with `;` or `#` are comments. Tags can be added to transactions or postings:

```
2026-03-25 Farmer's Market  ; location: downtown
    expenses:food:groceries    $42.50
    assets:checking
```

## Directives

### Account declarations

```
account assets:checking
account expenses:food:groceries
```

### Commodity declarations

```
commodity $1,000.00
commodity EUR 1.000,00
```

### Price directives

```
P 2026-03-25 EUR $1.08
```

### Include

```
include 2026.journal
include accounts.journal
```

## Learn more

- [hledger documentation](https://hledger.org/hledger.html)
- [Plain Text Accounting](https://plaintextaccounting.org/)
