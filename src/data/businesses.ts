import { BusinessType } from '../types';

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: 'local-service',
    slug: 'local-service',
    name: 'Local Service',
    eyebrow: 'Business type · Local service',
    h1: 'The growth stack for local service businesses',
    intro: "Plumbers, salons, gyms, clinics, and similar businesses share a specific shape of problem: most customers find you nearby, most work happens in person, and most growth comes from being easy to find, easy to book, and worth coming back to. Here's the shortlist pulled from our full reviews, chosen specifically for that shape of business, not the general \"best tools\" list.",
    description: 'Plumbers, salons, gyms, clinics, and similar businesses share a specific shape of problem: most customers find you nearby, most work happens in person, and most growth comes from being easy to find, easy to book, and worth coming back to.',
    challenges: 'High reliance on rapid lead response times, phone call bookings, local Google Maps ranking, and quote estimation follow-ups.',
    toolCategories: [
      {
        role: 'Get found',
        toolSlugs: ['squarespace'],
        items: [
          {
            toolSlug: 'squarespace',
            whyFits: 'a professional-looking site fast, without hiring a designer. Pair it with a free Google Business Profile: most local searches start there, not on your website.',
            reviewLinkText: 'Website Builders review'
          }
        ]
      },
      {
        role: 'Stop losing leads',
        toolSlugs: ['pipedrive'],
        items: [
          {
            toolSlug: 'pipedrive',
            whyFits: 'the moment a call or form comes in, it needs somewhere to live besides a sticky note. Visual pipeline, live the same day.',
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Book them in without the back-and-forth',
        toolSlugs: ['calendly'],
        items: [
          {
            toolSlug: 'calendly',
            whyFits: 'the moment a lead is ready to book, send a link instead of playing phone tag over available times.',
            reviewLinkText: 'Scheduling & Booking review'
          }
        ]
      },
      {
        role: 'Stay in front of customers',
        toolSlugs: ['mailchimp'],
        items: [
          {
            toolSlug: 'mailchimp',
            whyFits: 'for appointment reminders, seasonal promos, and "we miss you" nudges. Free tier is enough until you\'re sending real volume.',
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Get customers to come back',
        toolSlugs: ['square-loyalty'],
        items: [
          {
            toolSlug: 'square-loyalty',
            whyFits: 'if you already take payments in person, rewards trigger automatically at checkout with nothing for the customer to download. The lowest-friction loyalty tool that exists.',
            reviewLinkText: 'Loyalty review'
          }
        ]
      },
      {
        role: 'Know what\'s working',
        toolSlugs: ['google-analytics'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: 'free, and enough to see whether your website traffic is actually turning into bookings. Install it even if the dashboard feels like more than you need at first.',
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Stop drowning in admin',
        toolSlugs: ['zapier'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: 'connect your booking tool, payment processor, and calendar so a new appointment doesn\'t mean re-typing the same details three times.',
            reviewLinkText: 'Ops review'
          }
        ]
      }
    ]
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce',
    eyebrow: 'Business type · E-commerce',
    h1: 'The growth stack for online stores',
    intro: "E-commerce growth has a specific shape: traffic that doesn't convert, carts that get abandoned, and customers who buy once and never come back. Every tool below earns its spot because it directly addresses one of those three leaks; not because it's a generically popular tool.",
    description: "E-commerce growth has a specific shape: traffic that doesn't convert, carts that get abandoned, and customers who buy once and never come back. Every tool below earns its spot because it directly addresses one of those three leaks; not because it's a generically popular tool.",
    challenges: 'Managing acquisition costs, abandoned cart drop-offs, inventory sync, and driving repeat customer purchases.',
    toolCategories: [
      {
        role: 'Get the store live',
        toolSlugs: ['squarespace', 'webflow'],
        items: [
          {
            toolSlug: 'squarespace',
            whyFits: "fastest way to a professional-looking storefront if you're starting simple. Consider Webflow instead if you want full design control over the shopping experience.",
            reviewLinkText: 'Website Builders review'
          }
        ]
      },
      {
        role: 'Stop losing leads before they buy',
        toolSlugs: ['hubspot-crm'],
        items: [
          {
            toolSlug: 'hubspot-crm',
            whyFits: "free tier tracks contacts and inquiries now, and grows into the marketing tools you'll likely want as the store scales.",
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Recover lost sales',
        toolSlugs: ['klaviyo'],
        items: [
          {
            toolSlug: 'klaviyo',
            whyFits: "the single highest-leverage tool on this list for e-commerce specifically. Cart and browse-abandonment flows recover revenue that's currently just leaking away.",
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Turn one-time buyers into repeat customers',
        toolSlugs: ['smile-io'],
        items: [
          {
            toolSlug: 'smile-io',
            whyFits: 'a points/rewards program live the same day, built specifically for online stores.',
            reviewLinkText: 'Loyalty review'
          }
        ]
      },
      {
        role: "Know what's actually converting",
        toolSlugs: ['google-analytics', 'microsoft-clarity'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: "paired with Microsoft Clarity once you want to see why a specific product or checkout page isn't converting, not just that it isn't.",
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Stop drowning in admin',
        toolSlugs: ['zapier', 'quickbooks-online', 'shipstation'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: 'connect your store to the other tools you use (payment, forms, email); add QuickBooks Online once basic expense tracking stops being enough for real financial reporting.',
            reviewLinkText: 'Ops & Productivity review'
          },
          {
            toolSlug: 'shipstation',
            whyFits: 'stop logging into each sales channel separately to print labels; pulls every order into one queue.',
            reviewLinkText: 'Inventory & Shipping review'
          }
        ]
      }
    ]
  },
  {
    id: 'b2b-saas',
    slug: 'b2b-saas',
    name: 'B2B SaaS',
    eyebrow: 'Business type · B2B SaaS',
    h1: 'The growth stack for B2B SaaS',
    intro: "SaaS growth runs on a longer, more considered sales cycle than most business types - someone needs to be educated, trust you, and often loop in a colleague before they buy. That changes which tools matter: content and design carry more weight, \"loyalty\" isn't a rewards program, and knowing exactly where prospects drop off in a trial matters more than knowing they visited at all.",
    description: "SaaS growth runs on a longer, more considered sales cycle than most business types - someone needs to be educated, trust you, and often loop in a colleague before they buy.",
    challenges: 'Longer considered sales cycles, multi-touch nurture, trial conversion bottlenecks, and team task/process coordination.',
    toolCategories: [
      {
        role: 'Track leads through a longer cycle',
        toolSlugs: ['hubspot-crm'],
        items: [
          {
            toolSlug: 'hubspot-crm',
            whyFits: "free tier is enough to start, and it scales into the marketing and sales tooling a longer B2B cycle usually ends up needing. If you'd rather have CRM and email automation combined in one system from day one, ActiveCampaign covers both.",
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Get found by the right buyer',
        toolSlugs: ['webflow'],
        items: [
          {
            toolSlug: 'webflow',
            whyFits: "B2B buyers dig into a site before they ever talk to sales; Webflow's design control supports the case-studies-and-content-heavy site a considered sale needs.",
            reviewLinkText: 'Website Builders review'
          }
        ]
      },
      {
        role: 'Run a real sales process, not just email blasts',
        toolSlugs: ['activecampaign'],
        items: [
          {
            toolSlug: 'activecampaign',
            whyFits: "combines CRM-grade automation with email, useful once you're nurturing leads through multiple touches instead of sending one-off newsletters.",
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Book demo and sales calls without the back-and-forth',
        toolSlugs: ['calendly'],
        items: [
          {
            toolSlug: 'calendly',
            whyFits: 'the standard way prospects book time with your sales team directly from a landing page or email.',
            reviewLinkText: 'Scheduling & Booking review'
          }
        ]
      },
      {
        role: 'Keep customers past the trial',
        toolSlugs: ['appcues', 'circle'],
        items: [
          {
            toolSlug: 'appcues',
            whyFits: 'a guided walkthrough to your product\'s core "aha" moment is the highest-leverage fix for early trial drop-off.',
            reviewLinkText: 'Onboarding & Community review'
          },
          {
            toolSlug: 'circle',
            whyFits: 'once onboarding is solid, an ongoing community gives users a reason to stay engaged between sessions, not just a support inbox.',
            reviewLinkText: 'Onboarding & Community review'
          }
        ]
      },
      {
        role: 'Know where prospects drop off',
        toolSlugs: ['google-analytics', 'microsoft-clarity'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: "paired with Microsoft Clarity to watch actual signup-flow and demo-request sessions: the fastest way to see exactly where a trial funnel leaks.",
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Stop admin from eating founder time',
        toolSlugs: ['zapier', 'asana'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: "connect trial signups, CRM, and support tools. Asana if the real issue is team task visibility as headcount grows, not data movement.",
            reviewLinkText: 'Ops review'
          }
        ]
      }
    ]
  },
  {
    id: 'restaurant',
    slug: 'restaurant',
    name: 'Restaurant & Hospitality',
    eyebrow: 'Business type · Restaurant & hospitality',
    h1: 'The growth stack for restaurants and hospitality',
    intro: 'This is one of the most in-person, high-frequency business types on this site - customers decide where to eat in minutes, based on a search result, a photo, or whether they got a reason to come back. The tools below lean toward "found fast" and "worth returning to" over anything requiring a long setup.',
    description: 'This is one of the most in-person, high-frequency business types on this site - customers decide where to eat in minutes, based on a search result, a photo, or whether they got a reason to come back.',
    challenges: 'Local online discovery, repeat diner visits, managing seasonal promotions, catering inquiries, and POS/booking integration.',
    leadSection: {
      heading: 'Start here: get bookable',
      body: "For a restaurant, reservations aren't one tool among several; they're close to the whole game. Before anything else on this page, get on a platform diners can actually book from.",
      primaryToolSlug: 'opentable',
      primaryToolName: 'OpenTable',
      whyFits: 'the diner network alone often brings in more new tables than the per-cover fees cost, on top of handling walk-ins and waitlists in real time.',
      reviewLinkText: 'Reservation & Table Management review',
      categorySlug: 'reservations',
      note: 'Already running Toast for POS? Toast Tables keeps reservations and your point-of-sale in one system instead - see the full category comparison.'
    },
    toolCategories: [
      {
        role: 'Get found fast',
        toolSlugs: ['squarespace'],
        items: [
          {
            toolSlug: 'squarespace',
            whyFits: 'a clean, photo-forward site with your menu and hours live quickly. Pair it with a free Google Business Profile: most people searching "restaurants near me" never leave that search page.',
            reviewLinkText: 'Website Builders review'
          }
        ]
      },
      {
        role: 'Track private events and catering inquiries',
        toolSlugs: ['pipedrive'],
        items: [
          {
            toolSlug: 'pipedrive',
            whyFits: 'for the inquiries that don\'t go through your reservation platform, like private events and catering.',
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Keep tables filling on slow nights',
        toolSlugs: ['mailchimp'],
        items: [
          {
            toolSlug: 'mailchimp',
            whyFits: 'simple email/SMS for specials, events, and slow-night promotions. Free tier covers most single-location needs.',
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Turn first-timers into regulars',
        toolSlugs: ['square-loyalty'],
        items: [
          {
            toolSlug: 'square-loyalty',
            whyFits: 'rewards trigger automatically at checkout tied to a card or phone number, with nothing for a diner to download. The single best-fit loyalty tool for in-person hospitality.',
            reviewLinkText: 'Loyalty review'
          }
        ]
      },
      {
        role: "Know what's actually working",
        toolSlugs: ['google-analytics'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: 'free, and enough to see whether your website (and any online ordering) is actually driving visits or orders.',
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Cut down on admin',
        toolSlugs: ['zapier'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: 'connect your POS, reservation system, and online ordering so a booking or order doesn\'t need re-entering somewhere else.',
            reviewLinkText: 'Ops review'
          }
        ]
      }
    ]
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: 'Professional Services',
    eyebrow: 'Business type · Professional services',
    h1: 'The growth stack for lawyers, accountants, consultants, and agencies',
    intro: "Professional services grow on trust and referrals more than any other business type on this site - people hire you because a case study, a reputation, or a colleague's recommendation made you the obvious choice. The tools below support that: fewer high-touch relationships to manage well, rather than high-volume marketing.",
    description: 'Agencies, law firms, accounting practices, and executive consulting groups.',
    challenges: 'Longer sales decision cycles, custom proposals, content thought leadership, and client onboarding.',
    toolCategories: [
      {
        role: 'Track relationships, not just leads',
        toolSlugs: ['pipedrive'],
        items: [
          {
            toolSlug: 'pipedrive',
            whyFits: "a visual pipeline for tracking prospective clients through what's often a relationship-driven, multi-touch process before they sign.",
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Showcase expertise, not just services',
        toolSlugs: ['webflow'],
        items: [
          {
            toolSlug: 'webflow',
            whyFits: 'case studies, thought-leadership content, and a site that reads as credible to a skeptical buyer benefit from real design control over a template.',
            reviewLinkText: 'Website Builders review'
          }
        ]
      },
      {
        role: 'Stay top of mind between projects',
        toolSlugs: ['activecampaign'],
        items: [
          {
            toolSlug: 'activecampaign',
            whyFits: 'combines light CRM with email, well-suited to nurturing a smaller number of high-value relationships over time rather than blasting a large list.',
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Book consultations without the back-and-forth',
        toolSlugs: ['calendly'],
        items: [
          {
            toolSlug: 'calendly',
            whyFits: 'a booking link on your site or in a proposal removes a full round of scheduling emails before a client even signs.',
            reviewLinkText: 'Scheduling & Booking review'
          }
        ]
      },
      {
        role: 'Keep clients coming back',
        toolSlugs: ['honeybook', 'dubsado'],
        items: [
          {
            toolSlug: 'honeybook',
            whyFits: "proposals, contracts, and automated follow-up sequences mean a client doesn't go quiet after a project ends without you noticing. Prefer more customization to match a specific process? Dubsado is the deeper alternative.",
            reviewLinkText: 'Client Retention & Relationship review'
          }
        ]
      },
      {
        role: 'Know if your site is building trust',
        toolSlugs: ['google-analytics'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: 'see whether case studies and service pages are actually being read, not just visited.',
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Reduce admin around proposals and contracts',
        toolSlugs: ['zapier'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: "connect scheduling, proposal, and invoicing tools so a signed contract doesn't need re-entering the same client details three times.",
            reviewLinkText: 'Ops review'
          }
        ]
      }
    ],
    editorialInsert: {
      heading: 'A note on credibility, beyond the tools',
      body: "Every tool on this page helps you run the business - none of them replace the thing that actually gets a professional services firm hired: proof you've solved this exact problem before. A well-written case study, published where a prospective client will actually find it (your Webflow site's portfolio section is a natural home), does more to convert a skeptical buyer than any piece of software here.\n\nA few things worth doing regardless of which tools you pick:",
      bulletPoints: [
        'Write one detailed case study per major client type you serve, not a generic "About our work" page',
        'Name the specific problem and the specific result - vague testimonials convert far worse than concrete outcomes',
        "Ask for a testimonial immediately after a strong result, while it's fresh - HoneyBook's automated follow-up (above) is a natural trigger point for this ask"
      ]
    }
  },
  {
    id: 'freelancer',
    slug: 'freelancer',
    name: 'Freelancer & Solo',
    eyebrow: 'Business type · Freelancer & solo',
    h1: 'The growth stack for freelancers and solo operators',
    intro: 'Every hour spent on admin is an hour not spent on client work: the tools that matter most here are the ones that give time back, not the ones with the most features. Nothing on this list assumes a team; every pick works for exactly one person.',
    description: 'Every hour spent on admin is an hour not spent on client work: the tools that matter most here are the ones that give time back, not the ones with the most features.',
    challenges: 'Balancing billable client work with lead outreach, keeping administrative tasks minimal, and maintaining a professional web presence.',
    toolCategories: [
      {
        role: 'Track leads without overhead',
        toolSlugs: ['pipedrive'],
        items: [
          {
            toolSlug: 'pipedrive',
            whyFits: "the simplest, fastest CRM in our reviews, with no team features you don't need as a solo operator.",
            reviewLinkText: 'CRM review'
          }
        ]
      },
      {
        role: 'Look credible fast',
        toolSlugs: ['squarespace'],
        items: [
          {
            toolSlug: 'squarespace',
            whyFits: 'a portfolio-quality site without hiring a designer, live in an afternoon.',
            reviewLinkText: 'Get Found Online review'
          }
        ]
      },
      {
        role: 'Book client calls without the back-and-forth',
        toolSlugs: ['calendly'],
        items: [
          {
            toolSlug: 'calendly',
            whyFits: 'send a link instead of trading three emails to find a time. Free tier covers a single operator easily.',
            reviewLinkText: 'Scheduling & Booking review'
          }
        ]
      },
      {
        role: 'Stay in touch without a big list',
        toolSlugs: ['mailchimp'],
        items: [
          {
            toolSlug: 'mailchimp',
            whyFits: "free tier covers occasional outreach to past clients and prospects without needing automation depth you won't use solo.",
            reviewLinkText: 'Email Marketing review'
          }
        ]
      },
      {
        role: 'Keep past clients coming back',
        toolSlugs: ['honeybook'],
        items: [
          {
            toolSlug: 'honeybook',
            whyFits: "proposals, contracts, and automated follow-up in one place, so a past client doesn't go quiet without you noticing. The fastest way to look like a real business without extra admin.",
            reviewLinkText: 'Client Retention & Relationship review'
          }
        ]
      },
      {
        role: 'Know if your site is bringing in work',
        toolSlugs: ['google-analytics'],
        items: [
          {
            toolSlug: 'google-analytics',
            whyFits: 'free, and enough to see if past-client referrals or search traffic are actually turning into inquiries.',
            reviewLinkText: 'Analytics review'
          }
        ]
      },
      {
        role: 'Get hours back from admin',
        toolSlugs: ['zapier'],
        items: [
          {
            toolSlug: 'zapier',
            whyFits: 'automate the repetitive parts (invoices, scheduling, follow-up emails) that eat time better spent on billable work.',
            reviewLinkText: 'Ops & Productivity review'
          }
        ]
      }
    ]
  }
];
