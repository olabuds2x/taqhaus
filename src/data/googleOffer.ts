/**
 * Approved copy for the $99 Google presence package (brief dated 10 Nov 2026).
 * Shared by /google and /google/terms so scope never drifts between them.
 * Do not add ranking, call-volume or review-count promises here.
 */

export const pillars = [
  {
    n: '1',
    title: 'A clearer Google business listing',
    items: [
      'Review and correct eligible business information, service areas, business hours and contact links where needed.',
      'Improve service descriptions and business description using verified owner information.',
      'Review suitable categories and recommend or apply eligible changes with approval.',
      'Add or organize client-supplied, authorized photos where supported.',
    ],
  },
  {
    n: '2',
    title: 'A simple, genuine review-request setup',
    items: [
      'Create direct Google review link and downloadable digital QR asset.',
      'Provide two short neutral customer-review-request templates (SMS/email) and a recommended ask routine.',
      'Draft up to three personalized responses to existing genuine reviews for owner approval.',
      'Give the owner straightforward instructions for continuing to request reviews from actual customers.',
    ],
  },
  {
    // Approved by the owner on 11 Nov 2026 as part of the offer audit.
    n: '3',
    title: 'A 30-day check-up',
    items: [
      'About 30 days after we deliver your completion summary, we review your listing once more.',
      'If details we updated have since changed (for example, through edits suggested by the public or made by Google), we correct them where possible, with your approval.',
      'The check-up needs TaqHaus to still have manager access. If access has been removed, we send you a short summary of what to fix instead.',
      'Changes outside this package’s original scope aren’t included.',
    ],
  },
] as const

export const deliverySummary =
  'Concise before/after screenshots where available and a checklist of completed, pending, and not-applicable changes.'

/**
 * The landing page's plain-language version of the scope above. Each part
 * restates items from `pillars` / `deliverySummary` and must never promise
 * more than they do. `why` names the doubt the part removes.
 */
export const stack = [
  {
    name: 'Listing tune-up',
    what: 'We check and fix your hours, phone, website link and service areas, rewrite your services and description from your notes, check your categories, and add photos you send us.',
    why: 'So people can see what you do, and when you’re open, at a glance.',
  },
  {
    name: 'Review link and QR code',
    what: 'A direct link to your Google review page, plus a digital QR code you can print or show at the counter.',
    why: 'So customers know exactly where to leave a review.',
  },
  {
    name: 'Two ready-to-send review requests',
    what: 'A short text and a short email you can send after every job or visit, plus a simple routine for asking every customer.',
    why: 'So asking takes seconds and never feels pushy.',
  },
  {
    name: 'Replies to your reviews, written for you',
    what: 'We draft replies to up to three of your existing reviews. Nothing is posted until you approve it.',
    why: 'So your listing shows there’s someone behind it who cares.',
  },
  {
    name: 'Before-and-after report',
    what: 'Screenshots where available, and a checklist of what we changed, what’s waiting on Google and what didn’t apply.',
    why: 'So you know exactly what you paid for.',
  },
  {
    name: '30-day check-up',
    what: 'About a month later, we look at your listing again and fix anything we changed that has since been undone.',
    why: 'Because Google and the public can edit your details too.',
    isNew: true,
  },
] as const

/**
 * Real reviews from earlier customers, supplied by the owner on 11 Nov 2026.
 * They predate the $99 package, so the page labels them as Google listing work
 * in general. Wording is verbatim: changes need the reviewer's sign-off.
 */
export const testimonials = [
  {
    quote: [
      'We worked with TaqHaus to improve how our business appeared on Google, and the difference has been noticeable. They helped us update and improve our listing, making it easier for potential customers to find information about our services.',
      'Since then, we’ve been getting more customer enquiries and have seen an increase in new clients. We’re really pleased with the results and would happily recommend them.',
    ],
    name: 'Dave C.',
  },
  {
    quote: [
      'We needed some help improving our Google business listing, and TaqHaus made the whole process straightforward.',
      'They looked at what needed fixing, improved how our services were presented, and took care of the details we hadn’t had time to work on ourselves.',
      'We’ve since seen more interest from potential customers, which has been great for the business. What I appreciated most was how simple they made everything. They knew what they were doing and got the job done.',
    ],
    name: 'Ben W.',
  },
] as const

/** Shown with the testimonials: they describe results, so say plainly that results vary. */
export const testimonialNote =
  'From businesses we helped with their Google listing before this package existed. Results vary, and we don’t guarantee calls or new customers.'

/**
 * A real seasonal reason to act, not a deadline. Hidden automatically after
 * `until`, so it can't go stale if nobody remembers to remove it.
 */
export const seasonalNote = {
  text: 'Holidays coming up? Customers check your hours on Google first. Get them right before the rush.',
  until: '2027-01-01',
} as const

export const notIncluded = [
  'Verification, recovery or reinstatement',
  'Creating a profile from scratch',
  'Paid ads',
  'Website rebuild',
  'Ongoing profile management',
  'Purchased physical NFC/QR hardware',
  'Bulk messages',
  'Guaranteed reviews',
  'Guaranteed leads or rankings',
  'Review posting on behalf of customers',
  'Unlimited revisions',
] as const

/** Shown even when the exclusions list is collapsed: the ones most likely to matter before checkout. */
export const keyExclusions =
  'Creating a new profile, verification or suspension problems, paid ads, and ongoing management.'

export const scopeNote = 'Scope may vary by profile and Google feature availability.'

export const steps = [
  { title: 'Order online.', desc: '$99, paid securely by card. No call needed.' },
  {
    title: 'Tell us about your business.',
    desc: 'Fill in a short form and add us as a manager on your profile. We show you how, and we never need your password.',
  },
  {
    title: 'We do the work.',
    desc: 'We check the details with you and ask before any big change.',
  },
  {
    title: 'See what changed.',
    desc: 'You get your before-and-after report and review tools. About 30 days later, we check your listing again.',
  },
] as const

/** Owner-approved clause (11 Nov 2026) for when access or information never arrives. */
export const accessFailure = [
  'If we cannot start because manager access or required information is not provided, we will contact you up to three times over seven days.',
  'After seven days, you may choose a full refund or an audit-only summary based on the public profile.',
  'The two-business-day delivery target starts only after we receive the required access and information.',
] as const

export const timeline =
  'We aim to complete the agreed work within two business days after we receive access and the information we need. Some changes can take longer to appear on Google, because Google reviews and approves certain updates.'

export const bestFor =
  'Independent small businesses with an existing, verified Google Business Profile the owner controls, that want clearer information on Google or a simple way to ask customers for reviews.'

export const notFitYet = [
  'Suspended, unverified or unclaimed profiles',
  'Multi-location chains needing centralized management',
  'Owners seeking guaranteed rankings',
] as const

export const independenceNote =
  'TaqHaus is an independent marketing services provider and is not affiliated with, endorsed by, or sponsored by Google. Google Business Profiles are free. You own your profile, and our fee covers our professional work.'

export const trademarkNote = 'Google and Google Business Profile are trademarks of Google LLC.'

export type Faq = { q: string; a: string; link?: { to: string; label: string } }

export const faqs: Faq[] = [
  {
    q: 'Do you work for Google?',
    a: 'No. TaqHaus is an independent marketing services provider. Google Business Profiles are free; our fee covers the improvements and setup work.',
  },
  {
    // Wording checked against Google's "Tips to improve your local ranking"
    // (support.google.com/business/answer/7091), 11 Nov 2026.
    q: 'Is this SEO?',
    a: 'It covers the Google Business Profile side of local SEO. Google says complete, accurate business information and reviews help businesses show up in local search results, and that’s what this package works on. Website SEO isn’t included; we offer that separately.',
    link: { to: '/services/seo', label: 'See our SEO service' },
  },
  {
    q: 'Will I rank higher or get more calls?',
    a: 'We don’t guarantee rankings, calls, customers or reviews, because Google and your customers decide those. What we do is fix what customers see on your listing and make asking for reviews easy.',
  },
  {
    q: 'Will you need my password?',
    a: 'No. You add us as a manager on your profile (we show you how), and you can remove us at any time. The profile stays yours.',
  },
  {
    q: 'Can you get reviews for me?',
    a: 'We set up a way to ask real customers for honest feedback. We do not write, buy, incentivize, or selectively request positive reviews.',
  },
  {
    q: 'How fast is delivery?',
    a: 'We aim to complete the agreed work within two business days after we receive access and the information we need. That is when our work is done, not when every change shows on Google: Google reviews and approves certain updates, which can take longer.',
  },
  {
    q: 'What’s the 30-day check-up?',
    a: 'About 30 days after we deliver, we look at your listing again. Google and the public can suggest edits to your details, so if anything we changed has been undone, we fix it with your approval. It’s included in the $99, and it needs us to still be a manager on your profile.',
  },
  {
    q: 'Is it a subscription?',
    a: 'No. $99 USD, one time, and that includes the 30-day check-up. If you want ongoing help after that, we can talk about it, but you never have to.',
  },
  {
    q: 'What if my profile is suspended or needs verification?',
    a: 'Those cases are outside this package. Contact us first for a separate assessment.',
  },
  {
    q: 'What if you can’t do the work?',
    a: 'If your profile isn’t eligible, or we can’t finish for reasons on our side, you get the full $99 back.',
    link: { to: '/google/terms#refunds', label: 'Read the package terms' },
  },
]
