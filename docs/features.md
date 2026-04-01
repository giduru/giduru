---
sidebar_position: 3
slug: /guides/ways-to-use-giduru
title: Ways to Use Giduru
description: Practical patterns for using Giduru as a serious personal finance workspace.
---

# Ways To Use Giduru

This page is intentionally about workflows, not feature inventory.

Giduru is most useful when you treat it as a durable personal finance workspace: plain-text accounting files, plus an editor and analysis environment that make those files practical to live in.

## Maintain A Real Personal Ledger

If you want something more rigorous than a budgeting app, Giduru gives you a place to keep:

- assets and liabilities in one model
- income and expenses in the same journal
- transfers, loan payments, and credit card activity without special cases
- a net worth history that falls out of the ledger naturally

This is the core use case: serious personal finance using double-entry bookkeeping, without giving up plain text.

## Edit And Analyze Side By Side

One of Giduru's strongest patterns is keeping a journal file open in one pane and an analysis view open in another.

Examples:

- review a checking account file while watching **Accounts Balance**
- clean up category usage while keeping **Accounts Treemap** open
- inspect recurring subscriptions while editing card transactions
- verify a correction by watching **Net Worth Over Time** or **Monthly Expenses**

This is what makes Giduru feel different from a CLI-only workflow.

## Use It With Git

Because the ledger is plain text, Git becomes a normal part of the workflow instead of an afterthought.

Useful patterns:

- commit after large reconciliations
- keep branches for major chart-of-accounts restructures
- diff changes to verify imported or rewritten transactions
- keep a durable audit trail of how the ledger evolved

## Keep Giduru And CLI Tools In The Same Stack

Giduru does not replace the surrounding plain-text accounting ecosystem. A good workflow is often:

- use Giduru for interactive editing, search, diagnostics, and visual analysis
- use hledger or Ledger for shell scripts, batch reports, and automation
- use your normal text editor when that is the fastest tool for a one-off change

That is not fragmentation. It is the benefit of owning your data in an open format.

## Grow The Ledger Gradually

You do not need a perfect accounting system on day one.

A good progression looks like this:

1. start with one main file and a small chart of accounts
2. split into multiple files when navigation gets annoying
3. add account declarations for stronger validation
4. add commodity and price data when analysis needs it
5. keep refining the vault structure as the ledger matures

## Good Fits For Giduru

Giduru is especially well suited if you want to:

- replace fragile spreadsheets with a durable ledger
- track net worth across multiple institutions
- keep household finances in one coherent system
- learn plain-text accounting without giving up a good interface
- own your data and avoid app lock-in

## Read This Next

- [Structuring Your Vault](/docs/guides/structuring-your-vault)
- [Workspace and Editor](/docs/using-giduru/workspace-and-editor)
- [Working With Other Tools](/docs/guides/working-with-other-tools)
