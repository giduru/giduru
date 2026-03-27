import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function Hero(): ReactNode {
  return (
    <header className="hero hero--giduru">
      <div className="container">
        <div className="hero-badge">file &gt; app</div>
        <h1 className="hero__title">GIDURU</h1>
        <p className="hero__tagline">
          Your finances. <em>Your files.</em> Your way.
        </p>
        <p className="hero__subtitle">
          A personal finance app built on plain-text hledger files.
          No databases, no lock-in, no proprietary formats — just your
          ledger, on your machine, in your control.
        </p>
        <div className="hero-buttons">
          <Link className="button button--primary button--lg" href="https://app.giduru.com?demo=1">
            Try the Demo
          </Link>
          <Link className="button button--outline button--lg" to="/docs/introduction">
            Read the Docs
          </Link>
        </div>

        <div className="code-preview">
          <div className="code-preview__label">This is your entire finance app:</div>
          <div className="code-preview__block">
            <div><span className="comment">; your finances are just text files</span></div>
            <div>&nbsp;</div>
            <div>
              <span className="date">2026-03-25</span>{' '}
              <span className="desc">Farmer's Market</span>
            </div>
            <div>
              {'    '}<span className="account">expenses:food:groceries</span>
              {'    '}<span className="amount">$42.50</span>
            </div>
            <div>
              {'    '}<span className="account">assets:checking</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="date">2026-03-24</span>{' '}
              <span className="desc">Monthly Salary</span>
            </div>
            <div>
              {'    '}<span className="account">assets:checking</span>
              {'           '}<span className="amount">$4,200.00</span>
            </div>
            <div>
              {'    '}<span className="account">income:salary</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks(): ReactNode {
  const steps = [
    {
      num: '1',
      title: 'Open a folder',
      description: 'Point Giduru at any folder with hledger journal files. That folder is your vault.',
    },
    {
      num: '2',
      title: 'Edit your journals',
      description: 'Syntax highlighting, autocomplete, real-time validation, and vim keybindings. Errors caught as you type.',
    },
    {
      num: '3',
      title: 'See your finances',
      description: 'Net worth charts, spending treemaps, recurring patterns, and duplicate detection — all live, all local.',
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How it works</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features(): ReactNode {
  const features = [
    {
      title: 'Plain text, full control',
      description:
        'Your financial data lives in hledger journal files — human-readable, git-friendly, and yours forever.',
    },
    {
      title: 'Live analysis',
      description:
        'Net worth charts, spending treemaps, recurring transaction detection, and duplicate warnings — computed live as you edit.',
    },
    {
      title: 'Editor you\'ll enjoy',
      description:
        'CodeMirror-powered with hledger syntax highlighting, autocomplete, real-time validation, and vim keybindings.',
    },
    {
      title: 'Vault-based workflow',
      description:
        'Open a folder, edit your journals, and let Giduru resolve includes across files. Works with your existing setup.',
    },
    {
      title: 'You own your data',
      description:
        'No cloud sync, no accounts, no tracking. Giduru reads files from your disk and never phones home.',
    },
    {
      title: 'No lock-in, ever',
      description:
        'Same file format as hledger and ledger. Stop using Giduru any time — your data still works with free, open-source CLI tools.',
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2>Why Giduru</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy(): ReactNode {
  return (
    <section className="philosophy">
      <h2>file &gt; app</h2>
      <p>
        Most finance apps trap your data in their database, in their format,
        behind their paywall. If they shut down, your history goes with them.
      </p>
      <p>
        Giduru never owns your data. Your ledger is plain text on your filesystem.
        Even if you never touch Giduru again, these free tools work with the
        exact same files, forever:
      </p>
      <div className="tool-badges">
        <a href="https://hledger.org" className="tool-badge" target="_blank" rel="noopener noreferrer">
          hledger
        </a>
        <a href="https://ledger-cli.org" className="tool-badge" target="_blank" rel="noopener noreferrer">
          ledger
        </a>
        <span className="tool-badge">any text editor</span>
      </div>
      <div className="philosophy__cta">
        <Link className="button button--primary button--lg" href="https://app.giduru.com?demo=1">
          Try the Demo
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Your finances, your files, your way"
      description="A file-first personal finance app built on plain text. Own your data. Use hledger, ledger, or Giduru — your choice.">
      <Hero />
      <main>
        <HowItWorks />
        <Features />
        <Philosophy />
      </main>
    </Layout>
  );
}
