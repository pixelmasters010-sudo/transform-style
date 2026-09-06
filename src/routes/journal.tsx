import { createFileRoute } from "@tanstack/react-router";
import { journal } from "@/lib/catalogue";
import { SectionHead } from "@/components/site/ui-bits";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal & Lookbook — Volant London" },
      {
        name: "description",
        content:
          "Editorial styling stories, seasonal lookbooks and workshop notes from the Volant studio in London.",
      },
      { property: "og:title", content: "Journal & Lookbook — Volant London" },
      {
        property: "og:description",
        content: "Styling stories, lookbooks and workshop notes from Volant.",
      },
    ],
  }),
  component: Journal,
});

function Journal() {
  const [lead, ...rest] = journal;
  if (!lead) return null;

  return (
    <div className="section shell">
      <SectionHead
        eyebrow="Journal"
        title="Notes from the studio"
        intro="Styling, seasons and the quiet mechanics behind the collection."
      />

      <article className="mt-12 grid gap-8 overflow-hidden rounded-xl border border-border/70 bg-surface lg:grid-cols-2">
        <img
          src={lead.image}
          alt={lead.title}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="eyebrow">{lead.date}</p>
          <h2 className="mt-4 text-3xl md:text-4xl">{lead.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {lead.excerpt}
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
            Read the story
          </p>
        </div>
      </article>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((entry) => (
          <article
            key={entry.slug}
            className="group overflow-hidden rounded-xl border border-border/70 bg-surface transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40"
          >
            <img
              src={entry.image}
              alt={entry.title}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="p-7">
              <p className="eyebrow">{entry.date}</p>
              <h3 className="mt-3 text-2xl">{entry.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.excerpt}</p>
              <p className="mt-5 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                Read the story
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
