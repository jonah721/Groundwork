import React from 'react';
import { Category, SoftwareTool } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CriteriaDisclosureBox } from '../components/CriteriaDisclosureBox';
import { ComparisonTable } from '../components/ComparisonTable';
import { ScorecardBar } from '../components/ScorecardBar';
import { Badge } from '../components/Badge';
import { ProsConsBlock } from '../components/ProsConsBlock';
import { ArrowRight, Lightbulb, ExternalLink } from 'lucide-react';

interface CategoryPageProps {
  category: Category;
  navigate: (type: string, slug?: string) => void;
}

interface ToolCardProps {
  tool: SoftwareTool;
  navigate: (type: string, slug?: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, navigate }) => {
  const targetUrl = tool.affiliateUrl || tool.websiteUrl;
  const isAffiliate = Boolean(tool.affiliateUrl);

  return (
    <div
      key={tool.id}
      className="p-6 md:p-8 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] space-y-6 shadow-xs hover:border-[var(--moss)] transition-colors text-left"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-[var(--line)] text-left">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-3 flex-wrap text-left">
            <h3 className="font-display font-semibold text-[1.5rem] text-[var(--ink)] text-left">
              {tool.name}
            </h3>
            {tool.badge && <Badge badge={tool.badge} />}
          </div>
          <p className="text-[0.98rem] text-[var(--ink-soft)] max-w-2xl text-left">
            {tool.tagline}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 shrink-0 text-left md:text-right">
          <ScorecardBar scorecard={tool.scorecard} showLabels={true} />
          <div className="font-mono-data text-[0.85rem] text-[var(--ink-soft)]">
            Starting at <strong className="text-[var(--ink)]">{tool.startingPrice}</strong>
          </div>
        </div>
      </div>

      {/* Pros and Cons Summary */}
      <ProsConsBlock pros={tool.pros} cons={tool.cons} />

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-2 flex-wrap gap-4 text-left">
        <div className="font-mono-data text-[0.82rem] text-[var(--ink-soft)] text-left">
          Best for: <strong className="text-[var(--ink)]">{tool.bestFor}</strong>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {targetUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel={isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 border border-[var(--moss)] text-[var(--moss-dark)] hover:bg-[var(--moss-tint)] font-mono-data text-[0.85rem] font-semibold px-4 py-2 rounded-[8px] transition-colors"
            >
              Visit Site
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={() => navigate('review', tool.slug)}
            className="inline-flex items-center gap-2 bg-[var(--moss)] hover:bg-[var(--moss-dark)] text-white font-mono-data text-[0.85rem] font-semibold px-5 py-2.5 rounded-[8px] transition-colors"
          >
            Read Full Evaluation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, navigate }) => {
  const hasSubsections = category.subsections && category.subsections.length > 0;

  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: category.name }]}
        navigate={navigate}
      />

      {/* Category Header */}
      <div id="category-overview" className="space-y-4 max-w-3xl">
        <div className="font-mono-data text-[0.78rem] font-bold text-[var(--moss-dark)] uppercase tracking-widest">
          {category.eyebrow}
        </div>
        <h1 className="text-display-h1 text-[var(--ink)]">
          {category.h1}
        </h1>
        <p className="text-[1.1rem] text-[var(--ink-soft)] leading-relaxed">
          {category.intro}
        </p>
      </div>

      {/* Scope Redirects (e.g. Loyalty & Rewards redirection to Client Retention or Onboarding) */}
      {category.scopeRedirects && category.scopeRedirects.length > 0 && (
        <div className="space-y-3 py-3 border-l-2 border-[var(--line-strong)] pl-4 text-[0.95rem] text-[var(--ink-soft)]">
          {category.scopeRedirects.map((sr, idx) => (
            <p key={idx} className="leading-relaxed">
              <strong className="text-[var(--ink)]">{sr.boldPrefix}</strong>
              {sr.text}
              {sr.targetCategorySlug ? (
                <button
                  onClick={() => navigate('category', sr.targetCategorySlug)}
                  className="font-bold text-[var(--moss-dark)] hover:underline cursor-pointer"
                >
                  {sr.linkText}
                </button>
              ) : (
                <strong className="text-[var(--ink)]">{sr.linkText}</strong>
              )}
              {sr.suffix}
            </p>
          ))}
        </div>
      )}

      {hasSubsections ? (
        /* C2a Multi-Subsection Layout */
        <div className="space-y-16">
          {category.subsections!.map((sub, idx) => (
            <div
              key={sub.id || idx}
              className="space-y-8 pt-8 border-t border-[var(--line-strong)] first:border-0 first:pt-0"
            >
              {/* Subsection Header */}
              <div className="space-y-2">
                <div className="font-mono-data text-[0.75rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider">
                  SUBSECTION 0{idx + 1}
                </div>
                <h2 className="text-display-h2 text-[var(--ink)]">
                  {sub.title}
                </h2>
                {sub.framing && (
                  <p className="text-[1.05rem] text-[var(--ink-soft)] leading-relaxed max-w-3xl">
                    {sub.framing}
                  </p>
                )}
              </div>

              {/* Subsection Criteria Disclosure Box */}
              {sub.criteria && <CriteriaDisclosureBox criteria={sub.criteria} />}

              {/* Subsection Comparison Table */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-[1.2rem] text-[var(--ink)]">
                    {sub.title}: Comparison Overview
                  </h3>
                  <span className="font-mono-data text-[0.8rem] text-[var(--ink-faint)] hidden sm:inline">
                    Scroll horizontally on mobile →
                  </span>
                </div>

                <ComparisonTable
                  tools={sub.tools}
                  onSelectTool={(toolSlug) => navigate('review', toolSlug)}
                />
              </div>

              {/* Subsection "If You Only Do One Thing" Callout */}
              {sub.oneThingCallout && (
                <div className="p-6 bg-[var(--ochre-tint)]/80 border-2 border-[var(--ochre)] rounded-[10px] space-y-3">
                  <div className="flex items-center gap-2 text-[var(--ochre)] font-mono-data text-[0.8rem] font-bold uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 shrink-0" />
                    IF YOU ONLY DO ONE THING
                  </div>
                  <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
                    {sub.oneThingCallout.heading}
                  </h3>
                  <p className="text-[0.95rem] text-[var(--ink-soft)] leading-relaxed">
                    {sub.oneThingCallout.body}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('review', sub.oneThingCallout!.toolSlug)}
                      className="inline-flex items-center gap-1.5 font-mono-data text-[0.82rem] font-bold text-[var(--moss-dark)] hover:text-[var(--moss)] underline"
                    >
                      Read Top Recommendation Review →
                    </button>
                  </div>
                </div>
              )}

              {/* Subsection Individual Tool Review Cards */}
              <div className="space-y-6 pt-2">
                <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)] border-b border-[var(--line)] pb-3">
                  {sub.title}: Detailed Evaluations ({sub.tools.length} Tools)
                </h3>

                <div className="space-y-8">
                  {sub.tools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} navigate={navigate} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Standard C2 Single-Section Layout */
        <div className="space-y-10">
          {/* Criteria Disclosure Box */}
          {category.criteria && <CriteriaDisclosureBox criteria={category.criteria} />}

          {/* Comparison Table Section */}
          <div id="category-matrix" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-display-h2 text-[var(--ink)]">
                Category Comparison Overview
              </h2>
              <span className="font-mono-data text-[0.8rem] text-[var(--ink-faint)] hidden sm:inline">
                Scroll horizontally on mobile →
              </span>
            </div>

            <ComparisonTable
              tools={category.tools}
              onSelectTool={(toolSlug) => navigate('review', toolSlug)}
            />
          </div>

          {/* "If You Only Do One Thing" Callout */}
          {category.oneThingCallout && (
            <div className="p-6 bg-[var(--ochre-tint)]/80 border-2 border-[var(--ochre)] rounded-[10px] space-y-3">
              <div className="flex items-center gap-2 text-[var(--ochre)] font-mono-data text-[0.8rem] font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 shrink-0" />
                IF YOU ONLY DO ONE THING
              </div>
              <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
                {category.oneThingCallout.heading}
              </h3>
              <p className="text-[0.95rem] text-[var(--ink-soft)] leading-relaxed">
                {category.oneThingCallout.body}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('review', category.oneThingCallout!.toolSlug)}
                  className="inline-flex items-center gap-1.5 font-mono-data text-[0.82rem] font-bold text-[var(--moss-dark)] hover:text-[var(--moss)] underline"
                >
                  Read Top Recommendation Review →
                </button>
              </div>
            </div>
          )}

          {/* Individual Tool Review Cards Listing */}
          <div id="category-tools" className="space-y-8 pt-4">
            <h2 className="text-display-h2 text-[var(--ink)] border-b border-[var(--line)] pb-3">
              Detailed Evaluations ({category.tools.length} Tools)
            </h2>

            <div className="space-y-8">
              {category.tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} navigate={navigate} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

