export type BadgeType = 'OUR PICK' | 'BEST FOR BEGINNERS' | 'BEST VALUE' | 'RUNNER-UP' | string;

export interface ScorecardSegment {
  label: string; // e.g. "Setup", "Pricing", "Support", "Scale"
  passed: boolean;
  isStandout?: boolean; // filled with ochre if standout strength (max 1 per tool)
  detail?: string;
}

export interface SoftwareTool {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  badge?: BadgeType;
  websiteUrl?: string; // Official product website / direct backlink
  affiliateUrl?: string; // Optional affiliate referral link
  score: string; // e.g., "4/4" or "3/4"
  scorecard: ScorecardSegment[];
  bestFor: string;
  startingPrice: string;
  pricingDetail: string;
  setupTime: string;
  standoutFeature: string;
  verdict: {
    summary: string;
    targetPersona: string;
    whoShouldAvoid: string;
    alternativeSuggestion: string;
  };
  pros: string[];
  cons: string[];
  // 12-part detailed review fields
  overview: string;
  keyFeatures: { title: string; description: string }[];
  pricingTiers: { name: string; price: string; features: string; bestFor: string }[];
  setupEvaluation: string;
  supportEvaluation: string;
  realWorldUseCases: string[];
  vsCompetitorsNote: string;
  crossLink?: {
    text: string;
    linkText: string;
    targetSlug: string;
  };
  businessFitSlugs: string[]; // e.g. ['local-service', 'ecommerce']
  problemHubSlugs: string[]; // e.g. ['losing-leads', 'too-much-admin']
  ctaText?: string;
  ctaNote?: string;
  isNonAffiliate?: boolean;
}

export interface CategoryCriterion {
  name: string;
  definition: string;
}

export interface CategorySubsection {
  id: string;
  title: string;
  framing?: string;
  criteria: CategoryCriterion[];
  oneThingCallout?: {
    heading: string;
    body: string;
    toolSlug: string;
  };
  tools: SoftwareTool[];
}

export interface ScopeRedirect {
  boldPrefix: string;
  text: string;
  linkText: string;
  targetCategorySlug?: string;
  suffix?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  intro: string;
  scopeRedirects?: ScopeRedirect[];
  criteria?: CategoryCriterion[]; // For single-section C2 categories
  oneThingCallout?: {
    heading: string;
    body: string;
    toolSlug: string;
  };
  tools: SoftwareTool[];
  subsections?: CategorySubsection[]; // For multi-subsection C2a categories
}

export interface CategoryBranch {
  label: string;
  categoryName: string;
  categorySlug: string;
  description: string;
}

export interface ProblemHub {
  id: string;
  slug: string;
  num: string; // "01", "02", etc.
  hubLabel: string; // "I'm losing leads / can't track customers"
  title: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  quickWins: string[];
  recommendedToolSlugs: string[];
  categoryBranches?: CategoryBranch[];
}

export interface CuratedToolItem {
  toolSlug?: string;
  whyFits: string;
  reviewLinkText?: string;
  categorySlugForNote?: string;
  isNoteOnly?: boolean;
}

export interface BusinessToolCategory {
  role: string;
  toolSlugs: string[];
  whyFits?: string;
  items?: CuratedToolItem[];
}

export interface BusinessEditorialInsert {
  heading: string;
  body: string;
  bulletPoints?: string[];
}

export interface BusinessLeadSection {
  heading: string;
  body: string;
  primaryToolSlug: string;
  primaryToolName: string;
  whyFits: string;
  reviewLinkText: string;
  categorySlug?: string;
  note?: string;
}

export interface BusinessType {
  id: string;
  slug: string;
  name: string;
  eyebrow?: string;
  h1?: string;
  intro?: string;
  description: string;
  challenges?: string;
  leadSection?: BusinessLeadSection;
  toolCategories: BusinessToolCategory[];
  editorialInsert?: BusinessEditorialInsert;
}

export interface QuizOption {
  businessType: string;
  bottleneck: string;
  recommendedToolSlug: string;
  categorySlug: string;
  reasoning: string;
  isMismatch?: boolean;
}
