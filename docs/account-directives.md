---
sidebar_position: 10
slug: /language-reference/account-directives
title: Account Directives
description: How Giduru interprets account declarations, tags, explicit account types, hierarchy checks, and related diagnostics.
---

# Account Directives

This page explains how Giduru currently interprets `account` directives in `giduru-core`.

It covers:

- the supported syntax
- what an account declaration does and does not do
- how explicit `type:` annotations interact with the built-in account-name heuristic
- which cases emit diagnostics

## The basic syntax

The minimal form is:

```ledger
account Assets:Cash
```

Giduru also reads inline and indented account comments:

```ledger
account Payroll:Gross ; type:R, view:exclude
  ; scope:taxable
```

From account comments, Giduru currently extracts:

- raw comment text
- tags such as `view:exclude`
- explicit account type annotations from `type:...`

`type:` is special:

- it is parsed as an account-type annotation
- it is not kept in the normal account `tags` list
- the raw annotation values are preserved separately in the analysis artifact

## Supported `type:` values

These annotations are accepted today:

- `type:A`, `type:asset`, `type:assets`
- `type:L`, `type:liability`, `type:liabilities`
- `type:E`, `type:equity`
- `type:R`, `type:revenue`, `type:revenues`, `type:income`
- `type:X`, `type:expense`, `type:expenses`

Short and long forms normalize to the same internal account type. For example, `type:R` and `type:income` are treated as the same explicit type.

Unsupported values emit diagnostics:

```ledger
account Assets:Cash ; type:bank
```

## What an account declaration means

Account declarations are exact-account declarations.

```ledger
account Assets
account Assets:Cash
account Assets:Cash:Wallet
```

These are three distinct declarations. Declaring `account Assets` does not automatically declare `Assets:Cash`.

That matters because the verifier treats declarations as an exact-name set:

- if there are no `account` directives anywhere in the reachable workspace, undeclared-account checks are disabled
- once at least one `account` directive exists, every posting account must be declared explicitly by exact name

So this is valid only if no posting uses a child account:

```ledger
account Assets
```

But this emits an undeclared-account diagnostic:

```ledger
account Assets

2026-01-01 Opening
  Assets:Cash  100 USD
  Equity:OpeningBalances
```

Because `Assets:Cash` was used but never declared as an exact account.

## Order and repetition

Account declarations are order-insensitive. You can declare accounts before or after the transactions that use them.

You can also repeat declarations for the same exact account. Giduru merges the declaration metadata into the account catalog:

- declaration records are preserved individually
- tags are merged
- paths are merged
- raw `type:` annotation values are merged

Repeated declarations are only valid when their explicit types are compatible.

## How account type resolution works

Giduru resolves account type in this order:

1. Use the explicit `type:` annotation on the exact declared account, if one resolves successfully.
2. Otherwise fall back to the account-name heuristic.

The current heuristic looks only at the first account segment:

- `asset` or `assets` -> `asset`
- `liability` or `liabilities` -> `liability`
- `equity` -> `equity`
- `revenue`, `revenues`, or `income` -> `income`
- `expense` or `expenses` -> `expense`
- anything else -> `unknown`

Examples:

```ledger
account Expenses:Food
account CashPool
account Payroll:Gross ; type:R
```

This resolves as:

- `Expenses:Food` -> `expense` from the heuristic
- `CashPool` -> `unknown` from the heuristic
- `Payroll:Gross` -> `income` from the explicit annotation

## Important non-inheritance rule

Explicit account types do not inherit down the account tree.

```ledger
account Assets ; type:A
account Assets:Cash
```

`Assets:Cash` is still unannotated. It does not automatically inherit `asset` from `Assets`.

If an exact account has no explicit type, Giduru keeps using the name heuristic for that exact account.

That is why explicit `type:` annotations are best understood as exact-account overrides, not recursive hierarchy declarations.

## Conflict rules and diagnostics

Giduru emits diagnostics in four different account-type cases.

### 1. Unsupported annotation value

```ledger
account Assets:Cash ; type:bank
```

This emits a parser/directive diagnostic because `bank` is not a supported account type annotation.

### 2. Conflicting `type:` tags on one directive

```ledger
account Assets:Cash ; type:A, type:X
```

This emits a parser/directive diagnostic because a single directive contains incompatible explicit account types.

### 3. Conflicting repeated declarations for the same exact account

```ledger
account CashPool ; type:A
account CashPool ; type:X
```

This emits verifier diagnostics because the same exact account was declared with incompatible explicit types across declarations.

Current behavior:

- the account's merged explicit `declaredType` becomes `unknown`
- the account's `effectiveType` also becomes `unknown`
- verified register entries for that exact account use `unknown`

### 4. Conflicting explicit annotations in the declared hierarchy

```ledger
account Assets ; type:A
account Assets:Cash ; type:X
```

This now emits a verifier diagnostic because both accounts are explicitly typed and their explicit types disagree across the declared hierarchy.

Current behavior here is intentionally narrower than inheritance:

- the conflict is reported
- the exact child account keeps its own explicit type
- the parent does not override the child
- unannotated descendants still use the heuristic

So hierarchy checking is a consistency rule for explicit annotations, not a recursive typing system.

## What you can do

- Declare accounts before or after the postings that use them.
- Declare only some accounts, as long as you do not use undeclared exact account names in postings after declaration checking has been enabled.
- Repeat the same account declaration when the explicit type is compatible.
- Use explicit `type:` annotations as exact-account overrides.
- Leave an account unannotated and let the first-segment heuristic classify it.

## What you cannot rely on

- Declaring `account Assets` does not declare `Assets:Cash`.
- A parent `type:` annotation does not automatically type child accounts.
- `type:` tags do not appear in the normal merged account `tags` list.
- Unsupported `type:` values are not accepted silently.
- Conflicting explicit types, whether on the same account or across explicitly typed ancestors and descendants, now emit diagnostics.

## What shows up in analysis output

`giduru-core` now exposes `analysis.accountCatalog` as the first-class account artifact.

For each exact account it includes:

- whether the account is declared, used, or both
- every reachable declaration record
- merged tags, paths, comments, and raw `type:` annotation values
- `declaredType` and `effectiveType`
- posting count and commodities used from verified register entries

This is the canonical place to inspect how Giduru interpreted account directives.
