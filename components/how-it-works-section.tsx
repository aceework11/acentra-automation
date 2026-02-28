import { Search, Wrench, BarChart2 } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Free Automation Audit",
    description:
      "We spend 30 minutes understanding your business — where time is lost, what's being done manually, and what's blocking growth. You'll get a custom automation roadmap, free.",
    detail: "No commitment. No sales pressure. Just clarity.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "We Build Your Workflows",
    description:
      "Our team builds your custom automations using n8n, HubSpot, Airtable, and AI tools like Claude. Typical turnaround is 5–10 business days.",
    detail: "You review and approve before anything goes live.",
  },
  {
    step: "03",
    icon: BarChart2,
    title: "Monitor & Optimize",
    description:
      "Access your live automation dashboard to see every workflow running in real time. We handle maintenance and optimization so your systems keep improving.",
    detail: "Optional monthly retainer from $150/mo.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              From audit to automation in 10 days
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A clear, no-fluff process that gets you live fast and keeps things
              running without you babysitting them.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-gold/60 via-accent/30 to-gold/60" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Step number + icon */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center z-10 relative shadow-glow-gold">
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="text-text-muted text-xs font-mono mb-2">{step.step}</div>
                    <h3 className="text-text-primary font-bold text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-gold text-xs font-medium border-l-2 border-gold/40 pl-3">
                      {step.detail}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
