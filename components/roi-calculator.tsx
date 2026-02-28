"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(30);
  const [responseHours, setResponseHours] = useState(4);
  const [avgCommission, setAvgCommission] = useState(8000);

  const currentCloseRate = 0.03;
  const automatedCloseRate = Math.min(currentCloseRate * (responseHours > 1 ? 1.8 : 1.2), 0.10);
  const currentDealsPerYear = Math.round(leadsPerMonth * 12 * currentCloseRate * 10) / 10;
  const automatedDealsPerYear = Math.round(leadsPerMonth * 12 * automatedCloseRate * 10) / 10;
  const extraDeals = Math.max(0, Math.round((automatedDealsPerYear - currentDealsPerYear) * 10) / 10);
  const extraRevenue = Math.round(extraDeals * avgCommission);

  return (
    <section className="py-24 relative section-dark overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Calculator inputs */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Calculator size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest">
                    Revenue Calculator
                  </p>
                  <h2 className="text-2xl font-bold text-white font-serif">
                    How much are slow lead responses costing you?
                  </h2>
                </div>
              </div>

              {/* Slider: leads per month */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-white/70">
                    Online leads per month
                  </label>
                  <span className="text-white font-bold text-lg">
                    {leadsPerMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>5</span><span>200</span>
                </div>
              </div>

              {/* Slider: response time */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-white/70">
                    Your average lead response time
                  </label>
                  <span className="text-white font-bold text-lg">
                    {responseHours}h
                  </span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={24}
                  step={0.5}
                  value={responseHours}
                  onChange={(e) => setResponseHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>30 min</span><span>24 hrs</span>
                </div>
              </div>

              {/* Slider: avg commission */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-white/70">
                    Average commission per deal
                  </label>
                  <span className="text-white font-bold text-lg">
                    ${avgCommission.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={30000}
                  step={500}
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>$2k</span><span>$30k</span>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="bg-white rounded-2xl p-6 space-y-5 shadow-glow-gold">
              <h3 className="text-text-secondary text-sm font-medium">
                Your annual revenue opportunity:
              </h3>

              <div className="border-b border-border pb-5">
                <p className="text-text-muted text-xs mb-1">
                  Deals closed per year (current pace)
                </p>
                <p className="text-3xl font-extrabold text-text-primary">
                  {currentDealsPerYear}
                  <span className="text-text-muted text-sm font-normal ml-1">deals/yr</span>
                </p>
              </div>

              <div className="border-b border-border pb-5">
                <p className="text-text-muted text-xs mb-1">
                  Deals with Speed-to-Lead Bot (&lt;60s response)
                </p>
                <p className="text-2xl font-bold text-text-primary">
                  {automatedDealsPerYear}
                  <span className="text-text-muted text-sm font-normal ml-1">deals/yr</span>
                </p>
              </div>

              <div>
                <p className="text-text-muted text-xs mb-1">
                  Additional annual commission from faster response
                </p>
                <p className="text-4xl font-extrabold text-accent">
                  +${extraRevenue.toLocaleString()}
                </p>
                <p className="text-text-muted text-xs mt-2">
                  Based on Harvard Business Review research: responding in &lt;5 min = 21x more qualified leads
                </p>
              </div>

              <Link
                href="/book-a-call"
                className="btn-primary w-full px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                Start capturing those deals
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
