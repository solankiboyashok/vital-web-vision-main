import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Truck,
  Stethoscope,
  HeartPulse,
  PackageCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-supplies.jpg";
import catDressings from "@/assets/cat-dressings.jpg";
import catBandages from "@/assets/cat-bandages.jpg";
import catPpe from "@/assets/cat-ppe.jpg";
import catOrtho from "@/assets/cat-ortho.jpg";
import catRespiratory from "@/assets/cat-respiratory.jpg";
import catDiagnostic from "@/assets/cat-diagnostic.jpg";
import { categories } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthy Fly — Surgical & Healthcare Distributors, Ahmedabad" },
      {
        name: "description",
        content:
          "Retail and wholesale distributor of surgical dressings, PPE, respiratory care, orthopedic supports and disposables. Based in Nava Wadaj, Ahmedabad.",
      },
      { property: "og:title", content: "Healthy Fly — Celebrating Life" },
      {
        property: "og:description",
        content:
          "Trusted Ahmedabad-based supplier of surgical, healthcare and disposable medical products.",
      },
    ],
  }),
  component: Index,
});

const categoryImages: Record<string, string> = {
  "gauze-swabs": catDressings,
  "abdominal-pads": catDressings,
  bandages: catBandages,
  "specialty-dressings": catBandages,
  "ppe-apparel": catPpe,
  respiratory: catRespiratory,
  "iv-catheters": catRespiratory,
  "ortho-supports": catOrtho,
  "mobility-aids": catOrtho,
  "diagnostic-firstaid": catDiagnostic,
};

const stats = [
  { value: "200+", label: "Product SKUs" },
  { value: "10", label: "Category lines" },
  { value: "PAN", label: "India dispatch" },
  { value: "B2B", label: "Pricing on call" },
];

const usps = [
  {
    icon: ShieldCheck,
    title: "Quality you can trust",
    body: "Gamma-sterile and ETO-sterile dressings from established manufacturers, with full batch traceability.",
  },
  {
    icon: Truck,
    title: "Reliable wholesale supply",
    body: "Consistent stock of high-rotation surgical disposables for hospitals, clinics, nursing homes and pharmacies.",
  },
  {
    icon: PackageCheck,
    title: "Retail-friendly packs",
    body: "Pouch packs, blister packs and bulk cartons — pick the format that fits your shelf or your OT trolley.",
  },
  {
    icon: HeartPulse,
    title: "Celebrating life, daily",
    body: "From neonatal cannulas to mobility aids — we cover the full care journey, not just the easy items.",
  },
];

function Index() {
  const highlight = categories.slice(0, 6);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-background" />
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 pt-6 pb-10 md:grid-cols-2 md:pt-8 md:pb-16 min-h-[24rem] sm:min-h-[30rem] md:min-h-[42rem]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink">
              <Stethoscope className="h-3.5 w-3.5 text-brand" />
              Retail & Wholesale Surgical Distributors
            </span>
            <h1 className="mt-6 font-display text-3xl font-bold leading-[1.05] text-ink sm:text-4xl md:text-6xl">
              Healthcare supplies,{" "}
              <span className="bg-gradient-to-r from-brand to-[oklch(0.62_0.18_220)] bg-clip-text text-transparent">
                delivered with care.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
              Healthy Fly is an Ahmedabad-based distributor of surgical dressings, PPE, respiratory
              care, orthopedic supports and everyday medical disposables — for hospitals, clinics
              and pharmacies that can't afford to run out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919328563439"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> Request a quote
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-ink">{s.value}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex h-full flex-col">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/20 blur-3xl" />
            <div className="overflow-hidden h-full rounded-[2rem] border border-border shadow-xl">
              <img
                src={heroImg}
                alt="Assortment of surgical supplies including gauze, bandages and gloves"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-white p-4 shadow-lg md:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink">Celebrating Life</div>
                  <div className="text-xs text-muted-foreground">
                    Serving Ahmedabad since day one
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-14 md:grid-cols-4">
          {usps.map((u) => (
            <div key={u.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-ink">
                <u.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              What we supply
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
              Built for every shelf in the hospital.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            View full catalogue →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlight.map((c) => (
            <Link
              key={c.slug}
              to="/products"
              hash={c.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-brand hover:shadow-md"
            >
              <div className="aspect-[5/3] overflow-hidden bg-secondary">
                <img
                  src={categoryImages[c.slug]}
                  alt={c.name}
                  loading="lazy"
                  width={900}
                  height={540}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  See items <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA band removed per request */}
    </>
  );
}
