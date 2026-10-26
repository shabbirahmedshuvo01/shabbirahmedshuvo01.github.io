"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA, ABOUT_PILLARS } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FiLayers, FiDatabase, FiShield, FiCloud, FiCheckCircle } from "react-icons/fi";

const getPillarIcon = (name: string) => {
  switch (name) {
    case "layout":
      return <FiLayers className="h-5 w-5 text-cyan-400" />;
    case "database":
      return <FiDatabase className="h-5 w-5 text-sky-400" />;
    case "shield":
      return <FiShield className="h-5 w-5 text-indigo-400" />;
    case "cloud":
      return <FiCloud className="h-5 w-5 text-emerald-400" />;
    default:
      return <FiCheckCircle className="h-5 w-5 text-cyan-400" />;
  }
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Architectural Positioning"
        title="About Me"
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Core Biography Statement */}
        <motion.div
          className="lg:col-span-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              {PROFILE_DATA.about}
            </p>
          </div>
        </motion.div>

        {/* 4 Architectural Focus Pillars */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Card variant="interactive" className="h-full flex flex-col justify-between p-5">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
