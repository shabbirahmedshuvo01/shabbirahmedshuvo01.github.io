"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiActivity,
  FiCopy,
  FiCheck,
  FiTerminal,
} from "react-icons/fi";
import { SiNpm } from "react-icons/si";

export const Projects: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Production Engineering"
        title="Featured Systems"
        description="Commercial platforms and architectural frameworks delivered with zero tolerance for state synchronization lag."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={index === 2 ? "lg:col-span-2" : ""}
          >
            <Card
              variant="interactive"
              className="h-full flex flex-col justify-between border-white/10 bg-slate-900/60 p-6 sm:p-8"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-300">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.version && (
                      <Badge variant="amber" size="sm">
                        {project.version}
                      </Badge>
                    )}
                    {project.isFeatured ? (
                      <Badge variant="cyan" size="sm" dot>
                        Live Commercial Platform
                      </Badge>
                    ) : (
                      <Badge variant="violet" size="sm">
                        Open Source Toolkit
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Metrics Callout */}
                {project.metrics && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs text-slate-300">
                    <FiActivity className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>
                      <strong className="text-white">Impact:</strong> {project.metrics}
                    </span>
                  </div>
                )}

                {/* Install Command Terminal Pill */}
                {project.installCommand && (
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-2.5 font-mono text-xs shadow-inner">
                    <div className="flex items-center gap-2 overflow-x-auto">
                      <FiTerminal className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-500 select-none">$</span>
                      <span className="text-cyan-200 font-semibold tracking-wide select-all">
                        {project.installCommand}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(project.installCommand!, project.id)}
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-white/[0.1] hover:text-white cursor-pointer active:scale-95"
                      title="Copy install command"
                      aria-label="Copy install command"
                    >
                      {copiedId === project.id ? (
                        <>
                          <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy className="h-3.5 w-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Architecture Highlights */}
                {project.architectureHighlights && (
                  <div className="mt-5">
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <FiLayers className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Key Architectural Highlights:</span>
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {project.architectureHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/5 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon={<FiExternalLink className="h-4 w-4" />}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </Button>
                )}
                {project.npmUrl && (
                  <Button
                    href={project.npmUrl}
                    external
                    variant="secondary"
                    size="sm"
                    icon={<SiNpm className="h-4 w-4 text-red-400" />}
                    aria-label={`View npm package for ${project.title}`}
                  >
                    npm Package
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    external
                    variant={project.liveUrl ? "secondary" : "primary"}
                    size="sm"
                    icon={<FiGithub className="h-4 w-4" />}
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    View Repository
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
