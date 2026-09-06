import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";

export const styles = {
  solid: cn(base, "bg-primary text-primary-foreground hover:bg-primary/85"),
  outline: cn(
    base,
    "border border-primary/45 text-primary hover:border-primary hover:bg-primary/10",
  ),
  quiet: cn(base, "border border-border text-foreground hover:border-primary/50 hover:text-primary"),
};

export function CtaLink({
  variant = "solid",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof styles }) {
  return <Link {...props} className={cn(styles[variant], className)} />;
}

export function CtaButton({
  variant = "solid",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof styles }) {
  return <button {...props} className={cn(styles[variant], className)} />;
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-[1.15] md:text-[2.75rem]">{title}</h2>
      {intro ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{intro}</p>
      ) : null}
    </div>
  );
}
