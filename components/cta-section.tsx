import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const benefits = [
  "30-min free audit — no commitment",
  "Custom automation roadmap provided",
  "Results in 10 business days",
  "Cancel anytime on retainer plans",
];

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Multi-stop gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-accent to-accent-hover" />

            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Gold glow accents */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 20% 80%, rgba(201,169,110,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,169,110,0.08) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                Ready to automate?
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Stop losing time to work a machine could do
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Book a free 30-minute automation audit. We&apos;ll map exactly what to
                automate in your business and send you a custom roadmap — whether
                you hire us or not.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="btn-gold px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2"
                >
                  Book Your Free Audit Now
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  View pricing plans →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
