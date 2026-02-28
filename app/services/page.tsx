import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Home, Users, Layers, Building2 } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Services | Acentra Automation for Real Estate Agents",
  description:
    "Real estate-specific automation packages: Speed-to-Lead Bot, Listing Launch Machine, Past Client Referral Engine, and Full Agent Suite. Starting at $1,200.",
};

const packages = [
  {
    id: "speed-to-lead",
    icon: Zap,
    title: "Speed-to-Lead Bot",
    subtitle: "Never lose a lead to slow response again",
    price: "$1,800",
    priceNote: "one-time setup",
    description:
      "78% of deals go to the first agent who responds. Our Speed-to-Lead Bot responds to every Zillow, Realtor.com, and website lead in under 60 seconds — 24 hours a day, 7 days a week — while you're in showings, sleeping, or with your family.",
    features: [
      "Instant response to Zillow, Realtor.com, and website leads",
      "AI-powered lead qualification conversation",
      "Automatic showing appointment booking",
      "Hot lead instant notification to your phone",
      "CRM auto-entry with lead details and source",
      "Follow-up sequence if no response after 24 hours",
    ],
    tools: ["n8n", "Follow Up Boss / LionDesk", "Calendly", "Claude AI", "Twilio (SMS)"],
    ideal: "Any agent getting online leads from Zillow, Realtor.com, Facebook, or their website",
    cta: "Get Speed-to-Lead Bot",
    statLabel: "78%",
    statDesc: "of deals go to first agent to respond",
    featured: false,
    accentBorder: "border-l-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    statBg: "bg-amber-50 border-amber-100",
    statColor: "text-amber-600",
  },
  {
    id: "listing-launch",
    icon: Home,
    title: "Listing Launch Machine",
    subtitle: "Every new listing launches itself",
    price: "$1,500",
    priceNote: "one-time setup",
    description:
      "Stop spending 3+ hours manually posting to social, emailing your database, and texting VIP clients every time a new listing goes live. One trigger fires it all — automatically.",
    features: [
      "Auto-posts to Facebook, Instagram, and LinkedIn",
      "Email blast to your full database",
      "SMS to VIP buyer and seller lists",
      "Showing request intake form (auto-scheduled)",
      "Open house promotion sequence (3 days prior)",
      "Post-listing performance summary report",
    ],
    tools: ["n8n", "Airtable", "Mailchimp / ActiveCampaign", "Twilio", "Meta API"],
    ideal: "Agents with active listing pipelines who lose hours on manual launch work",
    cta: "Get Listing Launch Machine",
    statLabel: "3+ hrs",
    statDesc: "saved on every single listing launch",
    featured: false,
    accentBorder: "border-l-blue-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    statBg: "bg-blue-50 border-blue-100",
    statColor: "text-blue-600",
  },
  {
    id: "referral-engine",
    icon: Users,
    title: "Past Client Referral Engine",
    subtitle: "Turn your database into a referral machine",
    price: "$1,200",
    priceNote: "one-time setup",
    description:
      "82% of buyers use an agent from a referral or repeat business. Your past clients are your most valuable asset — and most agents ignore them after closing. We build automated sequences that keep you top-of-mind without you lifting a finger.",
    features: [
      "Birthday and home anniversary automated messages",
      "Quarterly market update email sequences",
      "Home value update triggers (auto-personalized)",
      "Referral ask sequences (tasteful, not pushy)",
      "Google review requests at optimal timing",
      "Holiday and seasonal check-in automation",
    ],
    tools: ["n8n", "HubSpot / Follow Up Boss", "Mailchimp", "Airtable"],
    ideal: "Agents with 2+ years of past clients sitting untouched in their CRM",
    cta: "Get Referral Engine",
    statLabel: "82%",
    statDesc: "of buyers come from referrals or past agents",
    featured: false,
    accentBorder: "border-l-emerald-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    statBg: "bg-emerald-50 border-emerald-100",
    statColor: "text-emerald-600",
  },
  {
    id: "full-agent-suite",
    icon: Layers,
    title: "Full Agent Suite",
    subtitle: "Complete automation infrastructure for serious agents",
    price: "$3,500",
    priceNote: "one-time setup",
    description:
      "Every automation in one cohesive system — speed-to-lead, listing launches, and past client referrals — plus a live Automation Dashboard and monthly optimization call. For agents who want to compete like they have a full operations team.",
    features: [
      "Everything in Speed-to-Lead Bot",
      "Everything in Listing Launch Machine",
      "Everything in Past Client Referral Engine",
      "Live Automation Dashboard (monitor all workflows 24/7)",
      "Monthly optimization review call (60 min)",
      "Priority support — 1 business day response",
      "3 months free maintenance included",
      "Brokerage expansion available (see Pricing page)",
    ],
    tools: ["Full stack: n8n, Follow Up Boss, HubSpot, Airtable, Claude AI, Twilio"],
    ideal: "Top-producing agents and team leaders ready to systematize their entire operation",
    cta: "Get the Full Agent Suite",
    statLabel: "All 3",
    statDesc: "automations in one connected system",
    featured: true,
    accentBorder: "border-l-gold",
    iconBg: "bg-gold-muted",
    iconColor: "text-gold",
    statBg: "bg-gold-muted border-gold/20",
    statColor: "text-accent",
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-32">
      {/* Hero — dark navy band */}
      <div className="section-dark relative overflow-hidden pt-32 pb-24">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-gold/10 blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delay={0.05}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Automation Packages
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Named automations built for{" "}
              <span className="text-gold">real estate agents</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Not generic workflows. Real estate-specific systems with names that
              describe exactly what they do — and results you can measure.
            </p>
          </ScrollReveal>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none">
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#FAFAF8" />
          </svg>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8">
        <StaggerContainer staggerDelay={0.12}>
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <StaggerItem key={pkg.id}>
                <div
                  id={pkg.id}
                  className={`card rounded-3xl p-8 md:p-10 border-l-4 ${pkg.accentBorder} ${
                    pkg.featured
                      ? "relative overflow-hidden shadow-glow-gold border-t border-r border-b border-gold/30"
                      : ""
                  }`}
                >
                  {pkg.featured && (
                    <>
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute -top-3 left-10 z-10">
                        <span className="px-3 py-1 rounded-full bg-gradient-gold text-accent text-xs font-bold shadow-sm">
                          Most Popular — Best Value
                        </span>
                      </div>
                    </>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative">
                    {/* Left */}
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${pkg.iconBg} flex items-center justify-center mb-6`}>
                        <Icon size={24} className={pkg.iconColor} />
                      </div>

                      <div className="flex items-end gap-3 mb-2">
                        <span className="text-4xl font-extrabold text-text-primary">
                          {pkg.price}
                        </span>
                        <span className="text-text-muted text-sm mb-1">{pkg.priceNote}</span>
                      </div>

                      <h2 className="font-serif text-2xl font-bold text-text-primary mb-1">
                        {pkg.title}
                      </h2>
                      <p className={`text-sm font-medium mb-5 ${pkg.iconColor}`}>
                        {pkg.subtitle}
                      </p>

                      {/* Stat */}
                      <div className={`flex items-center gap-3 mb-5 rounded-xl border px-4 py-3 ${pkg.statBg}`}>
                        <span className={`text-2xl font-extrabold ${pkg.statColor}`}>{pkg.statLabel}</span>
                        <span className="text-text-secondary text-sm">{pkg.statDesc}</span>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6">{pkg.description}</p>

                      <div className="bg-background rounded-xl border border-border p-4 mb-6">
                        <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                          Ideal for
                        </p>
                        <p className="text-text-secondary text-sm">{pkg.ideal}</p>
                      </div>

                      {/* Tool badges — glass style */}
                      <div className="mb-6">
                        <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                          Tools used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 rounded-full card-glass border text-text-secondary text-xs font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/book-a-call"
                        className={`px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 ${
                          pkg.featured ? "btn-gold" : "btn-primary"
                        }`}
                      >
                        {pkg.cta}
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Right: features */}
                    <div>
                      <p className="text-text-secondary text-sm font-semibold mb-4">
                        What&apos;s included:
                      </p>
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-text-secondary"
                          >
                            <CheckCircle2
                              size={16}
                              className={`${pkg.iconColor} flex-shrink-0 mt-0.5`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <ScrollReveal>
          <div className="section-dark relative overflow-hidden rounded-3xl p-10">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <Building2 size={32} className="text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Not sure which automation to start with?
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Book a free 30-min audit. We&apos;ll look at your lead volume, current
                tools, and biggest time drain — then tell you exactly which system
                will have the fastest ROI for your business.
              </p>
              <Link
                href="/book-a-call"
                className="btn-gold px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
              >
                Book Your Free Audit
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
