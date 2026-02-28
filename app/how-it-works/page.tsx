import Link from "next/link";
import { ArrowRight, Search, Wrench, BarChart2, RefreshCw, Building2 } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "How It Works | Acentra Automation",
  description:
    "Our simple 4-step process: audit, build, monitor, optimize. Custom automation delivered in 10 business days.",
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Automation Audit",
    duration: "30 minutes",
    description:
      "We start with a deep-dive call to understand your business operations. We map out where time is being lost, what tasks are repetitive, and which processes are blocking your growth.",
    deliverable: "You receive a custom Automation Roadmap document — even if you don't hire us.",
    details: [
      "Review your current workflow and tools",
      "Identify top 3–5 automation opportunities",
      "Estimate time saved per week",
      "Recommend the right package",
    ],
    accent: "text-amber-500",
    iconBg: "bg-amber-50",
    circleGradient: "from-amber-400 to-yellow-500",
    deliverableBg: "bg-amber-50 border-amber-200",
    deliverableText: "text-amber-700",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Custom Build",
    duration: "5–10 business days",
    description:
      "Our team builds your automation workflows from scratch using the right tools for your business — n8n, HubSpot, Airtable, Claude AI, and more. Every workflow is tested before going live.",
    deliverable: "You review and approve the workflows in a demo call before anything touches your real data.",
    details: [
      "Architecture design and tool selection",
      "Workflow development and testing",
      "Integration with your existing tools",
      "Demo call and client approval",
    ],
    accent: "text-blue-500",
    iconBg: "bg-blue-50",
    circleGradient: "from-blue-400 to-indigo-500",
    deliverableBg: "bg-blue-50 border-blue-200",
    deliverableText: "text-blue-700",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Go Live + Dashboard Access",
    duration: "Day 1 of automation",
    description:
      "Once approved, your workflows go live. You get access to your personal Automation Dashboard — a real-time view of every automation running in your business.",
    deliverable: "Your automation stack is live and your dashboard is accessible 24/7.",
    details: [
      "Workflows deployed to production",
      "Dashboard setup and walkthrough",
      "Alert configuration (failures, anomalies)",
      "Documentation of all workflows",
    ],
    accent: "text-emerald-500",
    iconBg: "bg-emerald-50",
    circleGradient: "from-emerald-400 to-teal-500",
    deliverableBg: "bg-emerald-50 border-emerald-200",
    deliverableText: "text-emerald-700",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Monitor & Optimize",
    duration: "Ongoing (retainer)",
    description:
      "Automation isn't set-and-forget forever. We monitor performance, fix edge cases as they appear, and continuously improve your workflows as your business evolves.",
    deliverable: "Monthly reports showing time saved, leads generated, and revenue attributed.",
    details: [
      "24/7 workflow monitoring",
      "Proactive issue resolution",
      "Monthly optimization review",
      "Workflow additions as business grows",
    ],
    accent: "text-purple-500",
    iconBg: "bg-purple-50",
    circleGradient: "from-purple-400 to-violet-500",
    deliverableBg: "bg-purple-50 border-purple-200",
    deliverableText: "text-purple-700",
  },
];

const tools = [
  { name: "n8n", category: "Workflow Automation", color: "#EA4B71", description: "The backbone of our automation infrastructure. Connects everything." },
  { name: "HubSpot", category: "CRM & Marketing", color: "#FF7A59", description: "Lead tracking, pipeline management, and marketing sequences." },
  { name: "Airtable", category: "Database & Ops", color: "#18BFFF", description: "Structured data, client records, and ops workflows." },
  { name: "Claude AI", category: "AI Processing", color: "#1B2A4A", description: "Intelligent content generation, email personalization, and decision-making." },
  { name: "Voiceflow", category: "Chatbot Builder", color: "#7C3AED", description: "Conversational AI chatbots for client-facing automation." },
  { name: "Notion", category: "Knowledge Base", color: "#374151", description: "Documentation, SOPs, and client deliverables." },
  { name: "Calendly", category: "Scheduling", color: "#006BFF", description: "Booking automation and appointment management." },
  { name: "Instantly", category: "Cold Email", color: "#16A34A", description: "High-deliverability cold email campaigns at scale." },
];

export default function HowItWorksPage() {
  return (
    <div className="pb-32">
      {/* Hero — dark navy band */}
      <div className="section-dark relative overflow-hidden pt-32 pb-24">
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
              The Process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white mb-6">
              From audit to automation{" "}
              <span className="text-gold">in 10 days</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              A clear, transparent process with no surprises. You know exactly
              what&apos;s happening at every step.
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

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mb-28">
        <div className="relative">
          {/* Vertical timeline line — gold gradient */}
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent hidden sm:block" />

          <StaggerContainer className="space-y-10" staggerDelay={0.15}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.number}>
                  <div className="relative pl-0 sm:pl-20">
                    {/* Step circle with gradient */}
                    <div
                      className={`hidden sm:flex absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.circleGradient} items-center justify-center z-10 shadow-md`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>

                    <div className="card rounded-2xl p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Mobile icon */}
                        <div className={`sm:hidden w-10 h-10 rounded-xl ${step.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={18} className={step.accent} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`font-mono text-xs font-bold ${step.accent}`}>{step.number}</span>
                            <span className="px-2 py-0.5 rounded-full border border-border text-text-muted text-xs">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-5">{step.description}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-text-secondary">
                            <span className={`w-1.5 h-1.5 rounded-full ${step.accent.replace("text-", "bg-")} flex-shrink-0`} />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Deliverable callout */}
                      <div className={`${step.deliverableBg} border rounded-xl px-4 py-3`}>
                        <p className={`${step.deliverableText} text-xs font-semibold`}>
                          <span className="font-bold">Deliverable:</span>{" "}{step.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="section-alt py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                Our Stack
              </p>
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
                Tools we use to build your automation
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                We pick the right tool for the job — not the most complicated one.
                Every tool in our stack is battle-tested and proven.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.07}>
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <div
                  className="card rounded-xl p-5 group border-t-2 h-full"
                  style={{ borderTopColor: tool.color }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-base" style={{ color: tool.color }}>
                      {tool.name}
                    </span>
                    <span className="text-text-muted text-xs border border-border px-2 py-0.5 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{tool.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <ScrollReveal>
          <div className="section-dark relative overflow-hidden rounded-3xl p-10">
            <div
              className="absolute inset-0 opacity-[0.06] rounded-3xl"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <Building2 size={32} className="text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-white mb-3">
                Ready to start your automation audit?
              </h2>
              <p className="text-white/70 mb-6">
                30 minutes. Free. No commitment. You&apos;ll leave with a clear picture
                of what automation can do for your business.
              </p>
              <Link
                href="/book-a-call"
                className="btn-gold px-8 py-4 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
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
