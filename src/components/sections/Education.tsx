"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_ITEMS, CERTIFICATIONS } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education & Credentials"
        description="Formal computer science foundation complemented by continuous engineering training."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <Card
              variant="interactive"
              className="h-full flex flex-col justify-between border-white/10 bg-slate-900/60 p-6 sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <FiBookOpen className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-cyan-300">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={item.status === "In Progress" ? "cyan" : "emerald"}
                    size="sm"
                    dot
                  >
                    {item.status}
                  </Badge>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <FiCalendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="h-3.5 w-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {item.notes && (
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certifications & Continuous Training Pill Section */}
      <div className="mt-10">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Professional Certifications &amp; Continuous Training
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-md transition-all hover:border-cyan-400/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FiAward className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
              <span className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-emerald-400 font-medium">
                Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
