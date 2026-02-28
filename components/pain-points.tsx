import { Zap, Home, Users } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const pains = [
  {
    icon: Zap,
    title: "Speed to lead is everything — and you're losing it",
    description:
      "Online leads go cold in under 5 minutes. If you're not the first agent to respond, you're not getting the deal. Most agents respond in hours. Our Speed-to-Lead Bot responds in under 60 seconds, 24/7.",
    stat: "78%",
    statLabel: "of deals go to the first agent who responds",
  },
  {
    icon: Home,
    title: "New listings still launching manually?",
    description:
      "Every new listing means manually posting to social, emailing your database, texting VIP clients, and updating your website. That's 3+ hours of your time, every single time. There's a better way.",
    stat: "3+ hrs",
    statLabel: "lost on every manual listing launch",
  },
  {
    icon: Users,
    title: "Past clients are your goldmine — and you're ignoring them",
    description:
      "82% of buyers use an agent referred by someone they trust. Your past clients are sitting in your CRM collecting dust. A simple automated sequence — birthdays, home anniversaries, market updates — keeps you top of mind without the effort.",
    stat: "82%",
    statLabel: "of buyers come from referrals or past relationships",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 relative section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              You&apos;re losing deals to agents who automated first
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every hour you spend on manual follow-ups, listing launches, and
              admin is a competitive advantage you&apos;re handing to the agent down
              the street.
            </p>
          </div>
        </ScrollReveal>

        {/* Pain point cards — featured first card + two side by side */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, idx) => {
            const Icon = pain.icon;
            const isFeatured = idx === 0;
            return (
              <StaggerItem key={pain.title} className={isFeatured ? "md:col-span-2" : ""}>
                <div
                  className={`card rounded-2xl h-full group ${
                    isFeatured
                      ? "p-8 border-l-4 border-l-gold flex flex-col md:flex-row gap-8 items-start"
                      : "p-6"
                  }`}
                >
                  <div className={isFeatured ? "flex-shrink-0" : ""}>
                    <div
                      className={`rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 border border-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform ${
                        isFeatured ? "w-14 h-14 rounded-2xl mb-4 md:mb-0" : "w-12 h-12 mb-5"
                      }`}
                    >
                      <Icon size={isFeatured ? 24 : 20} className="text-accent" />
                    </div>
                  </div>
                  <div className={isFeatured ? "flex-1" : ""}>
                    <div className="mb-4">
                      <span className={`font-extrabold text-accent ${isFeatured ? "text-4xl" : "text-3xl"}`}>
                        {pain.stat}
                      </span>
                      <p className="text-text-muted text-xs mt-1 leading-snug">{pain.statLabel}</p>
                    </div>
                    <h3 className={`text-text-primary font-semibold mb-3 leading-snug ${isFeatured ? "text-lg" : "text-base"}`}>
                      {pain.title}
                    </h3>
                    <p className={`text-text-secondary text-sm leading-relaxed ${isFeatured ? "max-w-2xl" : ""}`}>
                      {pain.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
