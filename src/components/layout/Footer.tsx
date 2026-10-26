"use client";

import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/navigation";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FiGithub className="h-4 w-4" />;
      case "linkedin":
        return <FiLinkedin className="h-4 w-4" />;
      case "email":
        return <FiMail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/70 pt-12 pb-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-base font-semibold text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
                S
              </span>
              <span>{PROFILE_DATA.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-400 leading-relaxed">
              Full-Stack Software Engineer building modern, high-throughput web applications with Next.js, TypeScript, and Node.js.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Available for Full-Time & Commercial Contract Work</span>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col justify-between md:col-span-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Connect
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <span>Back to Top</span>
                <FiArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. Architected with Next.js & TypeScript.</p>
          <p className="font-mono text-[11px] text-slate-500">
            LOC: Dhaka, BD • 23.777176° N, 90.399452° E
          </p>
        </div>
      </div>
    </footer>
  );
};
