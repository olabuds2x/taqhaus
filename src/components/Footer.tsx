import { Link } from 'react-router-dom'

const certifications = [
  'Google Partner',
  'Meta Business Partner',
  'HubSpot Certified',
  'Klaviyo Partner',
  'Shopify Partner',
]

export default function Footer() {
  return (
    <footer className="bg-noir-lowest pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <img src="/taqhaus-logo.png" alt="TaqHaus" className="h-16 w-auto" />
            <p className="text-ink-secondary text-sm max-w-xs font-body">
              A marketing and business consultancy — strategy first, execution included.
            </p>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {certifications.map(cert => (
                <span
                  key={cert}
                  className="px-2.5 py-1 text-[10px] bg-white/5 text-ink-muted rounded border border-white/5 font-label uppercase tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white text-sm font-headline font-bold mb-5">Services</h5>
            <ul className="space-y-3 text-sm text-ink-secondary font-body">
              <li><Link to="/services#strategy" className="hover:text-white transition-colors">Strategy & Consulting</Link></li>
              <li><Link to="/services#execution" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services#brand" className="hover:text-white transition-colors">Social & Brand</Link></li>
              <li><Link to="/services#web" className="hover:text-white transition-colors">Web Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white text-sm font-headline font-bold mb-5">Company</h5>
            <ul className="space-y-3 text-sm text-ink-secondary font-body">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="hidden lg:block">
            <h5 className="text-white text-sm font-headline font-bold mb-5">Connect</h5>
            <ul className="space-y-3 text-sm text-ink-secondary font-body">
              <li><a href="https://linkedin.com/company/taqhaus" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/taqhaus" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="mailto:info@taqhaus.com" className="hover:text-white transition-colors">info@taqhaus.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-muted tracking-wider uppercase font-label">
          <p>© {new Date().getFullYear()} TaqHaus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
