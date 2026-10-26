"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FiLayout, FiLayers, FiShield, FiDatabase, FiCpu } from "react-icons/fi";

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "layout":
      return <FiLayout className="h-5 w-5 text-cyan-400" />;
    case "layers":
      return <FiLayers className="h-5 w-5 text-sky-400" />;
    case "shield":
      return <FiShield className="h-5 w-5 text-indigo-400" />;
    case "database":
      return <FiDatabase className="h-5 w-5 text-emerald-400" />;
    default:
      return <FiCpu className="h-5 w-5 text-cyan-400" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Core Competencies"
        title="Technical Skills"
        description="Engineered across modern production stacks, strictly structured around architectural responsibilities."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              variant="interactive"
              className="h-full flex flex-col justify-between border-white/10 bg-slate-900/60 p-6 sm:p-7"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>0{index + 1} • DOMAIN</span>
                <span className="text-cyan-400/80">{category.skills.length} TECHNOLOGIES</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
