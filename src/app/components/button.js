import Link from "next/link";
import React from "react";

export const Button = ({ logo, linkDesc, linkName, href = "" }) => {
  return (
    <Link className="flex flex-col gap-2 w-full" target="_blank" href={href}>
      <button className="link-card group relative inline-flex h-12 items-center rounded-lg bg-card-bg px-16 font-medium text-foreground border border-muted/20">
        <div className="flex flex-col items-start">
          <span className="z-10 text-sm font-[family-name:var(--font-geist-sans)] text-primary">
            {linkName}
          </span>
          <span className="z-10 text-xs font-[family-name:var(--font-geist-mono)] text-muted">
            {linkDesc}
          </span>
        </div>
        <div className="absolute left-1 inline-flex h-10 w-12 items-center rounded-md bg-hover-bg text-accent transition-[width] group-hover:w-[calc(100%-8px)]">
          <div className="ml-[13px]">
            {React.cloneElement(logo, { className: "w-5 h-5" })}
          </div>
        </div>
      </button>
    </Link>
  );
};
