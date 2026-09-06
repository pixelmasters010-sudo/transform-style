import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/how-it-transforms", label: "How It Transforms" },
  { to: "/our-story", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="min-w-0 font-display text-xl tracking-[0.28em] uppercase text-foreground transition-colors hover:text-primary"
        >
          Volant
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-4">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open bag"
            className="relative text-foreground transition-colors duration-300 hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-[0.6rem] text-primary-foreground">
                {count}
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label="Toggle menu"
            className="text-foreground transition-colors hover:text-primary lg:hidden"
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menu ? (
        <nav className="border-t border-border/70 bg-surface lg:hidden">
          <div className="shell flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenu(false)}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/50 py-4 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors last:border-0 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
