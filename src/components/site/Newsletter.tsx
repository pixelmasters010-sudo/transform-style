import { useState } from "react";
import { toast } from "sonner";
import { CtaButton } from "./ui-bits";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setEmail("");
        toast.success("Thank you — we'll be in touch.");
      }}
      className={`flex w-full flex-col gap-3 sm:flex-row ${compact ? "" : "max-w-md"}`}
    >
      <label className="sr-only" htmlFor={compact ? "email-footer" : "email-home"}>
        Email address
      </label>
      <input
        id={compact ? "email-footer" : "email-home"}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-w-0 flex-1 rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <CtaButton type="submit" variant="outline" className="shrink-0">
        Sign up
      </CtaButton>
    </form>
  );
}
