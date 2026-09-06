import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { CtaButton, SectionHead } from "@/components/site/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Stockists — Volant London" },
      {
        name: "description",
        content:
          "Get in touch with the Volant studio, book a fitting, or find the stockists carrying the collection.",
      },
      { property: "og:title", content: "Contact & Stockists — Volant London" },
      {
        property: "og:description",
        content: "Reach the Volant studio or find a stockist near you.",
      },
    ],
  }),
  component: Contact,
});

const stockists = [
  ["Mercer & Fold", "12 Redchurch Street, London E2"],
  ["The Long Room", "48 Grey Street, Newcastle"],
  ["Atelier Nine", "3 Bath Street, Bath"],
  ["Neue Form", "Marienstraße 4, Berlin"],
];

const field =
  "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section shell grid gap-14 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <SectionHead
          eyebrow="Contact"
          title="Talk to the studio"
          intro="Fittings, alterations, press or wholesale — a real person reads every message, usually within two working days."
        />
        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Message sent — we'll reply shortly.");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={field} placeholder="Your name" required aria-label="Your name" />
            <input
              className={field}
              type="email"
              placeholder="Email address"
              required
              aria-label="Email address"
            />
          </div>
          <input className={field} placeholder="Subject" aria-label="Subject" />
          <textarea className={field} rows={5} placeholder="Message" required aria-label="Message" />
          <CtaButton type="submit">{sent ? "Sent — thank you" : "Send message"}</CtaButton>
        </form>
      </div>

      <aside className="space-y-8">
        <div className="rounded-xl border border-border/70 bg-surface p-7">
          <p className="eyebrow">Studio</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Unit 4, Tanner Yard
            <br />
            Bermondsey, London SE1
            <br />
            Appointments Tuesday–Friday
          </p>
          <p className="mt-4 text-sm text-primary">hello@volant.london</p>
        </div>

        <div className="rounded-xl border border-border/70 bg-surface p-7">
          <p className="eyebrow">Stockists</p>
          <ul className="mt-4 space-y-4">
            {stockists.map(([name, address]) => (
              <li key={name} className="text-sm">
                <p>{name}</p>
                <p className="mt-1 text-muted-foreground">{address}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border/70 bg-surface p-7">
          <p className="eyebrow">Follow</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors duration-300 hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
