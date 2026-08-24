import React from 'react';
import { PROBLEM_HUBS } from '../data/hubs';
import { BUSINESS_TYPES } from '../data/businesses';
import { CATEGORIES } from '../data/categories';
import { IndexCard } from '../components/IndexCard';
import { BusinessTile } from '../components/BusinessTile';
import { QuizWidget } from '../components/QuizWidget';
import { ScorecardBar } from '../components/ScorecardBar';
import { Badge } from '../components/Badge';
import { ArrowRight, ShieldCheck, CheckCircle, SlidersHorizontal, Sparkles } from 'lucide-react';
import { getHref } from '../utils/navigation';

interface HomePageProps {
  navigate: (type: string, slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-[var(--paper)] py-12 md:py-16 border-b border-[var(--line)]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--moss-tint)] border border-[#CBD8CC] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[var(--moss)]"></span>
                <span className="font-mono-data text-[0.78rem] font-semibold text-[var(--moss-dark)] uppercase tracking-wider">
                  2026 Small Business Software Index
                </span>
              </div>

              <h1 className="font-display font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.12] text-[var(--ink)] tracking-tight text-left">
                Cut Through Software Hype with Clear Scorecards
              </h1>

              <p className="text-[1.12rem] text-[var(--ink-soft)] leading-relaxed max-w-xl text-left">
                We independently evaluate business software against fixed binary criteria. No sponsored ranks, no hidden affiliate fluff—just objective software choices.
              </p>

              {/* Quiz Widget Card */}
              <div className="pt-2">
                <QuizWidget
                  onSelectTool={(toolSlug) => navigate('review', toolSlug)}
                  onSelectCategory={(categorySlug) => navigate('category', categorySlug)}
                />
              </div>
            </div>

            {/* Right Hero Column: Business Problem Index Stack */}
            <div id="home-problems" className="lg:col-span-5 space-y-4 bg-[var(--paper-raised)] p-6 rounded-[10px] border border-[var(--line-strong)] shadow-xs text-left">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <div>
                  <span className="font-mono-data text-[0.72rem] font-bold uppercase text-[var(--moss-dark)] tracking-wider block text-left">
                    THE NAVIGATOR SPINE
                  </span>
                  <h2 className="font-display font-semibold text-[1.2rem] text-[var(--ink)] text-left">
                    Browse by Business Problem
                  </h2>
                </div>
                <span className="font-mono-data text-[0.78rem] text-[var(--ink-faint)]">
                  {PROBLEM_HUBS.length} PROBLEMS
                </span>
              </div>

              <p className="text-[0.88rem] text-[var(--ink-soft)] text-left">
                Identify the exact challenge slowing down your team and view curated software recommendations:
              </p>

              <div className="space-y-2.5">
                {PROBLEM_HUBS.map((hub) => (
                  <IndexCard
                    key={hub.id}
                    hub={hub}
                    onClick={(slug) => navigate('hub', slug)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Categories Section */}
      <section id="home-categories" className="bg-[var(--paper-raised)] py-12 border-y border-[var(--line)]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="font-mono-data text-[0.75rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block mb-1 text-left">
                CATEGORY DIRECTORY
              </span>
              <h2 className="text-display-h2 text-[var(--ink)] text-left">
                Evaluated Software Categories
              </h2>
            </div>
            <p className="text-[0.92rem] text-[var(--ink-soft)] max-w-md text-left">
              Every category uses a fixed 4-segment scoring matrix. Click any guide to view full comparison tables and reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={getHref('category', cat.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('category', cat.slug);
                }}
                className="group p-6 bg-[var(--paper)] hover:bg-white border border-[var(--line)] hover:border-[var(--moss)] rounded-[10px] transition-all duration-200 flex flex-col justify-between text-left block"
              >
                <div>
                  <div className="font-mono-data text-[0.72rem] font-semibold text-[var(--moss-dark)] uppercase tracking-wider mb-1 text-left">
                    {cat.eyebrow}
                  </div>
                  <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)] group-hover:text-[var(--moss-dark)] mb-2 transition-colors text-left">
                    {cat.name}
                  </h3>
                  <p className="text-[0.88rem] text-[var(--ink-soft)] leading-relaxed mb-4 line-clamp-3 text-left">
                    {cat.intro}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-left">
                  <span className="font-mono-data text-[0.78rem] text-[var(--ink-faint)] text-left">
                    {cat.tools.length} Evaluated Tools
                  </span>
                  <span className="font-mono-data text-[0.82rem] font-semibold text-[var(--moss-dark)] group-hover:underline flex items-center gap-1">
                    View Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Section: Browse by Business Type Grid */}
      <section className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="mb-8">
          <span className="font-mono-data text-[0.75rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block mb-1">
            TAILORED SHORTLISTS
          </span>
          <h2 className="text-display-h2 text-[var(--ink)] mb-2">
            Browse Guides by Business Model
          </h2>
          <p className="text-[0.98rem] text-[var(--ink-soft)] max-w-2xl">
            A software stack that works for an e-commerce brand will fail a local service business. Select your business type to see curated recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_TYPES.map((biz) => (
            <BusinessTile
              key={biz.id}
              business={biz}
              onClick={(slug) => navigate('business', slug)}
            />
          ))}
        </div>
      </section>

      {/* Editorial Standard Banner */}
      <section id="home-methodology" className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="p-8 bg-[var(--moss-tint)] border border-[#CBD8CC] rounded-[10px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono-data text-[0.75rem] font-bold uppercase tracking-wider text-[var(--moss-dark)]">
              OUR EDITORIAL GUARANTEE
            </span>
            <h3 className="font-display font-semibold text-[1.4rem] text-[var(--ink)]">
              No Sponsored Scores. No Hidden Rankings.
            </h3>
            <p className="text-[0.95rem] text-[var(--ink-soft)] leading-relaxed">
              Software vendors cannot pay to alter their scorecard evaluations or rank higher in comparison tables. Every score is derived from our fixed binary testing methodology.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href={getHref('about')}
              onClick={(e) => {
                e.preventDefault();
                navigate('about');
              }}
              className="font-mono-data text-[0.85rem] font-semibold bg-[var(--moss-dark)] hover:bg-[var(--moss)] text-white px-5 py-3 rounded-[8px] transition-colors inline-block"
            >
              Read Full Methodology
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
