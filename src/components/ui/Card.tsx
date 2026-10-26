import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "interactive" | "glow" | "elevated";
  className?: string;
  glowColor?: "cyan" | "violet" | "emerald";
}

const variantStyles = {
  default: "bg-slate-900/60 border-white/10 backdrop-blur-xl",
  interactive:
    "bg-slate-900/60 border-white/10 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(34,211,238,0.25)] transition-all duration-300",
  glow: "bg-slate-900/80 border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_50px_-20px_rgba(34,211,238,0.35)]",
  elevated:
    "bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-white/15 backdrop-blur-xl shadow-xl",
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`relative rounded-2xl border p-6 text-slate-100 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
