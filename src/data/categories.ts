import { Category } from '../types';
import { TOOLS } from './tools';

export const CATEGORIES: Category[] = [
  {
    id: 'crm',
    slug: 'crm',
    name: 'CRM Software',
    eyebrow: 'SALES & PIPELINE MANAGEMENT',
    h1: 'The Best CRM Software for Growing Small Businesses',
    intro: 'A good CRM should never feel like a data-entry chore. We evaluated top platforms based on setup speed, pricing transparency, customer support responsiveness, and pipeline scalability so you can close deals without operational bloat.',
    criteria: [
      { name: 'Setup', definition: 'Can a team launch pipelines and import contact lists in under 60 minutes?' },
      { name: 'Pricing', definition: 'No hidden contact limits, sudden seat price jumps, or locked basic features.' },
      { name: 'Support', definition: 'Responsive live chat, phone, or human ticketing under 10-minute response averages.' },
      { name: 'Scale', definition: 'Handles activity automations, custom fields, and growing deal volumes smoothly.' }
    ],
    oneThingCallout: {
      heading: 'If you only do one thing: Pick Pipedrive for outbound deal teams, or HubSpot for free inbound lead capture.',
      body: 'Do not overthink CRM selection on day one. If your business actively pitches clients and manages sales pipelines, Pipedrive gives you the cleanest visual workflow with zero contact limits. If you rely on website forms and inbound content inquiries, start with HubSpot CRM’s free tier.',
      toolSlug: 'pipedrive'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'crm')
  },
  {
    id: 'get-found-online',
    slug: 'get-found-online',
    name: 'Get Found Online',
    eyebrow: 'Category · Get found online',
    h1: 'Get found by people looking for you',
    intro: '"No one finds me online" is actually three separate problems that happen to share one symptom. You might not have a real website yet. You might have one, but it doesn\'t show up in search. Or you might have both, but you\'re invisible on the local listings people check before they ever visit your site. Each of the three sections below fixes one of those: most businesses eventually need all three, but start with whichever is actually missing for you.',
    subsections: [
      {
        id: 'website-builders',
        title: 'Website Builders',
        framing: 'If people can\'t find you searching, you don\'t have a marketing problem yet - you have a website problem. The three builders below cover "I need this live by Friday" through "I want full design control," scored on the same four criteria so you can see exactly where each one wins.',
        criteria: [
          { name: 'Setup speed', definition: 'Time to a live, presentable site with no code' },
          { name: 'Pricing', definition: 'Real starting cost including the domain/hosting, no bait-and-switch renewal jump' },
          { name: 'Design flexibility', definition: 'How far you can customize before hitting a hard wall' },
          { name: 'Built-in SEO tools', definition: 'Meta tags, sitemaps, page speed handled without a plugin' }
        ],
        oneThingCallout: {
          heading: 'If you need a site live this week that doesn\'t look like a template someone recognizes: Squarespace.',
          body: 'It\'s the only one of the three where "good enough on day one" and "still looks good in a year" are the same answer.',
          toolSlug: 'squarespace'
        },
        tools: TOOLS.filter(t => ['squarespace', 'webflow', 'wix'].includes(t.slug))
      },
      {
        id: 'seo-tools',
        title: 'SEO Tools',
        framing: 'Your site exists, but it\'s not showing up when someone searches. These tools find out why and tell you what to fix.',
        criteria: [
          { name: 'Setup speed', definition: 'time to your first real, actionable finding (not just a connected dashboard)' },
          { name: 'Pricing', definition: 'real starting cost for a single site/small business use case, not agency-tier pricing' },
          { name: 'Actionability', definition: 'does it tell you exactly what to fix, or just show you a score with no next step' },
          { name: 'Keyword/competitor data depth', definition: 'how much you can see about what\'s actually working for competitors ranking above you' }
        ],
        oneThingCallout: {
          heading: 'If you\'ve never checked your site\'s SEO health before: Ahrefs Webmaster Tools, free tier.',
          body: 'It\'ll surface real, fixable technical issues (broken links, missing meta tags, slow pages) before you spend money on anything deeper.',
          toolSlug: 'ahrefs-webmaster-tools'
        },
        tools: TOOLS.filter(t => ['ahrefs-webmaster-tools', 'semrush', 'moz-pro'].includes(t.slug))
      },
      {
        id: 'local-listings',
        title: 'Local Listings',
        framing: 'Most "near me" searches never reach your website at all - they stop at a map listing or a review page. This is about winning that step.',
        criteria: [
          { name: 'Setup speed', definition: 'time to a live, complete listing' },
          { name: 'Pricing', definition: 'cost to claim and maintain the core listing (most of this category is free)' },
          { name: 'Reach', definition: 'how many of the places people actually search (Google, Yelp, Bing) it covers' },
          { name: 'Review management', definition: 'how easily you can respond to and monitor reviews from one place' }
        ],
        oneThingCallout: {
          heading: 'Claim your Google Business Profile today if you haven\'t already.',
          body: 'It\'s free, takes under an hour, and directly determines whether you show up when someone searches "[your service] near me."',
          toolSlug: 'google-business-profile'
        },
        tools: TOOLS.filter(t => ['google-business-profile', 'yelp-for-business', 'bing-places'].includes(t.slug))
      }
    ],
    tools: TOOLS.filter(t => t.categorySlug === 'get-found-online')
  },
  {
    id: 'email-marketing',
    slug: 'email-marketing',
    name: 'Email & SMS Marketing',
    eyebrow: 'Category · Email & SMS marketing',
    h1: 'Stay in front of customers without doing it manually every week',
    intro: 'Posting on social media when you remember to isn\'t a marketing plan. The three tools below automate the follow-up, the abandoned-cart nudge, and the "haven\'t heard from you in a while" email - scored on the same four criteria so you can pick based on how much automation you actually need, not just brand recognition.',
    criteria: [
      { name: 'Setup speed', definition: 'time to send your first automated sequence, not just a one-off email' },
      { name: 'Pricing', definition: 'real starting cost at a small list size (under 1,000 contacts), no forced overage jumps' },
      { name: 'Automation depth', definition: 'how far you can branch/trigger sequences beyond "send on signup"' },
      { name: 'Deliverability & support', definition: 'inbox placement track record + response time when a campaign breaks' }
    ],
    oneThingCallout: {
      heading: 'If you\'re losing sales to abandoned carts or browsers who never come back: Klaviyo.',
      body: 'That\'s a revenue problem, not a "send more newsletters" problem, and it\'s the only one of the three built specifically to catch it.',
      toolSlug: 'klaviyo'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'email-marketing')
  },
  {
    id: 'loyalty',
    slug: 'loyalty',
    name: 'Loyalty & Rewards',
    eyebrow: 'Category · Loyalty & rewards',
    h1: 'Turn one-time buyers into repeat customers',
    intro: 'Getting a new customer costs far more than keeping one. The three tools below give people a reason to come back - points, rewards, or simply a nudge at the right moment. This category is built specifically for e-commerce and in-person businesses, where a purchase is the thing that repeats. If you\'re a service business or a B2B SaaS company, a rewards program isn\'t the right mechanism - see the two boxes below instead.',
    scopeRedirects: [
      {
        boldPrefix: 'Running a service business or agency?',
        text: ' Retention for you is about consistent follow-up, not points - see ',
        linkText: 'Client Retention & Relationship',
        targetCategorySlug: 'client-retention',
        suffix: ' instead.'
      },
      {
        boldPrefix: 'Running a SaaS product?',
        text: ' Retention for you is about onboarding and ongoing engagement, not purchases - see ',
        linkText: 'Onboarding & Community',
        targetCategorySlug: 'onboarding-community',
        suffix: ' instead.'
      }
    ],
    criteria: [
      { name: 'Setup speed', definition: 'time to a live, working loyalty program, no dev help required' },
      { name: 'Pricing', definition: 'real starting cost at a small order/customer volume, no hidden per-redemption fees' },
      { name: 'Ease for customers', definition: 'how much friction there is for a customer to actually earn and use rewards' },
      { name: 'Platform fit', definition: 'how well it plugs into what you already run (e-commerce platform, POS, or neither)' }
    ],
    oneThingCallout: {
      heading: 'If you\'re an online store and customers buy once and never return: Smile.io.',
      body: 'It\'s live the same day and doesn\'t require you to also adopt a reviews platform or SMS tool you didn\'t ask for.',
      toolSlug: 'smile-io'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'loyalty')
  },
  {
    id: 'client-retention',
    slug: 'client-retention',
    name: 'Client Retention & Relationship',
    eyebrow: 'Category · Client retention & relationship',
    h1: 'Keep clients coming back without a rewards program',
    intro: 'Professional services and freelance work don\'t run on repeat purchases - they run on relationships. A client doesn\'t "buy again," they refer you, renew a contract, or come back for the next project, and all three depend on consistent follow-up, not a points system. The three tools below manage that relationship end-to-end: proposals, contracts, scheduling, and the follow-up that happens after the invoice is paid.',
    criteria: [
      { name: 'Setup speed', definition: 'time to send your first proposal/contract through the system, not just create an account' },
      { name: 'Pricing', definition: 'real starting cost for a solo operator or small team, not agency-tier pricing' },
      { name: 'Client-facing polish', definition: 'how professional the client\'s experience feels (portal, proposals, communication), since that experience is part of what gets you referred' },
      { name: 'All-in-one coverage', definition: 'how much of the proposal → contract → invoice → follow-up chain it actually covers, versus needing separate tools stitched together' }
    ],
    oneThingCallout: {
      heading: 'If you\'re sending proposals and invoices through separate tools (or email and PayPal) right now: HoneyBook.',
      body: 'It\'s the fastest way to look like a business with a real system, not someone piecing it together.',
      toolSlug: 'honeybook'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'client-retention')
  },
  {
    id: 'onboarding-community',
    slug: 'onboarding-community',
    name: 'Onboarding & Community',
    eyebrow: 'Category · Onboarding & community',
    h1: 'Stop losing users after they sign up',
    intro: 'SaaS retention isn\'t about rewards or relationship management - it\'s about whether someone figures out your product fast enough to stick around, and whether they have somewhere to go once they\'re a regular user. The two sections below cover both halves: getting people to their first real "aha" moment, and giving them a reason to stay engaged after that.',
    tools: TOOLS.filter(t => t.categorySlug === 'onboarding-community'),
    subsections: [
      {
        id: 'onboarding',
        title: 'Onboarding & Product Adoption',
        framing: 'If a trial user signs up and never comes back, the problem usually isn\'t the product - it\'s that they never got far enough to see why it\'s worth staying for.',
        criteria: [
          { name: 'Setup speed', definition: 'time to your first live in-app walkthrough or tooltip flow' },
          { name: 'Pricing', definition: 'real starting cost at a small monthly active user count, not enterprise-tier pricing' },
          { name: 'No-code flexibility', definition: 'how much a PM or founder can build without pulling in an engineer' },
          { name: 'Behavioral targeting', definition: 'whether flows can trigger based on what a user actually does, not just when they sign up' }
        ],
        oneThingCallout: {
          heading: 'If trial users sign up and disappear before ever using your core feature: Appcues.',
          body: 'A guided walkthrough to that first "aha" moment is the single highest-leverage fix for early-stage SaaS churn.',
          toolSlug: 'appcues'
        },
        tools: TOOLS.filter(t => ['appcues', 'pendo', 'userpilot'].includes(t.slug))
      },
      {
        id: 'community',
        title: 'Community Platforms',
        framing: 'Once someone\'s past onboarding, a place to ask questions, share how they use your product, and see other users solves a different kind of churn: the quiet kind, where people just drift away with no one checking in.',
        criteria: [
          { name: 'Setup speed', definition: 'time to a live, usable community space' },
          { name: 'Pricing', definition: 'real starting cost at a small member count' },
          { name: 'Engagement tools', definition: 'built-in features (events, courses, gamification) that keep a community active, not just present' },
          { name: 'Branding control', definition: 'how much the space feels like your product\'s community versus a generic chat server' }
        ],
        oneThingCallout: {
          heading: 'If you\'re ready to invest in community as a real retention channel, not just a support inbox alternative: Circle.',
          body: 'It\'s the only one of the three built to feel like part of your product rather than a separate chat app members forget to open.',
          toolSlug: 'circle'
        },
        tools: TOOLS.filter(t => ['circle', 'discord', 'slack-community'].includes(t.slug))
      }
    ]
  },
  {
    id: 'analytics',
    slug: 'analytics',
    name: 'Analytics',
    eyebrow: 'Category · Analytics',
    h1: 'Find out what\'s actually working before you spend more on it',
    intro: 'Guessing which marketing channel or page is driving results means you\'re probably wasting money on the ones that aren\'t. The three tools below range from "free and essential" to "watch exactly what visitors do," scored on the same four criteria so you know which one matches the question you\'re actually trying to answer.',
    criteria: [
      { name: 'Setup speed', definition: 'time to start collecting usable data, install to first insight' },
      { name: 'Pricing', definition: 'real starting cost at low traffic volume, no forced enterprise tier for basics' },
      { name: 'Clarity of insight', definition: 'how easily a non-analyst can find an answer, not just a dashboard full of numbers' },
      { name: 'Privacy compliance', definition: 'how much cookie/consent work is required to use it legally' }
    ],
    oneThingCallout: {
      heading: 'If you only do one thing: Install Google Analytics (GA4) even if you find it confusing at first.',
      body: 'It\'s the free baseline every other growth tool on this site (ads, email, SEO) assumes you already have connected. Add Microsoft Clarity alongside it once you want to see why a page isn\'t converting, not just that it isn\'t.',
      toolSlug: 'google-analytics'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'analytics')
  },
  {
    id: 'ops',
    slug: 'ops',
    name: 'Ops & Productivity',
    eyebrow: 'Category · Ops & productivity',
    h1: 'Stop losing hours to work that shouldn\'t need a human',
    intro: 'If you\'re manually copying data between tools, chasing invoices, or re-typing the same information twice, that\'s time not spent on growth. The three tools below cover the range from "connect the tools you already have" to "run the whole business from one place," scored on the same four criteria so you know how much change you\'re actually signing up for.',
    criteria: [
      { name: 'Setup speed', definition: 'time to your first working automation or board, no dev help required' },
      { name: 'Pricing', definition: 'real starting cost at small team size, no forced per-seat jump at low volumes' },
      { name: 'Learning curve', definition: 'how much the team needs to change existing habits to adopt it' },
      { name: 'Integration reach', definition: 'how many of the tools you already use it can actually connect to' }
    ],
    oneThingCallout: {
      heading: 'If you\'re manually re-entering the same information into two or three different tools every week: Zapier.',
      body: 'It\'s the fastest fix for the single most common time-waste in this category, and it doesn\'t require replacing anything you already use.',
      toolSlug: 'zapier'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'ops')
  },
  {
    id: 'scheduling-booking',
    slug: 'scheduling-booking',
    name: 'Scheduling & Booking',
    eyebrow: 'Category · Scheduling & booking',
    h1: 'Stop the back-and-forth to get on someone\'s calendar',
    intro: '"What time works for you?" followed by five more emails is time you don\'t get back. The three tools below let people book directly into your real availability, no phone tag, no double-bookings, no manual reminders - scored on the same four criteria so you can see how much automation you actually need versus how much you\'re paying for.',
    criteria: [
      { name: 'Setup speed', definition: 'time to a live, shareable booking link' },
      { name: 'Pricing', definition: 'real starting cost for a single person or small team, not enterprise scheduling' },
      { name: 'Calendar sync reliability', definition: 'how cleanly it prevents double-bookings across your real calendar(s)' },
      { name: 'Client-facing polish', definition: 'how professional the booking experience looks and feels to the person booking' }
    ],
    oneThingCallout: {
      heading: 'If you\'re currently emailing back and forth to find a meeting time: Calendly.',
      body: 'It\'s the fastest fix, most people already recognize the booking flow, and the free tier covers a genuinely usable amount for a solo operator.',
      toolSlug: 'calendly'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'scheduling-booking')
  },
  {
    id: 'reservation-management',
    slug: 'reservation-management',
    name: 'Reservations & Table Management',
    eyebrow: 'Category · Reservations & table management',
    h1: 'Stop losing tables to no-shows and phone tag',
    intro: 'For a restaurant, this isn\'t one tool among several - it\'s close to the whole game. A diner deciding between you and the place next door often picks whichever one lets them book in two taps. The three tools below handle reservations, waitlists, and table turnover, scored on the same four criteria so you can see which fits your size and style of service.',
    criteria: [
      { name: 'Setup speed', definition: 'time to a live, bookable reservation page' },
      { name: 'Pricing', definition: 'real starting cost including any per-cover or per-reservation fees, not just the base subscription' },
      { name: 'Discovery reach', definition: 'whether the tool also puts you in front of new diners searching, not just booking with people who already know you' },
      { name: 'Table/floor management', definition: 'how well it handles walk-ins, waitlists, and real-time table turnover, not just online bookings' }
    ],
    oneThingCallout: {
      heading: 'If you\'re not on any reservation platform yet and diners currently have to call: OpenTable.',
      body: 'The discovery reach alone - people searching for a table nearby who\'ve never heard of you - usually pays for the per-cover fees on its own.',
      toolSlug: 'opentable'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'reservation-management')
  },
  {
    id: 'inventory-shipping',
    slug: 'inventory-shipping',
    name: 'Inventory & Shipping',
    eyebrow: 'Category · Inventory & shipping',
    h1: 'Stop manually printing labels and updating stock counts by hand',
    intro: 'Zapier connects the tools you already have, but once you\'re shipping physical products, you need something purpose-built for the actual logistics: pulling orders from every channel you sell on, printing the right label at the right rate, and keeping stock counts accurate without you touching a spreadsheet. The three tools below handle that specifically, scored on the same four criteria so you can see how much you\'re actually paying for versus what a general ops tool like Zapier could stretch to cover.',
    criteria: [
      { name: 'Setup speed', definition: 'time to your first order actually shipped through the platform' },
      { name: 'Pricing', definition: 'real starting cost at low monthly order volume, no forced enterprise tier' },
      { name: 'Carrier & marketplace integrations', definition: 'how many shipping carriers and sales channels (Shopify, Amazon, Etsy) it connects to out of the box' },
      { name: 'Fulfillment model fit', definition: 'whether it supports self-fulfillment, third-party logistics (3PL), or both' }
    ],
    oneThingCallout: {
      heading: 'If you\'re printing shipping labels one at a time from each sales channel\'s own dashboard: ShipStation.',
      body: 'Pulling every order into one queue with batch label printing is the single biggest time-saver in this category.',
      toolSlug: 'shipstation'
    },
    tools: TOOLS.filter(t => t.categorySlug === 'inventory-shipping')
  }
];
