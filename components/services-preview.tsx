import Link from "next/link";
import { ArrowRight, Zap, Home, Users, Layers, CheckCircle2 } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const services = [
  {
    icon: Zap,
    title: "Speed-to-Lead Bot",
    price: "$1,800",
    description:
      "Responds to every Zillow, Realtor.com, and website lead in under 60 seconds — 24 hours a day, 7 days a week. AI qualifies the lead and books a showing while you sleep.",
    features: [
      "Instant lead response, any hour",
      "AI qualification conversation",
      "Auto-books showing appointments",
      "CRM entry + agent notification",
    ],
    href: "/services#speed-to-lead",
    gradient: "from-blue-500 to-accent",
  },
  {
    icon: Home,
    title: "Listing Launch Machine",
    price: "$1,500",
    description:
      "Go live on a new listing and trigger a full marketing sequence automatically — social posts, database email, VIP client texts, and showing request intake.",
    features: [
      "Social media auto-posts",
      "Email blast to your database",
      "VIP client SMS notifications",
      "Showing request automation",
    ],
    href: "/services#listing-launch",
    gradient: "from-gold to-amber-500",
  },
  {
    icon: Users,
    title: "Past Client Referral Engine",
    price: "$1,200",
    description:
      "Automated birthday messages, home anniversaries, market update emails, and referral ask sequences keep you top-of-mind with past clients — without any manual effort.",
    features: [
      "Birthday & anniversary sequences",
      "Quarterly market update drips",
      "Referral ask automation",
      "Google review requests",
    ],
    href: "/services#referral-engine",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Our Automations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Named automations built for how agents actually work
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Not generic &quot;admin automation.&quot; Real estate-specific systems with
              names you&apos;ll remember and results you&apos;ll track.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="card rounded-2xl overflow-hidden group h-full flex flex-col">
                  {/* Gradient top border */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon size={22} className="text-accent" />
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="inline-block bg-gold-muted rounded-lg px-3 py-1 text-2xl font-extrabold text-text-primary">
                        {service.price}
                      </span>
                      <span className="text-text-muted text-sm ml-2">one-time</span>
                    </div>

                    <h3 className="text-text-primary font-bold text-lg mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="flex flex-col gap-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-sm font-semibold text-accent group/link"
                    >
                      Learn more
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Full Suite callout */}
        <ScrollReveal delay={0.3}>
          <div className="card rounded-2xl p-6 border-gold/40 shadow-glow-gold flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Layers size={22} className="text-white" />
              </div>
              <div>
                <p className="text-text-primary font-bold text-lg">Full Agent Suite — $3,500</p>
                <p className="text-text-secondary text-sm">All 3 automations + live dashboard + monthly optimization call</p>
              </div>
            </div>
            <Link
              href="/book-a-call"
              className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
            >
              Get the Full Suite <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
