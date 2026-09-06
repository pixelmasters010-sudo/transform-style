import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, type Category } from "@/lib/catalogue";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHead } from "@/components/site/ui-bits";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop All Convertible Garments — Volant London" },
      {
        name: "description",
        content:
          "Browse Volant's collection of convertible shirts and dresses, made in Britain from cotton poplin, lambswool, silk and merino.",
      },
      { property: "og:title", content: "Shop All Convertible Garments — Volant London" },
      {
        property: "og:description",
        content: "Convertible shirts and dresses, made in Britain. Prices in GBP.",
      },
    ],
  }),
  component: Shop,
});

const filters: Array<"All" | Category> = ["All", "Shirts", "Dresses", "Convertible"];

function Shop() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? products : products.filter((p) => p.categories.includes(active));

  return (
    <div className="section shell">
      <SectionHead
        eyebrow="The collection"
        title="Every piece, both ways"
        intro="Eight garments in the current run. Hover or tap a card to see the second silhouette."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-md border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.18em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              active === f
                ? "border-primary/60 bg-primary/12 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
