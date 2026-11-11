import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'
import { BUSINESS } from '@/lib/googleOffer'

const LAST_UPDATED = '11 November 2026'

/**
 * Describes what the site and the $99 checkout actually do with personal
 * information. If a new tool is added (analytics, forms, email marketing),
 * update the matching section here before it goes live.
 */
export default function Privacy() {
  const mail = <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
  return (
    <div className="tq-editorial tq-offer">
      <SEO
        title="Privacy Policy | TaqHaus"
        description="How TaqHaus collects, uses and protects personal information on taqhaus.com and when you buy or use our services."
        canonical="/privacy"
      />
      <SiteNav />

      <main id="main" className="go-doc">
        <div className="wrap go-doc-wrap">
          <header className="go-doc-head">
            <span className="eyebrow">Privacy</span>
            <h1>Privacy <em>policy</em></h1>
            <p>
              This policy explains how {BUSINESS.legalName} (&ldquo;TaqHaus&rdquo;, &ldquo;we&rdquo;) handles
              personal information when you visit taqhaus.com, contact us, or buy our services. Last updated {LAST_UPDATED}.
            </p>
          </header>

          <section aria-labelledby="p-collect">
            <h2 id="p-collect">What we collect</h2>
            <ul>
              <li><strong>When you contact us:</strong> your name, email address and anything you choose to tell us.</li>
              <li><strong>When you book a call:</strong> bookings are made through Calendly, which shares your name, email and booking answers with us.</li>
              <li>
                <strong>When you buy a package:</strong> payment is handled by Stripe. Your card details go to Stripe, not to us. We
                receive your email address, name, billing country and postal code, and the payment status.
              </li>
              <li>
                <strong>When you complete an order form:</strong> your business name, Google Business Profile link, website,
                service area, services, business hours, how you ask for reviews today, and a contact name and email.
              </li>
              <li>
                <strong>When you give us access to your Google Business Profile:</strong> we can see and edit the profile&rsquo;s
                information as a Manager. We never ask for your Google password.
              </li>
              <li>
                <strong>When you browse the site:</strong> our hosting provider (Vercel) processes technical data such as your IP
                address and browser type to deliver pages and keep the site secure. Fonts are loaded from Google Fonts, which also
                receives your IP address.
              </li>
            </ul>
          </section>

          <section aria-labelledby="p-cookies">
            <h2 id="p-cookies">Cookies and browser storage</h2>
            <p>
              We don&rsquo;t use advertising cookies, and we don&rsquo;t currently use analytics tools. Some pages store small
              items in your browser so they work properly: a draft of an order form so you don&rsquo;t lose your answers,
              the link to your order, and campaign tags (such as utm_source) from the link you arrived on. These stay on your
              device, and you can clear them at any time in your browser settings.
            </p>
          </section>

          <section aria-labelledby="p-use">
            <h2 id="p-use">How we use it</h2>
            <ul>
              <li>To reply to you and to provide the services you ask for.</li>
              <li>To take payment, issue receipts and handle refunds.</li>
              <li>To contact you about your order or enquiry.</li>
              <li>To keep business and tax records we are required to keep.</li>
              <li>To understand which campaigns bring people to our site, using campaign tags rather than personal details.</li>
            </ul>
            <p>We don&rsquo;t sell your personal information, and we don&rsquo;t use it for advertising.</p>
          </section>

          <section aria-labelledby="p-share">
            <h2 id="p-share">Who we share it with</h2>
            <p>We share personal information only with service providers that help us run the business, and only as needed:</p>
            <ul>
              <li><strong>Stripe</strong>: payments and order records</li>
              <li><strong>Vercel</strong>: website hosting</li>
              <li><strong>Calendly</strong>: call bookings</li>
              <li><strong>Our email provider</strong>: sending order confirmations and notifications</li>
              <li><strong>Google</strong>: fonts on this site and, with your permission, your Business Profile</li>
            </ul>
            <p>
              We may also disclose information if the law requires it. Some of these providers store data in other countries,
              including the United States, where it may be accessed under local law.
            </p>
          </section>

          <section aria-labelledby="p-keep">
            <h2 id="p-keep">How long we keep it</h2>
            <p>
              We keep personal information only as long as we need it for the purposes above, and for as long as we must keep
              business and tax records. When you remove TaqHaus as a Manager on your Google Business Profile, our access to it
              ends immediately.
            </p>
          </section>

          <section aria-labelledby="p-rights">
            <h2 id="p-rights">Your choices and rights</h2>
            <p>
              You can ask to see, correct or delete the personal information we hold about you, or withdraw your consent to
              us using it, subject to any records we must keep by law. Depending on where you live, you may have other rights
              too. Email {mail} and we&rsquo;ll respond. If you&rsquo;re in Canada and unhappy with our response, you can contact
              the Office of the Privacy Commissioner of Canada.
            </p>
          </section>

          <section aria-labelledby="p-security">
            <h2 id="p-security">Security</h2>
            <p>
              We use reputable providers and limit who can access personal information. No method of sending or storing data
              is completely secure, but we take reasonable steps to protect what you share with us.
            </p>
          </section>

          <section aria-labelledby="p-contact">
            <h2 id="p-contact">Contact</h2>
            <p>
              Questions about this policy or your information: {mail}.
            </p>
            <p>
              Buying the Google presence package? See the <Link to="/google/terms">package terms</Link> as well.
            </p>
          </section>

          <p className="go-doc-foot">We may update this policy. The date at the top shows when it last changed.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
