import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { getProduct, products, HERO_VIDEO_URL } from "@/lib/catalogue";
import { gbp, useCart } from "@/lib/cart";
import { CtaButton } from "@/components/site/ui-bits";
import { ProductCard } from "@/components/site/ProductCard";
import { cn } from "@/lib/utils";

const sizes = ["UK 6", "UK 8", "UK 10", "UK 12", "UK 14", "UK 16"];

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Volant" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Volant London`;
    return {
      meta: [
        { title },
        { name: "description", content: product.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: product.tagline },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [image, setImage] = useState(0);
  const [size, setSize] = useState(sizes[2] as string);
  const [zoom, setZoom] = useState(false);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="section shell">
      <nav className="mb-8 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/shop" className="transition-colors hover:text-primary">
          Collection
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Gallery */}
        <div>
          <div
            onClick={() => setZoom((v) => !v)}
            className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-xl border border-border/70 bg-surface"
          >
            <img
              src={product.images[image]}
              alt={`${product.name}, view ${image + 1}`}
              width={900}
              height={1200}
              className={cn(
                "h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                zoom ? "scale-[1.75]" : "scale-100",
              )}
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-background/75 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              {zoom ? "Click to reset" : "Click to zoom"}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => {
                  setImage(i);
                  setZoom(false);
                }}
                className={cn(
                  "overflow-hidden rounded-md border transition-colors duration-300",
                  i === image ? "border-primary/70" : "border-border hover:border-primary/40",
                )}
              >
                <img
                  src={src}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  loading="lazy"
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
            <video
              className="aspect-video w-full object-cover"
              src={HERO_VIDEO_URL}
              poster={product.images[0]}
              muted
              loop
              playsInline
              controls
              preload="none"
              aria-label={`${product.name} transformation clip`}
            />
            <p className="bg-surface px-4 py-3 text-xs text-muted-foreground">
              The transformation, filmed in the studio — {product.states[0].toLowerCase()} to{" "}
              {product.states[1].toLowerCase()}.
            </p>
          </div>
        </div>

        {/* Detail */}
        <div>
          <p className="eyebrow">
            {product.states[0]} → {product.states[1]}
          </p>
          <h1 className="mt-3 text-3xl md:text-[2.5rem]">{product.name}</h1>
          <p className="mt-3 text-lg text-primary">{gbp(product.price)}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {product.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="text-foreground">Materials:</span> {product.materials}
          </p>

          <div className="mt-8">
            <p className="eyebrow">Select size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "rounded-md border px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.14em] transition-all duration-300",
                    s === size
                      ? "border-primary/60 bg-primary/12 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <CtaButton
            className="mt-8 w-full sm:w-auto sm:min-w-64"
            onClick={() => {
              add(product, size);
              toast.success(`${product.name} added to your bag.`);
            }}
          >
            Add to bag
          </CtaButton>

          <div className="mt-10 space-y-4">
            <Detail title="How it transforms">
              <ol className="space-y-2">
                {product.transformation.map((step, i) => (
                  <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                    <span className="text-primary">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Detail>
            <Detail title="Size &amp; fit">
              <p>{product.fit}</p>
            </Detail>
            <Detail title="Care">
              <p>{product.care}</p>
            </Detail>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-2xl md:text-3xl">You may also like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-border/70 bg-surface px-5 py-4 transition-colors duration-300 hover:border-primary/35">
      <summary className="cursor-pointer list-none text-[0.7rem] uppercase tracking-[0.18em] text-foreground marker:hidden">
        {title}
        <span className="float-right text-primary transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </details>
  );
}
