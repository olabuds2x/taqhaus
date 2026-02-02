import { CALENDLY_URL } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <section className="py-16 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-light/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-light">Contact</span>
          </nav>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Contact</h1>
          <p className="mt-4 text-neutral-light/80 max-w-3xl">
            Prefer email over a call? Share a few details below and we’ll reply within 1 business day. If you’d rather book directly, you can use our Calendly instead.
          </p>
          <div className="mt-6">
            <Button className="rounded-full bg-[#ff5724] hover:bg-[#e04d1f] text-white border-none" asChild>
              <a href={CALENDLY_URL}>Book via Calendly</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

