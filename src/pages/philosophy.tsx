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

        <p>
          The ancient temples of Egypt contain hieroglyphs chiseled in stone
          thousands of years ago. The ideas those glyphs convey are more
          important than the type of chisel used to carve them. The Sumerians
          understood something we keep forgetting: the record matters more
          than the tool.
        </p>
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
          No intermediary stood between a scribe and their record.
        </p>
        <p>
          Today, most of the digital artifacts we create are out of our
          control. They're stored on servers, in databases, gated behind
          internet connections and logins to cloud services. The files on your
          hard drive use proprietary formats that make them incompatible with
          older systems and other tools. Your own financial history requires
          someone else's permission to access.
        </p>
        <p>
          Giduru brings the Sumerian ethos to the digital age. By using plain
          text, we ensure your financial data isn't trapped in a proprietary
          database or a fleeting file format. Like the clay tablets of
          Mesopotamia, plain text is:
        </p>

        <div className="philosophy-page__pillars">
          <div className="philosophy-page__pillar">
            <h3>Human-readable</h3>
            <p>
              To read something written on paper, all you need is eyeballs.
              To read a Giduru ledger, all you need is a text editor. Any
              text editor. Forever.
            </p>
          </div>
          <div className="philosophy-page__pillar">
            <h3>Durable</h3>
            <p>
              It won't break when a company goes out of business, an API
              changes, or a file format is deprecated. Plain text from the
              1960s is still readable today.
            </p>
          </div>
          <div className="philosophy-page__pillar">
            <h3>Portable</h3>
            <p>
              Your data belongs to you. Move it across any system, any
              decade, any century. No export wizard. No migration tool.
              Just copy the file.
            </p>
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
          Steph Ango, the CEO of Obsidian, put it simply:{' '}
          <a href="https://stephango.com/file-over-app" target="_blank" rel="noopener noreferrer">
            file over app
          </a>{' '}
          is a philosophy. If you want to create digital artifacts that last,
          they must be files you can control, in formats that are easy to
          retrieve and read. Use tools that give you this freedom.
        </p>
        <p>
          It's also an appeal to tool makers: accept that all software is
          ephemeral, and give people ownership over their data.
        </p>
        <p>
          We take this seriously. In the fullness of time, the ledger files you
          create are more important than Giduru itself. Apps are ephemeral. Your
          files have a chance to last. We'd be deluding ourselves to think
          Giduru will exist forever — but we've made sure your data will
          outlive it.
        </p>
        <p>
          Most finance apps don't think this way. They store your data in their
          database, in their format, behind their paywall. When they{' '}
          <a href="https://en.wikipedia.org/wiki/Intuit_Mint#Shut_down" target="_blank" rel="noopener noreferrer">
            shut down
          </a>{' '}
          — and they do — your history disappears. You're left exporting CSVs
          and hoping you got everything. Millions of people lost years of
          financial history when Mint closed its doors. Not because their data
          was destroyed, but because it was never really theirs.
        </p>
        <p>
          The Sumerians didn't have this problem. Their records were etched into
          clay — no vendor, no subscription, no API key required to read them
          five millennia later. The world is filled with ideas from generations
          past, transmitted through clay tablets, manuscripts, paintings, and
          tapestries. These are objects you can touch, hold, own, and preserve.
        </p>
        <p>
          Giduru follows the same principle. Your ledger is a plain text file on
          your filesystem. Open it in Giduru, Vim, VS Code, or any tool that
          can read text. Giduru is a better way to work with your ledger
          files — but it is never the <em>only</em> way. That's the point.
        </p>
        <p>
          This isn't a limitation. It's a guarantee. Your financial history will
          never be held hostage by any single application, including ours. If
          you want your ledger to still be readable on a computer from the
          2060s or 2160s, it matters that it can be read on a computer from
          the 1960s. Plain text gives you that.
        </p>

        <div className="philosophy-page__comparison">
          <div className="philosophy-page__comparison-col">
            <h3>Typical finance app</h3>
            <ul>
              <li>Data in a proprietary database</li>
              <li>Requires the app to access your history</li>
              <li>Export is lossy and incomplete</li>
              <li>Shuts down = your data is gone</li>
              <li>You need permission to see your own finances</li>
            </ul>
          </div>
          <div className="philosophy-page__comparison-col philosophy-page__comparison-col--highlight">
            <h3>Giduru</h3>
            <ul>
              <li>Data in plain text files you own</li>
              <li>Readable with any text editor, forever</li>
              <li>Nothing to export — the file <em>is</em> the data</li>
              <li>Works with free CLI tools if Giduru disappears</li>
              <li>Your finances are yours, no permission needed</li>
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
        <h2>Compatible tools, forever</h2>
        <p>
          We build Giduru because we think it's the best way to work with your
          ledger files. But we're not the only way, and we never want to be.
          The file format is open. Your data works with these free, open-source
          tools today, and it will work with whatever comes next:
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
          This is the promise of <strong>file &gt; app</strong>. Not just that
          you <em>can</em> leave, but that leaving is trivially easy. There's no
          export step. There's no migration. Your files are already in the
          format every compatible tool expects. You don't even have to stop
          using Giduru — use it alongside anything else, editing the same files.
        </p>
        <p>
          We think the best way to earn your trust is to make sure you never
          need to trust us at all.
        </p>

        <blockquote className="philosophy-page__quote">
          All software is ephemeral. Give people ownership over their data.
          <cite>
            {' — '}
            <a href="https://stephango.com/file-over-app" target="_blank" rel="noopener noreferrer">
              Steph Ango
            </a>
          </cite>
        </blockquote>

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
