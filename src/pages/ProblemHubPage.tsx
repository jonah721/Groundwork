import React from 'react';
import { ProblemHub } from '../types';
import { TOOLS } from '../data/tools';
import { CATEGORIES } from '../data/categories';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScorecardBar } from '../components/ScorecardBar';
import { Badge } from '../components/Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getHref } from '../utils/navigation';

interface ProblemHubPageProps {
  hub: ProblemHub;
  navigate: (type: string, slug?: string) => void;
}

export const ProblemHubPage: React.FC<ProblemHubPageProps> = ({ hub, navigate }) => {
  const category = CATEGORIES.find(c => c.slug === hub.categorySlug) || CATEGORIES[0];
  const matchingTools = TOOLS.filter(t => hub.recommendedToolSlugs.includes(t.slug));

  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-6 md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Business Problems', type: 'home' },
          { label: `Problem ${hub.num}: ${hub.hubLabel}` }
        ]}
        navigate={navigate}
      />

      {/* Header */}
      <div id="hub-diagnosis" className="space-y-4 max-w-3xl text-left">
        <div className="font-mono-data text-[0.78rem] font-bold text-[var(--moss-dark)] uppercase tracking-widest flex items-center gap-2 text-left">
          <span className="px-2 py-0.5 bg-[var(--moss-tint)] border border-[#CBD8CC] rounded-full">
            BUSINESS PROBLEM {hub.num}
          </span>
          <span>{hub.hubLabel}</span>
        </div>

        <h1 className="text-display-h1 text-[var(--ink)]">
          {hub.title}
        </h1>

        <p className="text-[1.1rem] text-[var(--ink-soft)] leading-relaxed">
          {hub.description}
        </p>
      </div>

      {/* Solution Category Options / Branches */}
      {hub.categoryBranches && hub.categoryBranches.length > 0 ? (
        <div className="space-y-4 p-6 bg-[var(--moss-tint)] border border-[#CBD8CC] rounded-[10px]">
          <div className="space-y-1">
            <span className="font-mono-data text-[0.72rem] font-bold uppercase text-[var(--moss-dark)] tracking-wider block">
              SOLUTION CATEGORIES BY BUSINESS TYPE
            </span>
            <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
              Choose the category that matches how your customers engage with you
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {hub.categoryBranches.map((branch, idx) => (
              <div
                key={idx}
                className="p-4 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[8px] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="font-mono-data text-[0.75rem] font-bold text-[var(--moss-dark)] uppercase">
                    {branch.label}
                  </div>
                  <h4 className="font-display font-semibold text-[1.05rem] text-[var(--ink)]">
                    {branch.categoryName}
                  </h4>
                  <p className="text-[0.85rem] text-[var(--ink-soft)] leading-snug">
                    {branch.description}
                  </p>
                </div>

                <a
                  href={getHref('category', branch.categorySlug)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('category', branch.categorySlug);
                  }}
                  className="inline-flex items-center gap-1.5 font-mono-data text-[0.82rem] font-bold text-[var(--moss-dark)] hover:text-[var(--moss)] underline pt-1"
                >
                  View Category →
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Primary Category Link Box */
        <div className="p-6 bg-[var(--moss-tint)] border border-[#CBD8CC] rounded-[10px] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-mono-data text-[0.72rem] font-bold uppercase text-[var(--moss-dark)] tracking-wider block mb-1">
              CORE SOLUTION CATEGORY
            </span>
            <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
              {category.name}
            </h3>
            <p className="text-[0.92rem] text-[var(--ink-soft)] mt-1">
              {category.intro}
            </p>
          </div>

          <a
            href={getHref('category', category.slug)}
            onClick={(e) => {
              e.preventDefault();
              navigate('category', category.slug);
            }}
            className="shrink-0 bg-[var(--moss-dark)] hover:bg-[var(--moss)] text-white font-mono-data text-[0.85rem] font-semibold px-5 py-3 rounded-[8px] transition-colors flex items-center gap-2"
          >
            View Category Guide
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Quick Wins List */}
      <div className="p-6 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] space-y-4">
        <h2 className="font-display font-semibold text-[1.3rem] text-[var(--ink)] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[var(--moss)]" />
          3 Immediate Operational Quick Wins
        </h2>

        <div className="space-y-3 text-[0.95rem]">
          {hub.quickWins.map((win, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--paper)] rounded-[6px] border border-[var(--line)]">
              <span className="font-mono-data font-bold text-[var(--moss-dark)] shrink-0 text-[0.88rem]">
                0{idx + 1}.
              </span>
              <span className="text-[var(--ink)] leading-relaxed">{win}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Tools for this Bottleneck */}
      <div id="hub-stack" className="space-y-6">
        <h2 className="text-display-h2 text-[var(--ink)] border-b border-[var(--line)] pb-3">
          Top Software Tools Addressing This Bottleneck
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matchingTools.map(tool => (
            <div
              key={tool.id}
              className="p-6 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[10px] space-y-4 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
                    {tool.name}
                  </h3>
                  {tool.badge && <Badge badge={tool.badge} />}
                </div>

                <p className="text-[0.92rem] text-[var(--ink-soft)] leading-relaxed">
                  {tool.tagline}
                </p>

                <div className="p-3 bg-[var(--paper)] rounded-[6px] border border-[var(--line)] text-[0.88rem]">
                  <strong className="text-[var(--ink)]">Target Persona: </strong>
                  <span className="text-[var(--ink-soft)]">{tool.bestFor}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between">
                <ScorecardBar scorecard={tool.scorecard} />
                <a
                  href={getHref('review', tool.slug)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('review', tool.slug);
                  }}
                  className="inline-flex items-center gap-1.5 font-mono-data text-[0.82rem] font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline"
                >
                  Read Review
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
