import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "violet" | "amber";
  size?: "sm" | "md";
  dot?: boolean;
  pulseDot?: boolean;
  className?: string;
}

const variantStyles = {
  default: "bg-white/[0.05] border-white/10 text-slate-300",
  cyan: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
  emerald: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
  violet: "bg-violet-500/10 border-violet-400/30 text-violet-300",
  amber: "bg-amber-500/10 border-amber-400/30 text-amber-300",
};

const dotColors = {
  default: "bg-slate-400",
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  dot = false,
  pulseDot = false,
  className = "",
}) => {
  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-0.5 text-xs font-medium"
      : "px-3 py-1 text-xs sm:text-sm font-medium";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border backdrop-blur-md transition-colors ${variantStyles[variant]} ${sizeClasses} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulseDot && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColors[variant]}`}
            />
          )}
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${dotColors[variant]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
