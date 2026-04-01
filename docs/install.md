---
sidebar_position: 2
slug: /getting-started/open-and-install
title: Install / Use Giduru
description: Open Giduru instantly on the web, install it like an app, and use the same plain-text ledger across every platform.
---

# Install / Use Giduru

Giduru is built around a simple promise: your finances live in plain-text files you own, and the app meets you wherever you want to use them.

Start in the browser, install it like an app, and eventually carry the same ledger across web, desktop, iPhone, iPad, and Android.

## Web / PWA

The fastest way to start is the [Giduru web app](https://app.giduru.com).

From the home screen you can:

- **Open vault** to work with a real folder on disk
- **Create vault** to scaffold a new ledger folder
- **Load demo** to explore the [demo app](https://app.giduru.com?demo=1) with no setup

If you want the best browser experience, Giduru works best in Chrome.

You can also install the web version as a PWA for a more app-like feel, while keeping the same file-first workflow and the same ledger files.

## Desktop

A dedicated desktop app is coming soon.

The goal is a first-class local finance workspace with the same plain-text ledger, the same double-entry model, and the same file ownership guarantees.

## iPhone / iPad

iPhone and iPad support is coming soon.

The aim is not a stripped-down companion app. It is real Giduru, adapted for mobile use.

## Android

Android support is coming soon.

Same philosophy, same ledger, same data ownership.

## Your Vault Stays Yours

Your vault is just a folder on disk. It can be:

- an existing hledger or Ledger journal folder
- a brand new empty folder you want Giduru to initialize
- a folder already tracked in Git

Giduru does not import your finances into a proprietary database. It works with the files where they already live.

## A Typical Vault

A typical vault contains:

- a root entry file such as `main.journal`
- other journal files included from that entry file
- optional Giduru config in `.giduru/*.json`

For example:

```text
my-finances/
  .giduru/
    settings.json
  main.journal
  accounts.journal
  commodities.journal
  banking/
  credit-card/
```

## If You Already Use Plain-Text Accounting

If you already use hledger, Ledger, Vim, Emacs, or VS Code, the transition is simple: keep your current files and open that folder in Giduru.

## If You Are Starting Fresh

If you are starting from scratch, the easiest path is:

1. create an empty folder
2. open it in Giduru
3. let Giduru create a starter vault or start from the demo structure

Then continue with the [Demo Tutorial](/docs/getting-started/demo-tutorial) and [Structuring Your Vault](/docs/guides/structuring-your-vault).
