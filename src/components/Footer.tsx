import React from 'react';
import { CATEGORIES } from '../data/categories';
import { PROBLEM_HUBS } from '../data/hubs';
import { BUSINESS_TYPES } from '../data/businesses';
import { getHref } from '../utils/navigation';

interface FooterProps {
  navigate: (type: string, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[var(--ink)] text-white pt-12 pb-8 border-t border-[var(--ink)] mt-16">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <a
                href={getHref('home')}
                onClick={(e) => { e.preventDefault(); navigate('home'); }}
                className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
              >
                <div className="w-7 h-7 rounded-[5px] bg-[var(--moss)] text-white font-serif-display font-bold flex items-center justify-center">
                  G
                </div>
                <span className="font-display font-semibold text-[1.25rem] text-white">
                  Groundwork
                </span>
              </a>
            </div>
            <p className="text-[0.88rem] text-white/70 max-w-sm leading-relaxed">
              Unbiased software evaluation, binary scorecards, and tailored tool recommendations for growing small businesses. We test software independently with zero paid rankings.
            </p>
            <div className="pt-2 font-mono-data text-[0.75rem] text-[var(--ochre-tint)]">
              Updated monthly • Last audit: August 2026
            </div>
          </div>

          {/* Categories Col */}
          <div className="text-left">
            <div className="font-mono-data text-[0.72rem] font-bold text-white/50 uppercase tracking-wider mb-3 text-left">
              CATEGORIES
            </div>
            <ul className="space-y-1.5 text-[0.85rem] text-left">
              {CATEGORIES.map(cat => (
                <li key={cat.id} className="text-left">
                  <a
                    href={getHref('category', cat.slug)}
                    onClick={(e) => { e.preventDefault(); navigate('category', cat.slug); }}
                    className="text-white/80 hover:text-white transition-colors text-left block"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Problems Col */}
          <div className="text-left">
            <div className="font-mono-data text-[0.72rem] font-bold text-white/50 uppercase tracking-wider mb-3 text-left">
              BUSINESS PROBLEMS
            </div>
            <ul className="space-y-1.5 text-[0.82rem] text-left">
              {PROBLEM_HUBS.map(hub => (
                <li key={hub.id} className="text-left">
                  <a
                    href={getHref('hub', hub.slug)}
                    onClick={(e) => { e.preventDefault(); navigate('hub', hub.slug); }}
                    className="text-white/80 hover:text-white transition-colors text-left block"
                  >
                    {hub.num}. {hub.hubLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Types & Organization */}
          <div className="text-left">
            <div className="font-mono-data text-[0.72rem] font-bold text-white/50 uppercase tracking-wider mb-3 text-left">
              ORGANIZATION
            </div>
            <ul className="space-y-1.5 text-[0.85rem] text-left">
              <li className="text-left">
                <a
                  href={getHref('about')}
                  onClick={(e) => { e.preventDefault(); navigate('about'); }}
                  className="text-white/80 hover:text-white transition-colors text-left block"
                >
                  About & Methodology
                </a>
              </li>
              <li className="text-left">
                <a
                  href="#/about#disclosure"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('about');
                    window.location.hash = '/about#disclosure';
                    setTimeout(() => {
                      const el = document.getElementById('disclosure');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="text-white/80 hover:text-white transition-colors text-left block"
                >
                  Affiliate Disclosure
                </a>
              </li>
              <li className="pt-2 text-[0.72rem] font-mono-data font-bold text-white/40 uppercase tracking-wider text-left">
                BUSINESS TYPES
              </li>
              {BUSINESS_TYPES.map(biz => (
                <li key={biz.id} className="text-left">
                  <a
                    href={getHref('business', biz.slug)}
                    onClick={(e) => { e.preventDefault(); navigate('business', biz.slug); }}
                    className="text-white/70 hover:text-white transition-colors text-left block"
                  >
                    {biz.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Disclosure note */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[0.78rem] text-white/60 gap-4 font-mono-data">
          <p>© 2026 Groundwork Editorial Guides. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={getHref('about')}
              onClick={(e) => { e.preventDefault(); navigate('about'); }}
              className="text-white/70 hover:text-white transition-colors underline decoration-white/30"
            >
              About & Methodology
            </a>
            <span>•</span>
            <a
              href="#/about#disclosure"
              onClick={(e) => {
                e.preventDefault();
                navigate('about');
                window.location.hash = '/about#disclosure';
                setTimeout(() => {
                  const el = document.getElementById('disclosure');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="text-white/70 hover:text-white transition-colors underline decoration-white/30"
            >
              Affiliate Disclosure
            </a>
            <span>•</span>
            <span className="text-white/40">Zero paid placements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
