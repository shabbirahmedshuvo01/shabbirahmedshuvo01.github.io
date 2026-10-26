"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useClipboard } from "@/hooks/useClipboard";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiCheck,
  FiCopy,
  FiSend,
} from "react-icons/fi";

export const Contact: React.FC = () => {
  const { copied: copiedEmail, copy: copyEmail } = useClipboard();
  const { copied: copiedPhone, copy: copyPhone } = useClipboard();

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Direct Line"
        title="Let's Connect"
        description="Currently open to high-impact full-stack and frontend engineering roles, contract architectures, and commercial builds."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Contact Card */}
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card variant="default" className="border-white/10 bg-slate-900/70 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
              Start a Conversation
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Whether you need to scale an enterprise Next.js frontend, architect reliable REST APIs with role-based security, or ship a zero-latency WebSocket system, I am ready to contribute immediately.
            </p>

            {/* Contact Rows */}
            <div className="mt-8 space-y-4">
              {/* Email Row */}
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Address</p>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => copyEmail(PROFILE_DATA.email)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <Button
                    href={`mailto:${PROFILE_DATA.email}`}
                    variant="primary"
                    size="sm"
                    icon={<FiSend className="h-3.5 w-3.5" />}
                    aria-label="Send direct email to Shabbir Ahmed Shuvo"
                  >
                    Email
                  </Button>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Phone / WhatsApp</p>
                    <a
                      href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      aria-label="Call direct phone or WhatsApp"
                    >
                      {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => copyPhone(PROFILE_DATA.phone)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <Button
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`}
                    variant="secondary"
                    size="sm"
                    aria-label="Call Shabbir Ahmed Shuvo directly"
                  >
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Social & Status Card */}
        <motion.div
          className="flex flex-col justify-between gap-6 lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Status block */}
          <Card variant="glow" className="p-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <h4 className="text-sm font-semibold text-white">Operational Status</h4>
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Available immediately for engineering consultations, full-time positions, and commercial platform contracts.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono space-y-1">
              <p>📍 Location: {PROFILE_DATA.location}</p>
              <p>⏱️ Response Time: &lt; 24 Hours</p>
              <p>🌐 Timezone: GMT+6 (Global Remote Ready)</p>
            </div>
          </Card>

          {/* Social Links */}
          <Card variant="default" className="p-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Professional Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                aria-label="Connect with Shabbir Ahmed Shuvo on LinkedIn"
              >
                <span className="flex items-center gap-2">
                  <FiLinkedin className="h-4 w-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </span>
                <span className="text-slate-500">→</span>
              </a>
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                aria-label="View Shabbir Ahmed Shuvo's GitHub repositories"
              >
                <span className="flex items-center gap-2">
                  <FiGithub className="h-4 w-4 text-cyan-400" />
                  <span>GitHub Repositories</span>
                </span>
                <span className="text-slate-500">→</span>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
