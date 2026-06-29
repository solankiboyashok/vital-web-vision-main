import { Link, Outlet } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

function Logo() {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-3">
      {!imgError ? (
        <img
          src="/logo.png"
          alt="Healthy Fly"
          onError={() => setImgError(true)}
          className="h-12 w-auto object-contain"
        />
      ) : null}

      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-ink">HEALTHY FLY</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Celebrating Life</span>
      </span>
    </Link>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:py-4">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-ink [&.active]:text-ink"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            
            <a
              href="tel:+919328563439"
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
            >
              Call 9328563439
            </a>
            <a
              href="tel:+919328563439"
              aria-label="Call Healthy Fly"
              className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-foreground sm:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border/60 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-muted-foreground [&.active]:text-ink"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile sticky action bar */}
      <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <div
          className="grid grid-cols-3 text-xs font-semibold"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <a
            href="tel:+919328563439"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink"
          >
            <Phone className="h-4 w-4 text-brand" />
            Call
          </a>
          <a
            href="https://wa.me/919328563439?text=Hi%20Healthy%20Fly%2C%20I%27d%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 border-x border-border py-2.5 text-ink"
          >
            <MessageCircle className="h-4 w-4 text-brand" />
            WhatsApp
          </a>
          <a
            href="/contact"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink"
          >
            <Mail className="h-4 w-4 text-brand" />
            Enquire
          </a>
        </div>
      </div>

      <footer className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-foreground">
                <Heart className="h-4 w-4 fill-current" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-base font-bold">HEALTHY FLY</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                  Celebrating Life
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm opacity-80">
              Retail and wholesale surgical & healthcare distributors based in Ahmedabad, supplying
              hospitals, clinics and pharmacies across India.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-70">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand" />
                <a href="tel:+919328563439" className="hover:underline">
                  +91 93285 63439
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand" />
                <a
                  href="mailto:healthyflycelebratinglife@gmail.com"
                  className="hover:underline break-all"
                >
                  healthyflycelebratinglife@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                <span>Nava Wadaj, Ahmedabad — 380013, Gujarat, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-70">Business</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              <li>GSTIN: 24BKEPC6994A1ZE</li>
              <li>Retail & Wholesale Surgical Distributors</li>
              <li>Mon – Sat · 10:00 – 20:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs opacity-70 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Healthy Fly. All rights reserved.</span>
            <span>Designed with care for healthcare professionals.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
