import Link from "next/link";

export const Button = ({ logo, linkDesc, linkName, href = "" }) => {
  return (
    <Link className="flex flex-col gap-2 w-full" target="_blank" href={href}>
      <button className="group relative inline-flex h-12 items-center rounded-lg bg-neutral-950 px-16 font-medium text-neutral-50">
        <div className="flex flex-col items-start">
          <span className="z-10 text-sm font-[family-name:var(--font-geist-sans)]">
            {linkName}
          </span>
          <span className="z-10 text-xs font-[family-name:var(--font-geist-mono)]">
            {linkDesc}
          </span>
        </div>
        <div className="absolute left-1 inline-flex h-10 w-12 items-center rounded-md bg-zinc-900 transition-[width] group-hover:w-[calc(100%-8px)]">
          <div className="ml-4">{logo}</div>
        </div>
      </button>
    </Link>
  );
};
