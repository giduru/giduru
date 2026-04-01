---
sidebar_position: 7
slug: /using-giduru/analysis-views
title: Analysis Views
description: Built-in financial analysis that updates live as you edit.
---

# Analysis Views

Giduru's views are derived from the same ledger files you are editing. They are not a second data model and they are not reports you have to export manually.

The current app ships with a growing set of analysis views.

## Net Worth Over Time

A line chart showing your net worth over time, broken down by asset and liability commodities. Useful for tracking long-term financial health.

Supports multiple commodities with price conversion using declared price directives.

## Holdings

An as-of-date view of what you hold, useful when assets are tracked across different commodities or accounts.

## Commodities

Price history and commodity-specific analysis built from declared price data.

## Accounts Treemap

A visual treemap of your spending by account hierarchy. Click into any account to drill down into sub-accounts. Great for spotting where your money goes at a glance.

## Accounts Balance

A filterable view of balances across the chart of accounts, with drill-down into account paths and periods.

## Possible Duplicates

Giduru uses fuzzy matching on amount, date, and description to detect transactions that might be duplicates. Each pair gets a similarity score so you can quickly review and decide.

## Recurring Transactions

Detects patterns in your transactions: weekly, biweekly, monthly, and semi-monthly recurrences. Useful for tracking subscriptions, rent, salary, and other regular items.

## Posting Search

Advanced filtering of register entries by:

- account name or path
- account type
- commodity
- date range
- free-text matching

## Monthly Expenses

Monthly rollups that make it easier to review expense patterns and net flow over time.

## Income Flow (Sankey)

A flow-oriented view of how income moves into spending, savings, and other destinations.

## Financial Health

Higher-level financial summaries for seeing trends over months, quarters, or years.

## Heatmap

A calendar-style view of activity density and amount patterns over time.

## Why This Matters

The important design point is not the exact set of views. It is that they all run against the same vault and the same draft state you are editing. That keeps analysis close to the ledger instead of making it a separate workflow.
