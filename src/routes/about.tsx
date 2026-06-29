import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Award, Building2, HeartHandshake, Sparkles } from "lucide-react";
import heroImg from "@/assets/cat-ppe.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Healthy Fly — Surgical Distributors in Ahmedabad" },
      {
        name: "description",
        content:
          "Healthy Fly is a retail and wholesale surgical distributor based in Nava Wadaj, Ahmedabad. Learn about our mission, range and the customers we serve.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Customer-first service",
    body: "Hospitals, clinics and pharmacies trust us because we pick up the phone, honour quotes, and dispatch when we say we will.",
  },
  {
    icon: Award,
    title: "Quality without compromise",
    body: "We stock dressings, disposables and devices from established manufacturers — sterilisation, ply and material always match the spec.",
  },
  {
    icon: Building2,
    title: "Built for institutions",
    body: "From single-pack retail to bulk cartons for procurement teams, our pricing and packs scale with your order size.",
  },
  {
    icon: Sparkles,
    title: "A growing range",
    body: "Our catalogue grows with what our customers need — Famcare orthopedic supports, respiratory kits, monitoring lines and more.",
  },
];

function About() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 md:pt-10 md:pb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            About us
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
            A surgical distributor that treats every order like a patient's care depends on it.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Healthy Fly — <em>Celebrating Life</em> — is a retail and wholesale surgical distributor
            based in Nava Wadaj, Ahmedabad. We supply hospitals, nursing homes, clinics, pharmacies
            and procurement teams with sterile dressings, PPE, respiratory care, orthopedic supports
            and daily medical disposables.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={heroImg}
            alt="PPE and surgical supplies"
            width={900}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">Our promise</h2>
          <p className="mt-4 text-muted-foreground">
            Healthcare buyers don't have time for unreliable suppliers. That's why we keep our
            inventory deep on high-rotation items — gauze swabs, MOPs, crepe bandages, gloves, masks
            — and we maintain direct lines with the manufacturers behind the products we trust.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you're a single-doctor clinic ordering a carton of swabs, or a multi-speciality
            hospital with a monthly indent of 200+ SKUs, the person on the phone is the same. That's
            how we work.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-display text-2xl font-bold text-ink">200+</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground">SKUs</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold text-ink">10</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground">Categories</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold text-ink">B2B</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground">Pricing</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-ink">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-ink">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold">Ready to place your first indent?</h2>
              <p className="mt-2 max-w-xl text-sm opacity-80">
                Browse the full catalogue or send us your list — we'll reply with pack sizes and
                pricing.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/products"
                className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                View products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
