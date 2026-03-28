import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function Header(): ReactNode {
  return (
    <header className="philosophy-page__header">
      <div className="container">
        <div className="philosophy-page__cuneiform">{'\u{12100}'} {'\u{12000}'}</div>
        <h1>The Philosophy of Giduru</h1>
        <p className="philosophy-page__lead">
          file &gt; app
        </p>
      </div>
    </header>
  );
}

function Origin(): ReactNode {
  return (
    <section className="philosophy-page__section">
      <div className="container philosophy-page__prose">
        <h2>The name</h2>
        <p>
          <strong>Giduru</strong> is a tribute to the very origins of human
          accounting. The name is derived from two Sumerian roots that represent
          the dawn of the written record:
        </p>

        <div className="philosophy-page__roots">
          <div className="philosophy-page__root">
            <div className="philosophy-page__glyph">{'\u{12100}'}</div>
            <h3>Gi</h3>
            <p>
              The reed stylus used by ancient scribes to mark records into clay.
              It represents the tool of clarity and the act of documentation —
              the original "keyboard."
            </p>
          </div>
          <div className="philosophy-page__root">
            <div className="philosophy-page__glyph">{'\u{12000}'}</div>
            <h3>Duru</h3>
            <p>
              A term for something "fresh," "damp," or "vibrant." In the context
              of the first ledgers, it referred to the endurance of the
              record — data that stays live and relevant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySumerian(): ReactNode {
  return (
    <section className="philosophy-page__section philosophy-page__section--alt">
      <div className="container philosophy-page__prose">
        <h2>Why Sumerian?</h2>
        <p>
          Five thousand years ago, the Sumerians realized that memory is
          fallible, but a ledger is permanent. They didn't use complex
          black-box systems. They used simple marks on a durable medium.
        </p>
        <p>
          Giduru brings that same ethos to the digital age. By using plain
          text, we ensure your financial data isn't trapped in a proprietary
          database or a fleeting file format. Like the clay tablets of
          Mesopotamia, plain text is:
        </p>

        <div className="philosophy-page__pillars">
          <div className="philosophy-page__pillar">
            <h3>Human-readable</h3>
            <p>No special software required to understand your own history.</p>
          </div>
          <div className="philosophy-page__pillar">
            <h3>Durable</h3>
            <p>It won't break when a company goes out of business or an API changes.</p>
          </div>
          <div className="philosophy-page__pillar">
            <h3>Portable</h3>
            <p>Your data belongs to you, easily moved across any system or century.</p>
          </div>
        </div>

        <blockquote className="philosophy-page__quote">
          A ledger should last as long as the wealth it tracks.
        </blockquote>
      </div>
    </section>
  );
}

function FileOverApp(): ReactNode {
  return (
    <section className="philosophy-page__section">
      <div className="container philosophy-page__prose">
        <h2>file &gt; app</h2>
        <p>
          Most finance apps own your data. They store it in their database, in
          their format, behind their paywall. If they shut down, your history
          disappears. You're left exporting CSVs and hoping you got everything.
        </p>
        <p>
          The Sumerians didn't have this problem. Their records were etched into
          clay — no vendor, no subscription, no API key required to read them
          five millennia later. The medium was the message.
        </p>
        <p>
          Giduru follows the same principle. Your ledger is a plain text file on
          your filesystem. It works with{' '}
          <a href="https://hledger.org" target="_blank" rel="noopener noreferrer">hledger</a>,{' '}
          <a href="https://ledger-cli.org" target="_blank" rel="noopener noreferrer">ledger</a>,{' '}
          Vim, VS Code, or any tool that can read text. Giduru is a better way
          to work with these files — but it is never the <em>only</em> way.
        </p>
        <p>
          This isn't a limitation. It's a guarantee: your financial history will
          never be held hostage by any single application, including ours.
        </p>

        <div className="philosophy-page__comparison">
          <div className="philosophy-page__comparison-col">
            <h3>Typical finance app</h3>
            <ul>
              <li>Data in a proprietary database</li>
              <li>Requires the app to access your history</li>
              <li>Export is lossy and incomplete</li>
              <li>Shuts down = your data is gone</li>
            </ul>
          </div>
          <div className="philosophy-page__comparison-col philosophy-page__comparison-col--highlight">
            <h3>Giduru</h3>
            <ul>
              <li>Data in plain text files you own</li>
              <li>Readable with any text editor</li>
              <li>Nothing to export — the file <em>is</em> the data</li>
              <li>Works with free CLI tools forever</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreeForever(): ReactNode {
  return (
    <section className="philosophy-page__section philosophy-page__section--alt">
      <div className="container philosophy-page__prose">
        <h2>Free alternatives, forever</h2>
        <p>
          Even if you never use Giduru, you can manage your finances with these
          free, open-source tools. They read and write the exact same file
          format:
        </p>
        <div className="philosophy-page__tools">
          <a href="https://hledger.org" className="philosophy-page__tool" target="_blank" rel="noopener noreferrer">
            <strong>hledger</strong>
            <span>Command-line accounting with reports, balance sheets, and a web UI</span>
          </a>
          <a href="https://ledger-cli.org" className="philosophy-page__tool" target="_blank" rel="noopener noreferrer">
            <strong>ledger</strong>
            <span>The original plain-text accounting tool that started it all</span>
          </a>
        </div>
        <p>
          This is the promise of <strong>file &gt; app</strong>: the file
          format is open, the tools are free, and your data is yours. Giduru
          just makes working with it a better experience.
        </p>

        <div className="philosophy-page__cta">
          <Link className="button button--primary button--lg" href="https://app.giduru.com?demo=1">
            Try the Demo
          </Link>
          <Link className="button button--outline button--lg" to="/docs/introduction">
            Read the Docs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Philosophy(): ReactNode {
  return (
    <Layout
      title="Philosophy"
      description="The philosophy behind Giduru: plain text, file over app, and a name rooted in the origins of human accounting.">
      <Header />
      <main>
        <Origin />
        <WhySumerian />
        <FileOverApp />
        <FreeForever />
      </main>
    </Layout>
  );
}
