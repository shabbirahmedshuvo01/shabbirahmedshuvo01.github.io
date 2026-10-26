"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";
import { PROFILE_DATA } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@/components/ui/Button";
import { FiMenu, FiX, FiFileText } from "react-icons/fi";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { scrolled } = useScrollPosition(20);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
        ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-white transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold transition-all group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            S
          </span>
          <span className="font-medium tracking-tight">
            {PROFILE_DATA.name}
          </span>
          <span className="hidden font-mono text-xs text-cyan-400/80 sm:inline">
            • Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-lg ${isActive
                  ? "text-cyan-300 bg-cyan-500/10"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            href={PROFILE_DATA.resumeUrl}
            external
            download
            variant="outline"
            size="sm"
            icon={<FiFileText className="h-4 w-4" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-300 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950/95 px-4 pt-2 pb-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                    ? "bg-cyan-500/15 text-cyan-300 font-semibold"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-white/10">
              <Button
                href={PROFILE_DATA.resumeUrl}
                external
                download
                variant="primary"
                size="md"
                className="w-full"
                icon={<FiFileText className="h-4 w-4" />}
              >
                Download Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
