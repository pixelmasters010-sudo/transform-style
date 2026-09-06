import { createFileRoute, Link } from "@tanstack/react-router";
import { HERO_VIDEO_URL, products } from "@/lib/catalogue";
import heroPoster from "@/assets/hero-poster.jpg";
import fabricDetail from "@/assets/journal-2.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaLink, SectionHead } from "@/components/site/ui-bits";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volant London — One Garment, Two Lives" },
      {
        name: "description",
        content:
          "British-made convertible clothing: a poplin shirt that folds into a shirt dress, a lambswool coat that becomes a midi. Shop the collection.",
      },
      { property: "og:title", content: "Volant London — One Garment, Two Lives" },
      {
        property: "og:description",
        content: "British-made convertible clothing. Shop shirts, dresses and convertibles.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_URL}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="A shirt on a mannequin being folded and clasped into a shirt dress"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
        <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-24">
          <div className="fade-up max-w-xl">
            <p className="eyebrow">Made in Britain</p>
            <h1 className="mt-4 text-4xl leading-[1.1] md:text-6xl">
              One garment.
              <br />
              Two lives.
            </h1>
            <div className="mt-8">
              <CtaLink to="/shop">Shop the collection</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section shell">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHead
            eyebrow="The collection"
            title="Pieces that earn their place twice"
            intro="Eight garments, each engineered to hold two finished silhouettes. Hover to see the second."
          />
          <Link
            to="/shop"
            className="text-[0.7rem] uppercase tracking-[0.18em] text-primary underline-offset-8 transition-colors duration-300 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* How it transforms */}
      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-xl border border-border/70">
            <img
              src={fabricDetail}
              alt="Hands folding a wool panel and closing a small brass clasp"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHead
              eyebrow="How it transforms"
              title="Folded, clasped, done"
              intro="No zips down the back, no undressing in a changing room. Each piece works like a well-made hinge: panels fold along pressed lines, brass clasps take the load, and the second silhouette settles in under a minute."
            />
            <ol className="mt-8 space-y-5">
              {[
                ["01", "Release", "Unhook the concealed clasps along the side seam."],
                ["02", "Fold", "Guide the panel along its pressed line — it holds its shape."],
                ["03", "Fasten", "Set the waist tie, and the new silhouette is finished."],
              ].map(([n, title, copy]) => (
                <li key={n} className="grid grid-cols-[auto_minmax(0,1fr)] gap-5">
                  <span className="text-sm text-primary">{n}</span>
                  <div className="min-w-0">
                    <p className="text-base">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-9">
              <CtaLink to="/how-it-transforms" variant="outline">
                See the mechanism
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="section shell text-center">
        <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed md:text-4xl">
          "We started with one question: why should a good garment only know how to be one thing?"
        </p>
        <div className="mt-8">
          <Link
            to="/our-story"
            className="text-[0.7rem] uppercase tracking-[0.18em] text-primary underline-offset-8 transition-colors duration-300 hover:underline"
          >
            Read our story
          </Link>
        </div>
      </section>

      {/* Signup */}
      <section className="pb-24">
        <div className="shell rounded-xl border border-border/70 bg-surface px-6 py-12 md:px-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <SectionHead
              eyebrow="Stay close"
              title="New releases, first"
              intro="A short letter each month: what's on the cutting table, what's returning, and the occasional workshop note."
            />
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
