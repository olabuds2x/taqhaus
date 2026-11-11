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
] as const

export const deliverySummary =
  'Concise before/after screenshots where available and a checklist of completed, pending, and not-applicable changes.'

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
  { title: 'Buy the $99 package.', desc: 'Secure checkout; no consultation required.' },
  {
    title: 'Share your business details and grant manager access.',
    desc: "Fill in a short onboarding form and follow clear invitation instructions. We never ask for your Google password.",
  },
  {
    title: 'We prepare and implement approved fixes.',
    desc: 'TaqHaus checks the details and requests approval for material changes.',
  },
  { title: 'See what changed.', desc: 'Receive a concise completion summary and reusable review-request materials.' },
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
  'Existing, owner-controlled, verified Google Business Profiles for independent US home-service businesses that need clearer service information or a simple review-request process.'

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
    q: 'Will I rank higher or receive more calls?',
    a: 'We improve eligible information and the review-request process, but do not guarantee rankings, calls, customers, or review volume.',
  },
  {
    q: 'Will you need my password?',
    a: 'No. You retain ownership. We will explain how to invite TaqHaus as a manager where appropriate.',
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
    q: 'Is it a subscription?',
    a: 'No. $99 USD is one time. Ongoing help may be offered separately but is not required.',
  },
  {
    q: 'What if my profile is suspended or needs verification?',
    a: 'Those cases are outside this package. Contact us first for a separate assessment.',
  },
  {
    q: 'What happens if you cannot provide the service?',
    a: 'Our package terms set out eligibility and what happens if we cannot complete the work.',
    link: { to: '/google/terms#refunds', label: 'Read the package terms' },
  },
]
