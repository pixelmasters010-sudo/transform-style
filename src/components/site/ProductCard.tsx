import { Link } from "@tanstack/react-router";
import { gbp } from "@/lib/cart";
import type { Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  const second = product.images[1] ?? product.images[0];
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block overflow-hidden rounded-xl border border-border/70 bg-surface transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
        <img
          src={product.images[0]}
          alt={`${product.name} in its ${product.states[0].toLowerCase()} state`}
          loading="lazy"
          width={900}
          height={1200}
          className="h-full w-full object-cover transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0"
        />
        <img
          src={second}
          alt={`${product.name} in its ${product.states[1].toLowerCase()} state`}
          loading="lazy"
          width={900}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/75 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-primary backdrop-blur">
          {product.states[0]} → {product.states[1]}
        </span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-lg">{product.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
        </div>
        <p className="shrink-0 text-sm text-primary">{gbp(product.price)}</p>
      </div>
    </Link>
  );
}
