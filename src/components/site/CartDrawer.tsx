import { X } from "lucide-react";
import { gbp, useCart } from "@/lib/cart";
import { CtaButton } from "./ui-bits";

export function CartDrawer() {
  const { open, setOpen, lines, remove, subtotal } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-sm flex-col border-l border-border bg-surface transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Your bag</p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close bag"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your bag is empty. Every piece we make does the work of two.
            </p>
          ) : (
            <ul className="space-y-5">
              {lines.map((l) => (
                <li key={`${l.slug}-${l.size}`} className="flex gap-4">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    width={90}
                    height={120}
                    className="h-24 w-18 shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{l.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Size {l.size} · Qty {l.qty}
                    </p>
                    <button
                      onClick={() => remove(l.slug, l.size)}
                      className="mt-2 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="shrink-0 text-sm text-primary">{gbp(l.price * l.qty)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-primary">{gbp(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Shipping and duties calculated at checkout.
          </p>
          <CtaButton className="mt-5 w-full" disabled={lines.length === 0}>
            Checkout
          </CtaButton>
        </div>
      </aside>
    </>
  );
}
