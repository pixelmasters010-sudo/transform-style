import { createFileRoute } from "@tanstack/react-router";
import { HERO_VIDEO_URL, products } from "@/lib/catalogue";
import fabricDetail from "@/assets/journal-2.jpg";
import { CtaLink, SectionHead } from "@/components/site/ui-bits";

export const Route = createFileRoute("/how-it-transforms")({
  head: () => ({
    meta: [
      { title: "How It Transforms — The Volant Mechanism" },
      {
        name: "description",
        content:
          "A step-by-step look at the folding panels, pressed lines and brass clasps that let one Volant garment hold two finished silhouettes.",
      },
      { property: "og:title", content: "How It Transforms — The Volant Mechanism" },
      {
        property: "og:description",
        content: "The folding panels and brass clasps behind every Volant garment.",
      },
    ],
  }),
  component: HowItTransforms,
});

const steps = [
  {
    n: "01",
    title: "The pressed line",
    copy: "Every convertible panel is cut with a permanent fold line, set by steam press and stabilised with a fine fusible tape. The fabric remembers where to bend, so the second silhouette lands cleanly every time.",
  },
  {
    n: "02",
    title: "The clasp",
    copy: "Solid brass hook-and-bar clasps sit inside the side seam, hidden under a placket. They carry the weight of the lower panel without pulling at the cloth — the same principle as a well-set trouser hook.",
  },
  {
    n: "03",
    title: "The stow pocket",
    copy: "Folded panels don't hang loose. Each one tucks into a shallow interior pocket sewn along the waistline, keeping the outer line flat and the drape true.",
  },
  {
    n: "04",
    title: "The anchor",
    copy: "An internal grosgrain tie sets the waist and locks the new proportion in place. Adjust it once for your fit and the garment holds it through both states.",
  },
];

function HowItTransforms() {
  return (
    <>
      <section className="section shell">
        <SectionHead
          eyebrow="The mechanism"
          title="Closer to joinery than to fashion"
          intro="A Volant piece changes shape the way a good folding table does: along planned lines, with hardware that takes the load. Nothing is removed, nothing is improvised."
        />
      </section>

      <section className="shell -mt-6 pb-6">
        <div className="overflow-hidden rounded-xl border border-border/70 bg-surface">
          <video
            className="aspect-video w-full object-cover"
            src={HERO_VIDEO_URL}
            poster={fabricDetail}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="A shirt on a mannequin being folded and clasped into a shirt dress"
          />
          <p className="px-5 py-4 text-xs text-muted-foreground">
            Studio film: the Marlow shirt folding into its shirt dress state, in real time.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <article
              key={s.n}
              className="rounded-xl border border-border/70 bg-surface p-7 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/35"
            >
              <p className="text-sm text-primary">{s.n}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <div className="mt-6 h-28 rounded-md border border-dashed border-border bg-surface-2 p-4">
                <Diagram index={s.n} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <SectionHead
            eyebrow="Try it"
            title="Every garment, both states"
            intro="Each product page carries its own transformation sequence and a step-by-step for that piece."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <div
                key={p.slug}
                className="rounded-xl border border-border/70 bg-background p-5 text-sm"
              >
                <p className="text-base">{p.name}</p>
                <p className="mt-2 text-muted-foreground">
                  {p.states[0]} → {p.states[1]}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink to="/shop">Shop the collection</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Diagram({ index }: { index: string }) {
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full text-primary" aria-hidden="true">
      <rect
        x="6"
        y="8"
        width="52"
        height="44"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <path
        d="M70 30 h30"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeDasharray={index === "02" ? "4 4" : "0"}
      />
      <path d="M96 26 l6 4 -6 4" fill="none" stroke="currentColor" strokeOpacity="0.7" />
      <rect
        x="112"
        y="4"
        width="52"
        height="52"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <path d="M112 32 h52" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 3" />
    </svg>
  );
}
