import { createFileRoute } from "@tanstack/react-router";
import storyImage from "@/assets/story.jpg";
import { CtaLink, SectionHead } from "@/components/site/ui-bits";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Volant London" },
      {
        name: "description",
        content:
          "A founder's note on why Volant makes convertible clothing in Britain, how it's made, and what we do about waste.",
      },
      { property: "og:title", content: "Our Story — Volant London" },
      {
        property: "og:description",
        content: "Why we make convertible clothing in Britain, and how.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      <section className="section shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-xl border border-border/70">
          <img
            src={storyImage}
            alt="The Volant workshop: pattern papers, a sewing machine and brass hardware in daylight"
            loading="lazy"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHead
            eyebrow="Founder's note"
            title="Why one thing should be two"
            intro="I spent nine years designing for houses that made beautiful clothes nobody wore twice a week. Volant started in a Bermondsey back room with a shirt I kept re-cutting until it agreed to be a dress."
          />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              The engineering came before the styling. Fold lines, clasp placement, how much weight
              a side seam can take — we prototyped eleven times before the first Marlow left the
              table. It still takes under a minute to change, and it still looks like a proper
              shirt when you want one.
            </p>
            <p>
              — Imogen Hale, Founder
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell grid gap-8 md:grid-cols-3">
          {[
            [
              "Made here",
              "Cut and sewn between Leicester and Somerset, in workshops we visit monthly. Wool from Yorkshire, linen from Belgium, silk from a single mill.",
            ],
            [
              "Made to last",
              "Reinforced fold lines, replaceable brass hardware, and a repair service for the life of the garment. Send it back and we'll mend it.",
            ],
            [
              "Made with less",
              "Two silhouettes per piece means half the wardrobe. Offcuts go to our pouch programme; all packaging is unbleached and plastic-free.",
            ],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-xl border border-border/70 bg-background p-7">
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
        <div className="shell mt-12">
          <CtaLink to="/shop">Shop the collection</CtaLink>
        </div>
      </section>
    </>
  );
}
