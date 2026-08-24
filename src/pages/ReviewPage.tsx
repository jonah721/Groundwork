import React from 'react';
import { SoftwareTool } from '../types';
import { TOOLS } from '../data/tools';
import { CATEGORIES } from '../data/categories';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScorecardBar } from '../components/ScorecardBar';
import { Badge } from '../components/Badge';
import { ProsConsBlock } from '../components/ProsConsBlock';
import { VerdictBox } from '../components/VerdictBox';
import { CheckCircle2, Clock, DollarSign, Zap, ArrowRight, ShieldCheck, HelpCircle, ExternalLink } from 'lucide-react';
import { getHref } from '../utils/navigation';

interface ReviewPageProps {
  tool: SoftwareTool;
  navigate: (type: string, slug?: string) => void;
}

export const ReviewPage: React.FC<ReviewPageProps> = ({ tool, navigate }) => {
  // Find category and subsection peers for the "How it compares" mini table
  const category = CATEGORIES.find(c => c.slug === tool.categorySlug);
  let categoryPeers = TOOLS.filter(t => t.categorySlug === tool.categorySlug);
  let groupTitle = tool.categoryName;

  if (category && category.subsections) {
    const sub = category.subsections.find(s => s.tools.some(t => t.slug === tool.slug));
    if (sub) {
      categoryPeers = sub.tools;
      groupTitle = sub.title;
    }
  }

  const targetUrl = tool.affiliateUrl || tool.websiteUrl;
  const isAffiliate = Boolean(tool.affiliateUrl);

  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-6 md:py-10 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: tool.categoryName, type: 'category', slug: tool.categorySlug },
          { label: `${tool.name} Review` }
        ]}
        navigate={navigate}
      />

      {/* 2. Badge & 3. H1 & 4. Review Meta Line */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center gap-3 flex-wrap">
          {tool.badge && <Badge badge={tool.badge} />}
          <span className="font-mono-data text-[0.8rem] text-[var(--ink-faint)]">
            Reviewed August 2026 · {tool.categoryName}
          </span>
          {targetUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel={isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 font-mono-data text-[0.78rem] font-bold text-[var(--moss-dark)] hover:text-[var(--moss)] bg-[var(--moss-tint)] border border-[#CBD8CC] hover:border-[var(--moss)] px-2.5 py-1 rounded-[6px] transition-all ml-auto sm:ml-0"
            >
              Visit {tool.name} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <h1 className="text-display-h1 text-[var(--ink)]">
          {tool.name}
        </h1>

        <p className="text-[1.15rem] text-[var(--ink-soft)] font-medium leading-relaxed">
          {tool.tagline}
        </p>
      </div>

      {/* 5. The Problem It Solves & 6. Who It's For Box */}
      <div id="review-summary" className="p-6 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] space-y-4 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <span className="font-mono-data text-[0.72rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block">
              THE PROBLEM IT SOLVES
            </span>
            <p className="text-[0.98rem] text-[var(--ink)] leading-relaxed">
              {tool.overview}
            </p>
          </div>

          <div className="space-y-1.5 md:border-l md:border-[var(--line)] md:pl-6">
            <span className="font-mono-data text-[0.72rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block">
              WHO IT'S FOR
            </span>
            <p className="text-[0.98rem] text-[var(--ink)] leading-relaxed font-medium">
              {tool.verdict.targetPersona}
            </p>
          </div>
        </div>
      </div>

      {/* 7. Scorecard Bar (Full size with 4 criteria labeled inline) */}
      <section id="review-scorecard" className="p-6 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[10px] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line)] pb-4">
          <div>
            <span className="font-mono-data text-[0.72rem] font-bold uppercase text-[var(--moss-dark)] tracking-wider block mb-1">
              FULL EVALUATION SCORECARD
            </span>
            <h2 className="text-display-h2 text-[var(--ink)]">
              Binary Scoring Criteria ({tool.score})
            </h2>
          </div>
          <ScorecardBar scorecard={tool.scorecard} showLabels={true} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {tool.scorecard.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-[8px] border ${
                item.passed
                  ? item.isStandout
                    ? 'bg-[var(--ochre-tint)]/70 border-[var(--ochre)]'
                    : 'bg-[var(--moss-tint)]/50 border-[#CBD8CC]'
                  : 'bg-[#FDF2F0] border-[#F2C9C2]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-data font-bold text-[0.85rem] text-[var(--ink)]">
                  {item.label}
                </span>
                <span className={`font-mono-data text-[0.72rem] font-bold px-2 py-0.5 rounded-full ${
                  item.passed ? 'bg-[var(--moss)] text-white' : 'bg-[var(--danger)] text-white'
                }`}>
                  {item.passed ? 'STRONG' : 'MODERATE'}
                </span>
              </div>
              <p className="text-[0.82rem] text-[var(--ink-soft)] leading-snug">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Pros & Cons (2-column block) */}
      <section id="review-pros-cons" className="space-y-3">
        <h2 className="text-display-h2 text-[var(--ink)]">
          Pros & Cons Analysis
        </h2>
        <ProsConsBlock pros={tool.pros} cons={tool.cons} />
      </section>

      {/* 9. How It Compares (Mini Table against subsection/category alternatives) */}
      <section id="review-compares" className="space-y-4 text-left">
        <div className="space-y-1 text-left">
          <span className="font-mono-data text-[0.72rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block text-left">
            {groupTitle.toUpperCase()} COMPARISON
          </span>
          <h2 className="text-display-h2 text-[var(--ink)] text-left">
            How {tool.name} Compares to Alternatives
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[10px] border border-[var(--line)] bg-[var(--paper-raised)]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[var(--paper)] border-b border-[var(--line)] font-mono-data text-[0.75rem] uppercase tracking-wider text-[var(--ink-soft)]">
                <th className="py-3 px-4 font-semibold">Tool</th>
                <th className="py-3 px-4 font-semibold">Starting Price</th>
                <th className="py-3 px-4 font-semibold">Setup Time</th>
                <th className="py-3 px-4 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[0.9rem]">
              {categoryPeers.map((peer) => {
                const isCurrentTool = peer.slug === tool.slug;
                return (
                  <tr
                    key={peer.id}
                    className={isCurrentTool ? 'bg-[var(--moss-tint)]/40 font-medium' : 'hover:bg-[var(--paper)]/50'}
                  >
                    <td className="py-3.5 px-4 font-display font-semibold text-[var(--ink)] flex items-center gap-2">
                      {peer.name}
                      {peer.badge && <Badge badge={peer.badge} />}
                      {isCurrentTool && (
                        <span className="font-mono-data text-[0.7rem] bg-[var(--moss)] text-white px-2 py-0.5 rounded-full ml-auto">
                          THIS REVIEW
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-mono-data text-[var(--ink)]">
                      {peer.startingPrice}
                    </td>
                    <td className="py-3.5 px-4 font-mono-data text-[var(--ink-soft)]">
                      {peer.setupTime}
                    </td>
                    <td className="py-3.5 px-4 text-[var(--ink-soft)]">
                      {peer.bestFor}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Why We Picked It (or Didn't) */}
      <section id="review-evaluation" className="p-6 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] space-y-3">
        <h2 className="text-display-h2 text-[var(--ink)]">
          {tool.badge ? `Why We Picked It as ${tool.badge}` : 'Why We Picked It (And Who Should Pass)'}
        </h2>
        <p className="text-[1rem] text-[var(--ink-soft)] leading-relaxed">
          {tool.vsCompetitorsNote}
        </p>

        {tool.crossLink && (
          <div className="p-4 bg-[var(--paper)] rounded-[8px] border-l-4 border-[var(--moss)] text-[0.92rem] text-[var(--ink)] space-y-1 my-3">
            <p className="font-semibold text-[var(--ink)]">Also see:</p>
            <p className="text-[var(--ink-soft)]">{tool.crossLink.text}</p>
            <a
              href={getHref('review', tool.crossLink.targetSlug)}
              onClick={(e) => {
                e.preventDefault();
                navigate('review', tool.crossLink!.targetSlug);
              }}
              className="inline-flex items-center gap-1 font-mono-data text-[0.85rem] font-bold text-[var(--moss-dark)] hover:underline pt-1 cursor-pointer inline-block"
            >
              {tool.crossLink.linkText}
            </a>
          </div>
        )}

        <div className="p-4 bg-[var(--paper)] rounded-[8px] border border-[var(--line)] text-[0.92rem] text-[var(--ink-soft)] space-y-1">
          <p><strong className="text-[var(--danger)]">Who Should Look Elsewhere: </strong>{tool.verdict.whoShouldAvoid}</p>
          <p><strong className="text-[var(--moss-dark)]">Recommended Alternative: </strong>{tool.verdict.alternativeSuggestion}</p>
        </div>
      </section>

      {/* 11. Pricing Snapshot */}
      <section id="review-pricing" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
          <h2 className="text-display-h2 text-[var(--ink)]">
            Pricing Snapshot & Tiers
          </h2>
          <span className="font-mono-data text-[0.78rem] text-[var(--ink-faint)]">
            {tool.pricingDetail}
          </span>
        </div>

        <div className="overflow-x-auto rounded-[10px] border border-[var(--line)] bg-[var(--paper-raised)]">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[var(--paper)] border-b border-[var(--line)] font-mono-data text-[0.75rem] uppercase tracking-wider text-[var(--ink-soft)]">
                <th className="py-3 px-4 font-semibold">Tier Name</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Key Capabilities</th>
                <th className="py-3 px-4 font-semibold">Best Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[0.9rem]">
              {tool.pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-[var(--paper)]/50">
                  <td className="py-3.5 px-4 font-display font-semibold text-[var(--ink)]">
                    {tier.name}
                  </td>
                  <td className="py-3.5 px-4 font-mono-data font-bold text-[var(--moss-dark)]">
                    {tier.price}
                  </td>
                  <td className="py-3.5 px-4 text-[var(--ink-soft)]">
                    {tier.features}
                  </td>
                  <td className="py-3.5 px-4 font-mono-data text-[0.82rem] text-[var(--ink-faint)]">
                    {tier.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-mono-data text-[0.78rem] text-[var(--ink-faint)] italic">
          * Pricing current as of review date; confirm on {tool.name}'s official site before purchasing.
        </p>
      </section>

      {/* Key Capabilities Deep Dive */}
      <section className="space-y-4">
        <h2 className="text-display-h2 text-[var(--ink)] border-b border-[var(--line)] pb-2">
          Key Capabilities & Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tool.keyFeatures.map((feat, idx) => (
            <div key={idx} className="p-5 bg-[var(--paper-raised)] rounded-[10px] border border-[var(--line)] space-y-2">
              <h3 className="font-display font-semibold text-[1.1rem] text-[var(--ink)]">
                {feat.title}
              </h3>
              <p className="text-[0.92rem] text-[var(--ink-soft)] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Verdict Box */}
      <section className="pt-4">
        <VerdictBox
          tool={tool}
          onBackToTable={() => navigate('category', tool.categorySlug)}
        />
      </section>
    </div>
  );
};

