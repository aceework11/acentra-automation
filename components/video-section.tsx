"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            See It in Action
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How We Help Agents Close More Deals
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Watch how our automation systems work behind the scenes to keep your
            business running 24/7.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 border border-border aspect-video bg-accent/5 ring-1 ring-gold/20 ring-offset-4 ring-offset-background"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-navy-dark/60" />

          {!isPlaying ? (
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              {/* Pulsing ring behind play button */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-[transform,background-color] duration-200"
                  aria-label="Play video"
                >
                  <Play size={32} className="text-accent ml-1" fill="#1B2A4A" />
                </button>
              </div>
              <p className="text-white text-sm font-medium mt-4 drop-shadow-md">
                2 min overview
              </p>
            </div>
          ) : (
            <div className="relative z-10 flex items-center justify-center h-full bg-accent">
              <div className="text-center text-white/80 px-6">
                <p className="text-lg font-semibold mb-2">
                  Video Embed Goes Here
                </p>
                <p className="text-sm">
                  Replace this placeholder with your YouTube or Vimeo embed URL
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
