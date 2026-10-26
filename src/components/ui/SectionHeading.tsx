import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-slate-400 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
