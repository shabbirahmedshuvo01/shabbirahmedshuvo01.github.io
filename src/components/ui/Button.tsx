import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  primary:
    "bg-cyan-400 text-slate-950 font-semibold shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)] hover:bg-cyan-300 hover:shadow-[0_0_35px_-2px_rgba(34,211,238,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-white/[0.08] text-slate-100 font-medium border border-white/15 hover:bg-white/[0.14] hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-0.5",
  outline:
    "border border-cyan-400/40 text-cyan-300 font-medium bg-cyan-950/20 hover:bg-cyan-400/15 hover:border-cyan-300 hover:-translate-y-0.5 shadow-[0_0_20px_-8px_rgba(34,211,238,0.3)]",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/[0.06] font-medium hover:-translate-y-0.5",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs gap-1.5 rounded-lg",
  md: "px-4 py-2 text-sm gap-2 rounded-xl",
  lg: "px-6 py-3 text-base gap-2.5 rounded-xl",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  download,
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  "aria-label": ariaLabel,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          aria-label={ariaLabel}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} aria-label={ariaLabel} {...props}>
      {content}
    </button>
  );
};
