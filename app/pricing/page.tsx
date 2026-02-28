import Link from "next/link";
import { ArrowRight, CheckCircle2, Minus, Building2 } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Pricing | Acentra Automation for Real Estate Agents",
  description:
    "Monthly retainer plans for real estate agents. From $150/mo for solo agents to $1,000/mo for brokerages covering your whole office.",
};

const plans = [
  {
    name: "Agent Monitor",
    price: "$150",
    period: "/mo",
    description:
      "Dashboard access and maintenance for solo agents who already have their automation built.",
    features: [
      { text: "Automation Dashboard access", included: true },
      { text: "1 automation maintained", included: true },
      { text: "Monthly status report", included: true },
      { text: "Email support (5 business days)", included: true },
      { text: "Workflow optimization", included: false },
      { text: "Monthly strategy call", included: false },
      { text: "Priority support", included: false },
      { text: "Additional automations", included: false },
    ],
    cta: "Get Started",
    note: "Best for: Agents with one active automation",
    featured: false,
  },
  {
    name: "Agent Growth",
    price: "$350",
    period: "/mo",
    description:
      "Full maintenance of all 3 agent automations with monthly reporting, optimization, and strategy.",
    features: [
      { text: "Automation Dashboard access", included: true },
      { text: "Up to 3 automations maintained", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Email support (2 business days)", included: true },
      { text: "Monthly workflow optimization", included: true },
      { text: "Monthly strategy call (30 min)", included: true },
      { text: "Priority support", included: false },
      { text: "Team/brokerage coverage", included: false },
    ],
    cta: "Start Agent Growth",
    note: "Best for: Active agents running Speed-to-Lead + 1-2 other automations",
    featured: true,
  },
  {
    name: "Top Producer",
    price: "$700",
    period: "/mo",
    description:
      "Everything maintained, continuously optimized, and a dedicated strategy session each month.",
    features: [
      { text: "Automation Dashboard access", included: true },
      { text: "Unlimited automations maintained", included: true },
      { text: "Weekly performance reports", included: true },
      { text: "Priority support (same business day)", included: true },
      { text: "Continuous workflow optimization", included: true },
      { text: "Monthly strategy call (60 min)", included: true },
      { text: "Priority support", included: true },
      { text: "Team/brokerage coverage", included: false },
    ],
    cta: "Start Top Producer",
    note: "Best for: High-volume agents and team leaders",
    featured: false,
  },
];

const faqs = [
  {
    q: "Do I need to buy a setup package first?",
    a: "Yes — the retainer plans are for maintaining and optimizing automations that are already built. You'll start with one of our setup packages (starting at $1,200), then add a retainer to keep it running and improving.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All retainer plans are month-to-month with no long-term contracts. Cancel with 30 days' notice and keep access until your billing period ends.",
  },
  {
    q: "What does 'dashboard access' include?",
    a: "A real-time view of all your active automations — lead response logs, listing launch history, referral sequence status, success/failure rates, and monthly performance metrics. Available 24/7 on any device.",
  },
  {
    q: "How does the Brokerage Plan work?",
    a: "We build and maintain automation for your entire office — every agent gets a Speed-to-Lead Bot, Listing Launch Machine, and Referral Engine under one brokerage account. Custom pricing based on office size, typically $500–$1,000/mo. Book a call for a custom quote.",
  },
];

export default function PricingPage() {
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-gold/10 blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delay={0.05}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Retainer Pricing
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Keep your automations{" "}
              <span className="text-gold">running and growing</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              After your initial setup, choose a monthly plan to maintain,
              monitor, and continuously improve your automation stack.
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Agent plans */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" staggerDelay={0.1}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`card rounded-2xl p-6 flex flex-col relative h-full transition-transform ${
                  plan.featured
                    ? "scale-[1.03] shadow-glow-gold border-gold/40"
                    : ""
                }`}
              >
                {/* Gold gradient top bar for featured */}
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-gold" />
                )}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-gradient-gold text-accent text-xs font-bold whitespace-nowrap shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-text-primary font-bold text-lg mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-4xl font-extrabold ${plan.featured ? "text-accent" : "text-text-primary"}`}>
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2.5 text-sm">
                      {feature.included ? (
                        <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                      ) : (
                        <Minus size={15} className="text-text-muted flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-text-secondary" : "text-text-muted"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <Link
                    href="/book-a-call"
                    className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.featured
                        ? "btn-primary"
                        : "border border-border hover:border-gold/40 text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {plan.featured ? (
                      <>
                        {plan.cta} <ArrowRight size={14} />
                      </>
                    ) : (
                      <>{plan.cta}</>
                    )}
                  </Link>
                  <p className="text-text-muted text-xs text-center">{plan.note}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Brokerage Plan — navy dark band */}
        <ScrollReveal>
          <div className="section-dark rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06] rounded-3xl"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Building2 size={24} className="text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">Brokerage Plan</h3>
                    <span className="px-2 py-0.5 rounded-full border border-gold/40 text-gold text-xs font-semibold">New</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white mb-2">
                    $500–$1,000
                    <span className="text-white/50 text-sm font-normal ml-1">/mo · custom quote</span>
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                    Automation for your entire office. Every agent gets a Speed-to-Lead Bot,
                    Listing Launch Machine, and Referral Engine — all managed under one brokerage
                    account. One bill, all agents automated. Custom pricing based on office size.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["All agents covered", "Brokerage-level dashboard", "White-labeled with your brand", "Priority support"].map((f) => (
                      <span key={f} className="flex items-center gap-1.5 text-xs text-white/70">
                        <CheckCircle2 size={12} className="text-gold" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/book-a-call"
                className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
              >
                Get Brokerage Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing flow */}
        <ScrollReveal>
          <div className="bg-white border border-border rounded-2xl p-8 mb-16 shadow-sm">
            <p className="text-text-muted text-xs uppercase tracking-widest text-center mb-8">How it works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-muted text-accent text-sm font-bold mb-3">1</div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Setup</p>
                <p className="text-2xl font-bold text-text-primary mb-1">From $1,200</p>
                <p className="text-text-secondary text-sm">One-time build fee</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 text-gold">
                  <div className="h-px w-8 bg-gold/40" />
                  <ArrowRight size={20} className="text-gold" />
                  <div className="h-px w-8 bg-gold/40" />
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-muted text-gold text-sm font-bold mb-3">2</div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Retainer</p>
                <p className="text-2xl font-bold text-text-primary mb-1">From $150/mo</p>
                <p className="text-text-secondary text-sm">Ongoing maintenance & growth</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-text-primary text-center mb-10">
              Pricing FAQ
            </h2>
          </ScrollReveal>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="card rounded-xl p-6 border-l-4 border-l-transparent hover:border-l-gold/50 transition-all duration-300">
                  <h3 className="text-text-primary font-semibold mb-3 text-sm">{faq.q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
