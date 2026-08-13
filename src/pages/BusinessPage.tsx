import React, { useEffect } from 'react';
import { BusinessType } from '../types';
import { TOOLS } from '../data/tools';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ExternalLink } from 'lucide-react';

interface BusinessPageProps {
  business: BusinessType;
  navigate: (type: string, slug?: string) => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ business, navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [business.slug]);

  const eyebrow = business.eyebrow || `Business type · ${business.name}`;
  const h1 = business.h1 || `The growth stack for ${business.name.toLowerCase()} businesses`;
  const intro = business.intro || business.description;

  return (
    <div className="max-w-[840px] mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Business Types', type: 'home' },
          { label: business.name }
        ]}
        navigate={navigate}
      />

      {/* 1. Header */}
      <header id="biz-profile" className="space-y-4 pb-6 border-b border-[var(--line)]">
        <div className="font-mono-data text-[0.78rem] font-bold text-[var(--moss-dark)] uppercase tracking-widest">
          {eyebrow}
        </div>
        <h1 className="text-display-h1 text-[var(--ink)]">
          {h1}
        </h1>
        <p className="text-[1.08rem] text-[var(--ink-soft)] leading-relaxed">
          {intro}
        </p>
      </header>

      {/* 1.5 Lead Section (Primary focus e.g. Restaurant Reservations) */}
      {business.leadSection && (
        <section className="p-6 md:p-8 bg-gradient-to-br from-[var(--moss-light)]/20 to-[var(--paper-raised)] border-2 border-[var(--moss)]/30 rounded-[12px] space-y-4 shadow-sm">
          <div className="font-mono-data text-[0.8rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--moss-dark)] shrink-0 animate-pulse"></span>
            {business.leadSection.heading}
          </div>
          <p className="text-[1.02rem] text-[var(--ink)] leading-relaxed font-medium">
            {business.leadSection.body}
          </p>

          <div className="p-4 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[8px] space-y-2 shadow-xs">
            <p className="text-[0.98rem] text-[var(--ink)] leading-relaxed">
              <strong className="font-semibold text-[var(--ink)]">{business.leadSection.primaryToolName}</strong> - {business.leadSection.whyFits}
            </p>
            <div className="pt-1 flex items-center gap-2 flex-wrap">
              <button
                onClick={() => navigate('review', business.leadSection!.primaryToolSlug)}
                className="inline-flex items-center gap-1.5 text-[0.82rem] font-mono-data font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline underline-offset-4"
              >
                → {business.leadSection.reviewLinkText}
              </button>
              {business.leadSection.categorySlug && (
                <>
                  <span className="text-[var(--ink-soft)] text-[0.75rem]">•</span>
                  <button
                    onClick={() => navigate('category', business.leadSection!.categorySlug)}
                    className="text-[0.78rem] font-mono-data text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-2"
                  >
                    Full category comparison
                  </button>
                </>
              )}
            </div>
          </div>

          {business.leadSection.note && (
            <p className="text-[0.88rem] text-[var(--ink-soft)] italic pt-2 border-t border-[var(--line)]">
              {business.leadSection.note}
            </p>
          )}
        </section>
      )}

      {/* 2. Curated shortlist */}
      <section id="biz-stack" className="space-y-8">
        {business.toolCategories.map((group, groupIdx) => {
          return (
            <div key={groupIdx} className="space-y-3 pb-6 border-b border-[var(--line)] last:border-0">
              <h2 className="text-[1.2rem] font-display font-semibold text-[var(--ink)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--moss)] shrink-0"></span>
                {group.role}
              </h2>

              <div className="space-y-3 pl-2 md:pl-4">
                {group.items && group.items.length > 0 ? (
                  group.items.map((item, itemIdx) => {
                    if (item.isNoteOnly || !item.toolSlug) {
                      return (
                        <div key={itemIdx} className="p-4 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[8px] space-y-2 shadow-xs">
                          <p className="text-[0.98rem] text-[var(--ink-soft)] leading-relaxed">
                            {item.whyFits}
                          </p>
                          {item.categorySlugForNote && (
                            <div className="pt-1">
                              <button
                                onClick={() => navigate('category', item.categorySlugForNote)}
                                className="inline-flex items-center gap-1.5 text-[0.82rem] font-mono-data font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline underline-offset-4"
                              >
                                → {item.reviewLinkText || 'See category comparison'}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    }

                    const tool = TOOLS.find(t => t.slug === item.toolSlug);
                    if (!tool) return null;

                    const targetUrl = tool.affiliateUrl || tool.websiteUrl;
                    const isAffiliate = Boolean(tool.affiliateUrl);
                    const reviewLinkText = item.reviewLinkText || `${tool.categoryName} review`;

                    return (
                      <div key={itemIdx} className="p-4 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[8px] space-y-2 shadow-xs text-left">
                        <p className="text-[0.98rem] text-[var(--ink)] leading-relaxed">
                          <strong className="font-semibold text-[var(--ink)]">{tool.name}</strong> - {item.whyFits}
                        </p>
                        <div className="pt-1 flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => navigate('review', tool.slug)}
                            className="inline-flex items-center gap-1.5 text-[0.82rem] font-mono-data font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline underline-offset-4"
                          >
                            → {reviewLinkText}
                          </button>
                          {targetUrl && (
                            <>
                              <span className="text-[var(--ink-soft)] text-[0.75rem]">•</span>
                              <a
                                href={targetUrl}
                                target="_blank"
                                rel={isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                                className="inline-flex items-center gap-1 text-[0.78rem] font-mono-data text-[var(--moss-dark)] hover:underline font-semibold"
                              >
                                Visit {tool.name} <ExternalLink className="w-3 h-3" />
                              </a>
                            </>
                          )}
                          <span className="text-[var(--ink-soft)] text-[0.75rem]">•</span>
                          <button
                            onClick={() => navigate('category', tool.categorySlug)}
                            className="text-[0.78rem] font-mono-data text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-2"
                          >
                            Full {tool.categoryName} comparison
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  group.toolSlugs.map((slug, itemIdx) => {
                    const tool = TOOLS.find(t => t.slug === slug);
                    if (!tool) return null;

                    const targetUrl = tool.affiliateUrl || tool.websiteUrl;
                    const isAffiliate = Boolean(tool.affiliateUrl);

                    return (
                      <div key={itemIdx} className="p-4 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[8px] space-y-2 shadow-xs text-left">
                        <p className="text-[0.98rem] text-[var(--ink)] leading-relaxed">
                          <strong className="font-semibold text-[var(--ink)]">{tool.name}</strong> - {group.whyFits || tool.tagline}
                        </p>
                        <div className="pt-1 flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => navigate('review', tool.slug)}
                            className="inline-flex items-center gap-1.5 text-[0.82rem] font-mono-data font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline underline-offset-4"
                          >
                            → {tool.categoryName} review
                          </button>
                          {targetUrl && (
                            <>
                              <span className="text-[var(--ink-soft)] text-[0.75rem]">•</span>
                              <a
                                href={targetUrl}
                                target="_blank"
                                rel={isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                                className="inline-flex items-center gap-1 text-[0.78rem] font-mono-data text-[var(--moss-dark)] hover:underline font-semibold"
                              >
                                Visit {tool.name} <ExternalLink className="w-3 h-3" />
                              </a>
                            </>
                          )}
                          <span className="text-[var(--ink-soft)] text-[0.75rem]">•</span>
                          <button
                            onClick={() => navigate('category', tool.categorySlug)}
                            className="text-[0.78rem] font-mono-data text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-2"
                          >
                            Full {tool.categoryName} comparison
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Editorial Insert (if present) */}
      {business.editorialInsert && (
        <section className="p-6 md:p-8 bg-[var(--paper-raised)] border border-[var(--line)] rounded-[12px] space-y-4 shadow-xs mt-10">
          <h3 className="text-[1.25rem] font-display font-semibold text-[var(--ink)]">
            {business.editorialInsert.heading}
          </h3>
          <p className="text-[0.98rem] text-[var(--ink-soft)] leading-relaxed whitespace-pre-line">
            {business.editorialInsert.body}
          </p>
          {business.editorialInsert.bulletPoints && (
            <ul className="space-y-2 pt-3 border-t border-[var(--line)]">
              {business.editorialInsert.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[0.95rem] text-[var(--ink)] leading-relaxed">
                  <span className="text-[var(--moss-dark)] font-bold shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
};

