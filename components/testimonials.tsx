import { Star, Quote } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const testimonials = [
  {
    name: "Marcus R.",
    role: "Solo Agent, Dallas TX",
    quote:
      "I was losing Zillow leads because I couldn't respond fast enough. The Speed-to-Lead Bot literally responds while I'm in showings. I closed two deals last month that I know came directly from fast follow-up. This thing pays for itself every single month.",
    result: "2 extra closings in first 60 days",
    initials: "MR",
    color: "bg-accent",
  },
  {
    name: "Lisa & Tom K.",
    role: "Team Leaders, Phoenix AZ (8 agents)",
    quote:
      "We were spending 3–4 hours on every listing launch — writing social posts, emailing the database, calling the VIP list. Now I press one button and it all fires automatically. Our listings are getting more showings in the first 48 hours than they ever did before.",
    result: "90% less time on listing launches",
    initials: "LK",
    color: "bg-gold",
  },
  {
    name: "Janet O.",
    role: "Independent Agent, Nashville TN",
    quote:
      "I hadn't reached out to half my past clients in over a year. Acentra set up birthday emails, home anniversary messages, and market update drips. Within 3 weeks I had two referrals reach out. One already closed. I genuinely forgot these people existed.",
    result: "1 referral deal closed in 3 weeks",
    initials: "JO",
    color: "bg-accent-hover",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Agent Results
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Agents who automated first
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real results from real estate agents who stopped losing deals to
              slow response times and missed follow-ups.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards — offset layout */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <StaggerItem key={t.name} className={idx === 1 ? "md:mt-8" : ""}>
              <div className="card rounded-2xl p-6 flex flex-col relative overflow-hidden h-full">
                {/* Watermark quote */}
                <div className="absolute top-4 right-4 text-6xl leading-none text-border/20 font-serif pointer-events-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold"
                      fill="#C9A96E"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote size={20} className="text-border mb-3" />
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {t.quote}
                </p>

                {/* Result badge */}
                <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4 self-start">
                  {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ring-2 ring-gold/30 ring-offset-2`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">
                      {t.name}
                    </p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
