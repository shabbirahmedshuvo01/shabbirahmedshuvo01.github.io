"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FiBriefcase, FiExternalLink, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Career Timeline"
        title="Professional Journey"
        description="Commercial engineering delivery across client web applications, enterprise dashboards, and distributed systems."
      />

      <div className="relative mt-12 space-y-8 before:absolute before:inset-0 before:left-3 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-sky-500 before:to-indigo-500/20 sm:before:left-5">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 sm:pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute left-1 sm:left-3 top-6 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.8)]">
              <span className={`h-2 w-2 rounded-full ${exp.isCurrent ? "bg-emerald-400 animate-ping" : "bg-cyan-400"}`} />
            </div>

            <Card
              variant="interactive"
              className="border-white/10 bg-slate-900/60 p-6 sm:p-8"
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <Badge variant="emerald" size="sm" dot pulseDot>
                        Current
                      </Badge>
                    )}
                    <span className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-slate-300">
                      {exp.locationType}
                    </span>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-semibold text-cyan-300 hover:text-cyan-200"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        <span>{exp.company}</span>
                        <FiExternalLink className="h-3.5 w-3.5 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="font-semibold text-cyan-300">
                        {exp.company}
                      </span>
                    )}
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <FiMapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <FiCalendar className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements Bullet Points */}
              <div className="mt-6">
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base leading-relaxed">
                      <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Stack &amp; Tools Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
