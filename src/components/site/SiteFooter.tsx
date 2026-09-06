import { Link } from "@tanstack/react-router";
import { journal, products } from "@/lib/catalogue";
import { Newsletter } from "./Newsletter";

const instagram = [
  products[0].images[0],
  products[1].images[1],
  products[2].images[1],
  journal[0].image,
  products[4].images[1],
  journal[2].image,
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="shell py-14">
        <p className="eyebrow">@volant.london</p>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {instagram.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="overflow-hidden rounded-md"
            >
              <img
                src={src}
                alt="Volant on Instagram"
                loading="lazy"
                width={300}
                height={300}
                className="aspect-square w-full object-cover opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-100"
              />
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-border/60 pt-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.28em]">Volant</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Transformative garments, made in Britain. One piece, two lives — join us for new
              releases and workshop notes.
            </p>
            <div className="mt-5">
              <Newsletter compact />
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p className="eyebrow">Shop</p>
            <Link to="/shop" className="transition-colors hover:text-primary">
              All garments
            </Link>
            <Link to="/how-it-transforms" className="transition-colors hover:text-primary">
              How it transforms
            </Link>
            <Link to="/journal" className="transition-colors hover:text-primary">
              Journal
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p className="eyebrow">House</p>
            <Link to="/our-story" className="transition-colors hover:text-primary">
              Our story
            </Link>
            <Link to="/contact" className="transition-colors hover:text-primary">
              Contact &amp; stockists
            </Link>
            <span>Shipping &amp; returns</span>
            <span>Terms · Privacy</span>
          </nav>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Volant London. Concept site — placeholder content.
        </p>
      </div>
    </footer>
  );
}
