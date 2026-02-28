import { CheckCircle2, Clock, Video, FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Book a Free Audit | Acentra Automation",
  description:
    "Book your free 30-minute automation audit. We'll map exactly what to automate in your business and send you a custom roadmap.",
};

const whatToExpect = [
  {
    icon: Clock,
    title: "30 minutes",
    description: "A focused, no-fluff session — we respect your time.",
  },
  {
    icon: Video,
    title: "Video call (Google Meet or Zoom)",
    description: "Choose whichever platform you prefer.",
  },
  {
    icon: FileText,
    title: "Custom roadmap delivered",
    description: "You'll receive your Automation Roadmap within 24 hours.",
  },
];

const whatWeCover = [
  "Your current workflow and biggest time drains",
  "Which tasks are best suited for automation",
  "Estimated time savings per week",
  "Which package is right for your business",
  "Realistic cost vs. ROI breakdown",
  "Your questions, answered honestly",
];

export default function BookACallPage() {
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
          <div className="w-[500px] h-[250px] rounded-full bg-gold/10 blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delay={0.05}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Free Consultation
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Book your free{" "}
              <span className="text-gold">automation audit</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              30 minutes. No commitment. No sales pressure. Just a clear picture
              of what automation can do for your business — and a custom roadmap
              to prove it.
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to expect */}
            <ScrollReveal delay={0.1}>
              <div className="card-glass rounded-2xl p-6">
                <h3 className="text-text-primary font-bold text-base mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-gold to-amber-400 inline-block" />
                  What to expect
                </h3>
                <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                  {whatToExpect.map((item) => {
                    const Icon = item.icon;
                    return (
                      <StaggerItem key={item.title}>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                            <Icon size={16} className="text-accent" />
                          </div>
                          <div>
                            <p className="text-text-primary text-sm font-semibold">{item.title}</p>
                            <p className="text-text-secondary text-xs mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* What we cover */}
            <ScrollReveal delay={0.2}>
              <div className="card-glass rounded-2xl p-6">
                <h3 className="text-text-primary font-bold text-base mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-gold to-amber-400 inline-block" />
                  What we cover
                </h3>
                <ul className="space-y-3">
                  {whatWeCover.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Trust note */}
            <ScrollReveal delay={0.3}>
              <div className="section-dark relative overflow-hidden rounded-2xl p-5">
                <div
                  className="absolute inset-0 opacity-[0.05] rounded-2xl"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-gold text-xs font-semibold mb-2">Our promise</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    This is a genuine audit — not a disguised sales call. You&apos;ll get
                    real value from this call regardless of whether you become a
                    client. The roadmap alone is worth the 30 minutes.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Calendly embed */}
          <ScrollReveal className="lg:col-span-3" delay={0.15}>
            <div className="card rounded-2xl overflow-hidden shadow-glow-gold border-gold/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent/5 to-gold/5 p-6 border-b border-border">
                <h3 className="text-text-primary font-bold">
                  Select a time that works for you
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  All times shown in your local timezone.
                </p>
              </div>

              {/*
                REPLACE THIS PLACEHOLDER with your actual Calendly embed:

                1. Create a free Calendly account at calendly.com
                2. Set up a 30-min event called "Free Automation Audit"
                3. Copy your scheduling link (e.g., calendly.com/your-name/audit)
                4. Replace the placeholder div below with the Calendly inline widget div
                   and add the Calendly script tag to app/layout.tsx head
              */}

              <div className="p-10 flex flex-col items-center justify-center min-h-[500px] text-center gap-6">
                {/* Pulsing clock icon */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gold/20 animate-ping" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gold-muted flex items-center justify-center">
                    <Clock size={28} className="text-gold" />
                  </div>
                </div>

                <div>
                  <h4 className="text-text-primary font-bold text-xl mb-2">
                    Calendly Embed Goes Here
                  </h4>
                  <p className="text-text-secondary text-sm max-w-sm">
                    To activate booking: create a free Calendly account, set up
                    your 30-min audit event, then replace this placeholder with
                    the Calendly widget code.
                  </p>
                </div>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
                >
                  Set Up Calendly
                  <ArrowRight size={14} />
                </a>

                <div className="border-t border-border w-full pt-5">
                  <p className="text-text-muted text-xs">
                    Or email us directly:{" "}
                    <a
                      href="mailto:hello@acentraautomation.com"
                      className="text-accent hover:text-gold transition-colors font-medium"
                    >
                      hello@acentraautomation.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
