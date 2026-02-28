import Link from "next/link";
import { Building2, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Lead Gen Automation", href: "/services#lead-gen" },
    { label: "Admin & Ops Automation", href: "/services#admin-ops" },
    { label: "Full Growth Suite", href: "/services#growth-suite" },
    { label: "Monthly Retainer", href: "/pricing" },
  ],
  Company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Call", href: "/book-a-call" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Wave transition from content to footer */}
      <div className="absolute -top-16 left-0 right-0">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 64L1440 64L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 64Z" fill="#1B2A4A" />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-accent to-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <span className="font-serif font-bold text-lg tracking-tight text-white">Acentra</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                AI-powered automation for real estate agents and brokerages. We
                eliminate manual work so you can focus on what actually grows your
                business.
              </p>
              <div className="flex items-center gap-4 mt-6">
                {[
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Mail, label: "Email", href: "mailto:hello@acentraautomation.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/40 hover:shadow-glow-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                  {section}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="relative text-sm text-white/60 hover:text-gold transition-colors group"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Acentra Automation. All rights
              reserved.
            </p>
            <p className="text-white/30 text-xs">
              Automation built for agents, by automation experts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
