import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutPageProps {
  navigate: (type: string, slug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  useEffect(() => {
    if (window.location.hash === '#disclosure') {
      const el = document.getElementById('disclosure');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: 'About & Methodology' }]}
        navigate={navigate}
      />

      {/* 1. Header */}
      <header className="space-y-4 pb-6 border-b border-[var(--line)]">
        <div className="font-mono-data text-[0.78rem] font-bold text-[var(--moss-dark)] uppercase tracking-widest">
          About Groundwork
        </div>
        <h1 className="text-display-h1 text-[var(--ink)]">
          How we decide what to recommend
        </h1>
        <p className="text-[1.15rem] font-medium text-[var(--moss-dark)] bg-[var(--moss-tint)]/60 p-4 rounded-[8px] border border-[#CBD8CC] leading-relaxed">
          We make money when you click an affiliate link - here's exactly how that does and doesn't shape what you see on this site.
        </p>
      </header>

      {/* Content Stream - Plain Text, Generous Whitespace */}
      <div className="space-y-12 text-[1.02rem] text-[var(--ink)] leading-[1.75]">
        {/* 2. How we choose what to review */}
        <section className="space-y-4">
          <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
            How we choose what to review
          </h2>
          <p className="text-[var(--ink-soft)]">
            We start from a problem, not a product. Every category on this site exists because it answers a specific bottleneck ("I'm losing leads," "no one finds me online") that comes up constantly for small and growing businesses. We pick 3–6 tools per category: enough to give a real choice, few enough that the comparison stays honest instead of turning into an exhaustive, unhelpful list.
          </p>
          <p className="text-[var(--ink-soft)]">
            We don't review every tool in a category, and we say so. If a tool isn't here, that's not automatically a verdict against it - it may just not have been evaluated yet.
          </p>
        </section>

        {/* 3. How we score */}
        <section className="space-y-4 pt-4 border-t border-[var(--line)]">
          <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
            How we score
          </h2>
          <p className="text-[var(--ink-soft)]">
            Every tool on this site is scored against four criteria, and those criteria are always shown on the category page before you see a single recommendation, not hidden, not decided after the fact to justify a pick.
          </p>
          <p className="text-[var(--ink-soft)]">
            The four criteria change per category, because what matters for a CRM (setup speed, pricing, support, scale) isn't what matters for a website builder (design flexibility, built-in SEO). What doesn't change is the format: four named, defined criteria, shown up front, with a pass/fail bar for each, not a five-star rating that hides how the number was decided.
          </p>
          <p className="text-[var(--ink-soft)]">
            A tool meeting a criterion is a judgment call, made by actually using the tool, not by reading its marketing page. We note where a tool is genuinely strong and where it falls short, on every single review: the "cons" section is mandatory, not optional, and it's never skipped to make a tool look better.
          </p>
        </section>

        {/* 4. What our badges mean */}
        <section className="space-y-4 pt-4 border-t border-[var(--line)]">
          <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
            What our badges mean
          </h2>
          <ul className="space-y-3 pl-1 text-[var(--ink-soft)]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--ink)] shrink-0">•</span>
              <span>
                <strong className="text-[var(--ink)] font-semibold">Our Pick</strong>: the tool we'd recommend first for that category's primary use case
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--ink)] shrink-0">•</span>
              <span>
                <strong className="text-[var(--ink)] font-semibold">Best for Beginners</strong> - the lowest-friction option, even if it's not the most powerful
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--ink)] shrink-0">•</span>
              <span>
                <strong className="text-[var(--ink)] font-semibold">Best Value</strong>: the strongest results for the price, not necessarily the cheapest
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--ink)] shrink-0">•</span>
              <span>
                <strong className="text-[var(--ink)] font-semibold">Runner-Up</strong>: a genuinely good option that lost to "Our Pick" for a specific, stated reason, not a consolation prize
              </span>
            </li>
          </ul>
          <p className="text-[var(--ink-soft)] pt-2">
            A tool gets one badge, or none. Not every tool in a comparison needs a superlative, and we don't invent one just to make every row look like a winner.
          </p>
        </section>

        {/* 5. Affiliate disclosure */}
        <section id="disclosure" className="space-y-4 pt-6 border-t border-[var(--line)] scroll-mt-20">
          <div className="p-6 md:p-8 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] space-y-4 shadow-xs">
            <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
              Affiliate disclosure
            </h2>
            <p className="text-[var(--ink-soft)]">
              Some links on this site are affiliate links. If you click one and sign up for or buy a tool, we may earn a commission - at no extra cost to you. This is how the site makes money and stays free to use.
            </p>
            <p className="text-[var(--ink-soft)]">
              Here's what that does not change: rankings, badges, and "our pick" decisions are made before we check which tools have an affiliate program, not after. Where a tool we recommend doesn't have an affiliate program - like several tools in our Analytics category - we still recommend it and link to it directly, with no commission. We'd rather point you to the right tool with no payout than the wrong tool with one.
            </p>
            <p className="text-[var(--ink-soft)]">
              If you ever think a recommendation looks like it's driven by commission size instead of fit, tell us - see Corrections below.
            </p>
          </div>
        </section>

        {/* 6. Update policy */}
        <section className="space-y-4 pt-4 border-t border-[var(--line)]">
          <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
            Update policy
          </h2>
          <p className="text-[var(--ink-soft)]">
            Tools change - pricing shifts, features get added or cut, a product gets acquired and changes direction entirely. Every review shows a "Reviewed [month, year]" date at the top. We aim to re-check pricing and core features at least every six months, and sooner if we hear something's changed.
          </p>
          <p className="text-[var(--ink-soft)]">
            If you're reading a review and the pricing or features described don't match what you see on the tool's own site, the tool's site is the source of truth, and we'd appreciate a note so we can update it (see below).
          </p>
        </section>

        {/* 7. Corrections and contact */}
        <section className="space-y-4 pt-4 border-t border-[var(--line)]">
          <h2 className="text-display-h2 text-[var(--ink)] font-semibold">
            Corrections and contact
          </h2>
          <p className="text-[var(--ink-soft)]">
            Found something out of date, wrong, or unclear? Contact us at{' '}
            <a
              href="mailto:editorial@groundwork.guide"
              className="text-[var(--moss-dark)] font-medium underline hover:text-[var(--moss)]"
            >
              editorial@groundwork.guide
            </a>{' '} - we'd rather fix it than leave it.
          </p>
        </section>
      </div>
    </div>
  );
};

