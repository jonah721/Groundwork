import { QuizOption } from '../types';

export const QUIZ_MATRIX: QuizOption[] = [
  // 1. Losing leads → CRM (categorySlug: 'crm')
  {
    businessType: 'local-service',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'pipedrive',
    categorySlug: 'crm',
    reasoning: 'You need leads tracked today, not a system to configure for weeks.'
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'pipedrive',
    categorySlug: 'crm',
    reasoning: 'Simple pipeline visibility for wholesale/B2B leads outside your storefront.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'hubspot-crm',
    categorySlug: 'crm',
    reasoning: 'Free tier now, room to grow into marketing tools as you scale.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'pipedrive',
    categorySlug: 'crm',
    reasoning: 'Fastest setup for tracking catering and event inquiries.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'pipedrive',
    categorySlug: 'crm',
    reasoning: 'Tracking prospective clients through a relationship-driven, multi-touch process before they sign.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'losing-leads',
    recommendedToolSlug: 'pipedrive',
    categorySlug: 'crm',
    reasoning: 'Lightest tool that still stops leads from slipping through email.'
  },

  // 2. No one finds me online → Get Found Online (categorySlug: 'get-found-online')
  {
    businessType: 'local-service',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'squarespace',
    categorySlug: 'get-found-online',
    reasoning: 'Professional-looking site fast, with booking built in if you need it.'
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'webflow',
    categorySlug: 'get-found-online',
    reasoning: 'Full design control matters more once your site is also your store.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'webflow',
    categorySlug: 'get-found-online',
    reasoning: 'Custom design and clean SEO controls for a product-led site.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'squarespace',
    categorySlug: 'get-found-online',
    reasoning: 'Menu, hours, and reservations look credible with zero design work.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'webflow',
    categorySlug: 'get-found-online',
    reasoning: 'Case studies and thought-leadership content benefit from real design control over a template.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'not-found-online',
    recommendedToolSlug: 'wix',
    categorySlug: 'get-found-online',
    reasoning: 'Lowest cost, fastest setup - you can upgrade the look later.'
  },

  // 3. Marketing overload → Email/SMS Marketing (categorySlug: 'email-marketing')
  {
    businessType: 'local-service',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'mailchimp',
    categorySlug: 'email-marketing',
    reasoning: 'Simple newsletter and promo emails without a steep setup.'
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'klaviyo',
    categorySlug: 'email-marketing',
    reasoning: 'Recovers abandoned-cart and one-time-buyer revenue automatically.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'activecampaign',
    categorySlug: 'email-marketing',
    reasoning: 'Combines lead nurturing with light CRM in one system.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'mailchimp',
    categorySlug: 'email-marketing',
    reasoning: 'Easiest way to send specials and event promos on a schedule.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'activecampaign',
    categorySlug: 'email-marketing',
    reasoning: 'Nurturing a smaller number of high-value relationships over time, not blasting a big list.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'marketing-overload',
    recommendedToolSlug: 'mailchimp',
    categorySlug: 'email-marketing',
    reasoning: 'Free tier covers occasional outreach without extra cost.'
  },

  // 4. Customers don't come back → Loyalty/Retention (categorySlug: 'loyalty')
  {
    businessType: 'local-service',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'square-loyalty',
    categorySlug: 'loyalty',
    reasoning: "Rewards trigger automatically at checkout if you're already on Square."
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'smile-io',
    categorySlug: 'loyalty',
    reasoning: 'Live same-day points program built for online repeat purchases.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'appcues',
    categorySlug: 'onboarding-community',
    reasoning: "SaaS retention starts with fast time-to-value - guide new users to their first 'aha' moment before they drop off."
  },
  {
    businessType: 'restaurant',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'square-loyalty',
    categorySlug: 'loyalty',
    reasoning: 'No app download needed - regulars are recognized automatically.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'honeybook',
    categorySlug: 'client-retention',
    reasoning: 'Consistent, well-timed follow-up between projects does more than a rewards program.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'no-repeat-customers',
    recommendedToolSlug: 'honeybook',
    categorySlug: 'client-retention',
    reasoning: 'Automate proposals, contracts, and follow-ups so past clients come back for the next project.'
  },

  // 5. Don't know what's working → Analytics (categorySlug: 'analytics')
  {
    businessType: 'local-service',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'google-analytics',
    categorySlug: 'analytics',
    reasoning: 'Free baseline - see where booking/contact-page visitors actually come from.'
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'google-analytics',
    categorySlug: 'analytics',
    reasoning: "Connects to Google Ads so you can see what's actually driving sales."
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'google-analytics',
    categorySlug: 'analytics',
    reasoning: 'Standard baseline before adding product-specific analytics later.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'google-analytics',
    categorySlug: 'analytics',
    reasoning: 'See whether people are finding you by search, maps, or social.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'google-analytics',
    categorySlug: 'analytics',
    reasoning: 'See whether case studies and service pages are actually being read.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'no-visibility',
    recommendedToolSlug: 'microsoft-clarity',
    categorySlug: 'analytics',
    reasoning: 'Free and visual - see exactly where portfolio visitors drop off.'
  },

  // 6. Drowning in admin → Ops/Productivity (categorySlug: 'ops')
  {
    businessType: 'local-service',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'quickbooks-online',
    categorySlug: 'ops',
    reasoning: "Real bookkeeping matters once you're past basic expense tracking."
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'shipstation',
    categorySlug: 'inventory-shipping',
    reasoning: 'Batch printing shipping labels and automating multi-channel order queues stops logistics admin from eating your day.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'asana',
    categorySlug: 'ops',
    reasoning: 'Shared visibility matters most once more than one person touches a deal.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'quickbooks-online',
    categorySlug: 'ops',
    reasoning: 'Payroll and reconciliation needs are real from day one in this business type.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'zapier',
    categorySlug: 'ops',
    reasoning: 'Connect scheduling, proposal, and invoicing tools.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'too-much-admin',
    recommendedToolSlug: 'zapier',
    categorySlug: 'ops',
    reasoning: "Automate the busywork instead of hiring help you don't need yet."
  },

  // 7. Can't manage bookings → Scheduling & Booking (categorySlug: 'scheduling-booking')
  {
    businessType: 'local-service',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'calendly',
    categorySlug: 'scheduling-booking',
    reasoning: 'Fastest fix for shareable booking links with automated calendar sync.'
  },
  {
    businessType: 'ecommerce',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'calendly',
    categorySlug: 'scheduling-booking',
    reasoning: 'Direct scheduling for wholesale inquiries, founder calls, and VIP consultations.'
  },
  {
    businessType: 'b2b-saas',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'calendly',
    categorySlug: 'scheduling-booking',
    reasoning: 'Eliminate sales call back-and-forth and let leads book product demos directly.'
  },
  {
    businessType: 'restaurant',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'opentable',
    categorySlug: 'reservation-management',
    reasoning: 'OpenTable puts your dining room in front of millions of diners while automating table seating and waitlists.'
  },
  {
    businessType: 'professional-services',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'calendly',
    categorySlug: 'scheduling-booking',
    reasoning: 'For consultation calls and client meetings.'
  },
  {
    businessType: 'freelancer',
    bottleneck: 'cant-manage-bookings',
    recommendedToolSlug: 'calendly',
    categorySlug: 'scheduling-booking',
    reasoning: 'Send a single link for intro calls instead of exchanging multiple emails.'
  }
];
