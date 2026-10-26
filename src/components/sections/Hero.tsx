"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiCheck, FiTerminal } from "react-icons/fi";
import { useClipboard } from "@/hooks/useClipboard";
import profilePic from "@/../public/profile/shuvo-pp-v2.jpeg";

export const Hero: React.FC = () => {
  const { copied, copy } = useClipboard();

  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-20"
    >
      {/* Left Column: Technical Copy & CTAs */}
      <motion.div
        className="flex flex-col items-start lg:col-span-7"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Eyebrow / Availability Badge */}
        <div className="mb-6">
          <Badge variant="emerald" dot pulseDot size="md">
            {PROFILE_DATA.eyebrow}
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.12]">
          Building High-Performance{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
            Web Applications
          </span>{" "}
          &amp; Scalable Systems
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base text-slate-300 sm:text-lg sm:leading-relaxed">
          {PROFILE_DATA.subheadline}
        </p>

        {/* Quick Metrics Bar */}
        <div className="mt-8 grid w-full grid-cols-3 gap-3 sm:gap-4">
          {PROFILE_DATA.metrics.map((metric) => (
            <div
              key={metric.label}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-3.5 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900/80"
            >
              <div className="text-2xl font-bold tracking-tight text-cyan-300 sm:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-300 line-clamp-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          {/* Button 1: Primary Download Resume */}
          <Button
            href={PROFILE_DATA.resumeUrl}
            external
            download={PROFILE_DATA.resumeUrl.replace(/^\//, "")}
            variant="primary"
            size="md"
            icon={<FiDownload className="h-4 w-4" />}
            aria-label="Download Shabbir Ahmed Shuvo's Resume (PDF)"
          >
            Download Resume
          </Button>

          {/* Button 2: Secondary View GitHub */}
          <Button
            href={PROFILE_DATA.githubUrl}
            external
            variant="secondary"
            size="md"
            icon={<FiGithub className="h-4 w-4" />}
            aria-label="View Shabbir Ahmed Shuvo's GitHub Profile"
          >
            View GitHub
          </Button>

          {/* Button 3: Ghost/Social LinkedIn */}
          <Button
            href={PROFILE_DATA.linkedinUrl}
            external
            variant="ghost"
            size="md"
            icon={<FiLinkedin className="h-4 w-4 text-cyan-400" />}
            aria-label="Connect with Shabbir Ahmed Shuvo on LinkedIn"
          >
            LinkedIn
          </Button>
        </div>

        {/* Direct Contact Quick Pill */}
        <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <button
            onClick={() => copy(PROFILE_DATA.email)}
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
            title="Click to copy email address"
            aria-label="Copy email address sabbirshuvo006@gmail.com"
          >
            {copied ? (
              <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <FiMail className="h-3.5 w-3.5 text-slate-400 group-hover:text-cyan-400" />
            )}
            <span>{copied ? "Email Copied!" : PROFILE_DATA.email}</span>
          </button>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <span className="font-mono text-slate-400">{PROFILE_DATA.location}</span>
        </div>
      </motion.div>

      {/* Right Column: Visual Portrait & Engineering Card */}
      <motion.div
        className="flex flex-col items-center lg:col-span-5"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Profile Card Container with Glow */}
        <div className="relative w-full max-w-sm">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 blur-xl opacity-75" />

          <Card variant="default" className="relative p-4 sm:p-5 border-white/15 bg-slate-950/80">
            {/* Image Frame */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <Image
                src={profilePic}
                alt="Shabbir Ahmed Shuvo - Full-Stack Developer (dev shuvo)"
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover object-top transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-medium text-white drop-shadow-md">
                  {PROFILE_DATA.name}
                </span>
                <span className="rounded-md bg-cyan-950/80 border border-cyan-400/40 px-2 py-0.5 font-mono text-[11px] text-cyan-300 backdrop-blur-md">
                  Senior Stack
                </span>
              </div>
            </div>

            {/* Architecture Spec Snippet */}
            <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/90 p-3.5 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiTerminal className="h-3 w-3 text-cyan-400" />
                  <span>architect.spec.ts</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">ready</span>
                </span>
              </div>
              <div className="mt-2.5 space-y-1 text-slate-300">
                <p>
                  <span className="text-cyan-400">const</span> stack = [
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Node.js&quot;</span>];
                </p>
                <p>
                  <span className="text-cyan-400">const</span> security ={" "}
                  <span className="text-amber-300">&quot;RBAC &amp; JWT&quot;</span>;
                </p>
                <p>
                  <span className="text-cyan-400">const</span> state ={" "}
                  <span className="text-sky-300">&quot;RTK Query &amp; Sockets&quot;</span>;
                </p>
                <p>
                  <span className="text-cyan-400">const</span> focus ={" "}
                  <span className="text-fuchsia-300">&quot;Commercial Scale&quot;</span>;
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
