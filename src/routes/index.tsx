import * as React from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  "abdominal-pads": catBandages,
  bandages: heroImg,
  "specialty-dressings": catPpe,
  "ppe-apparel": catPpe,
  respiratory: catRespiratory,
  "iv-catheters": catDiagnostic,
  "ortho-supports": catOrtho,
  "mobility-aids": catDressings,
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

const slides = [
  {
    image: heroImg,
    title: "Trusted surgical supplies",
    description: "Hospital-grade dressings, PPE and disposables from Ahmedabad's reliable supplier.",
    alt: "Surgical supplies displayed on a clean white background.",
  },
  {
    image: catPpe,
    title: "Protective gear for every team",
    description: "PPE kits, gloves and protective apparel designed for frontline care.",
    alt: "Protective apparel and PPE displayed in a clean environment.",
  },
  {
    image: catBandages,
    title: "Wound care and bandages",
    description: "A full range of advanced dressings, bandages and first-aid disposables.",
    alt: "Various bandages and wound-care products arranged neatly.",
  },
  {
    image: catOrtho,
    title: "Orthopedic supports and mobility aids",
    description: "Braces, supports and mobility equipment for stronger recovery.",
    alt: "Orthopedic supports and walking aids on display.",
  },
];

function Index() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
  const [selectedSlide, setSelectedSlide] = React.useState(0);
  const [productSliderApi, setProductSliderApi] = React.useState<CarouselApi | null>(null);
  const [selectedProductSlide, setSelectedProductSlide] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const productsRef = React.useRef<HTMLElement | null>(null);
  const highlight = categories;
  const selectedCategoryData = selectedCategory
    ? categories.find((category) => category.slug === selectedCategory)
    : null;

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelected = () => {
      setSelectedSlide(carouselApi.selectedScrollSnap());
    };

    updateSelected();
    carouselApi.on("select", updateSelected);

    return () => {
      carouselApi.off("select", updateSelected);
    };
  }, [carouselApi]);

  React.useEffect(() => {
    if (!productSliderApi) {
      return;
    }

    const updateSelected = () => {
      setSelectedProductSlide(productSliderApi.selectedScrollSnap());
    };

    updateSelected();
    productSliderApi.on("select", updateSelected);

    return () => {
      productSliderApi.off("select", updateSelected);
    };
  }, [productSliderApi]);

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
            <Carousel
              className="relative h-full"
              autoplay
              autoplayInterval={4500}
              pauseOnHover
              setApi={setCarouselApi}
              opts={{ align: "start", containScroll: "keepSnaps", loop: true }}
            >
              <CarouselContent className="h-full min-h-[24rem]">
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden h-full rounded-[2rem] border border-border shadow-xl">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        width={1600}
                        height={1200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    selectedSlide === index ? "bg-brand" : "bg-white/70"
                  }`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
              Browse our full catalogue in a slider.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            View full catalogue →
          </Link>
        </div>

        <div className="relative mt-10 group">
          <Carousel
            className="overflow-visible"
            autoplay
            autoplayInterval={4000}
            pauseOnHover
            setApi={setProductSliderApi}
            opts={{ align: "start", containScroll: "keepSnaps", loop: true }}
          >
            <CarouselContent className="flex gap-6 pb-8">
              {highlight.map((c) => (
                <CarouselItem key={c.slug} className="min-w-[22rem] max-w-[22rem]">
                  <div className="group block overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:border-brand hover:shadow-lg">
                    <div className="relative overflow-hidden bg-secondary">
                      <img
                        src={categoryImages[c.slug]}
                        alt={c.name}
                        loading="lazy"
                        width={900}
                        height={540}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand shadow-sm">
                        {c.items.length} products
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">{c.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
                          {c.blurb}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-2 text-sm font-semibold text-brand">
                          Ask for availability
                        </span>
                        <span className="text-sm font-semibold text-brand">
                          {c.items.length} products listed
                        </span>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(c.slug);
                            productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-brand/90"
                        >
                          Browse <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="h-11 w-11 rounded-full bg-white shadow-sm text-brand transition hover:bg-brand/10" />
              <CarouselNext className="h-11 w-11 rounded-full bg-brand text-white shadow-sm transition hover:bg-brand/90" />
            </div>
          </Carousel>
        </div>
      </section>

      {selectedCategoryData ? (
        <section ref={productsRef} className="mx-auto max-w-6xl px-5 pb-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-white/80 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="bg-gradient-to-r from-brand/10 via-background/80 to-brand/10 px-6 py-8 sm:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    Selected category
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
                    {selectedCategoryData.name}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                    {selectedCategoryData.blurb}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-secondary"
                >
                  Hide products
                </button>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedCategoryData.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] border border-border bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Option {index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA band removed per request */}
    </>
  );
}
