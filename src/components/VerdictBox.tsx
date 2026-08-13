import React from 'react';
import { SoftwareTool } from '../types';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

interface VerdictBoxProps {
  tool: SoftwareTool;
  onBackToTable?: () => void;
  className?: string;
}

export const VerdictBox: React.FC<VerdictBoxProps> = ({
  tool,
  onBackToTable,
  className = ''
}) => {
  const targetUrl = tool.affiliateUrl || tool.websiteUrl;
  const isExternal = Boolean(targetUrl);
  const isAffiliate = Boolean(tool.affiliateUrl);

  return (
    <div className={`p-6 md:p-8 bg-[var(--ink)] text-white rounded-[10px] shadow-md border border-[var(--ink)] ${className}`}>
      <div className="font-mono-data text-[0.75rem] font-semibold tracking-wider uppercase text-white/70 mb-3">
        THE VERDICT
      </div>

      <h3 className="font-display text-[1.4rem] font-semibold text-white mb-3">
        Is {tool.name} Right for You?
      </h3>

      <p className="text-white/90 text-[1.02rem] leading-relaxed mb-4">
        {tool.verdict.summary}
      </p>

      <div className="p-4 bg-white/5 rounded-[8px] border border-white/10 mb-6 space-y-2 text-[0.92rem]">
        <div>
          <strong className="text-[var(--ochre-tint)] font-semibold">Recommended for: </strong>
          <span className="text-white/80">{tool.verdict.targetPersona}</span>
        </div>
        <div>
          <strong className="text-[var(--danger)]/90 font-semibold">Who should look elsewhere: </strong>
          <span className="text-white/80">{tool.verdict.whoShouldAvoid} ({tool.verdict.alternativeSuggestion})</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap pt-2 border-t border-white/10">
        <div className="flex flex-col gap-1.5">
          <a
            href={targetUrl || `#pricing-${tool.slug}`}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? (isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer') : undefined}
            className="inline-flex items-center gap-2 bg-[var(--moss)] hover:bg-[var(--moss-dark)] text-white font-mono-data text-[0.85rem] font-semibold px-5 py-2.5 rounded-[8px] transition-colors w-fit"
          >
            {tool.ctaText || (isExternal ? `Visit ${tool.name} Official Site` : `View Plans & Starting Price (${tool.startingPrice})`)}
            {isExternal ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>

          {/* Secondary link if both affiliateUrl and websiteUrl exist */}
          {tool.affiliateUrl && tool.websiteUrl && (
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white font-mono-data text-[0.78rem] underline underline-offset-2"
            >
              Direct non-affiliate link: {tool.websiteUrl}
            </a>
          )}

          {tool.ctaNote && (
            <span className="font-mono-data text-[0.78rem] text-white/70 italic">
              ({tool.ctaNote})
            </span>
          )}
        </div>

        {onBackToTable && (
          <button
            onClick={onBackToTable}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-mono-data text-[0.82rem] underline underline-offset-4 transition-colors sm:ml-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Comparison Table
          </button>
        )}
      </div>
    </div>
  );
};
