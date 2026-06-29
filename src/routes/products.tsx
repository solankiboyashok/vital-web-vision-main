import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { categories } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Healthy Fly Surgical Distributors" },
      {
        name: "description",
        content:
          "Browse our full catalogue of surgical dressings, bandages, PPE, respiratory care, orthopedic supports, IV sets and medical disposables.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;

    const query = search.trim().toLowerCase();

    return categories
      .map((category) => {
        const categoryMatches =
          category.name.toLowerCase().includes(query) ||
          category.blurb.toLowerCase().includes(query);

        const filteredItems = categoryMatches
          ? category.items
          : category.items.filter((item) => item.toLowerCase().includes(query));

        if (categoryMatches || filteredItems.length > 0) {
          return {
            ...category,
            items: filteredItems,
          };
        }

        return null;
      })
      .filter(
        (category): category is (typeof categories)[number] =>
          category !== null && category.items.length > 0,
      );
  }, [search]);

  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Catalogue
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
            Surgical, healthcare & disposable products.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A working overview of what we stock. Pack sizes and bulk pricing on request — call{" "}
            <a href="tel:+919328563439" className="font-semibold text-ink underline">
              +91 93285 63439
            </a>{" "}
            or email{" "}
            <a
              href="mailto:healthyflycelebratinglife@gmail.com"
              className="font-semibold text-ink underline"
            >
              healthyflycelebratinglife@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Search products
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Find the item you need quickly.
            </h2>
          </div>
          <label className="relative w-full sm:w-96">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, category or description"
              className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>
        </div>

        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink transition hover:border-brand hover:bg-brand-soft/40 sm:rounded-xl sm:whitespace-normal sm:py-3"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-5 pb-20">
        {filteredCategories.map((c) => (
          <div
            key={c.slug}
            id={c.slug}
            className="scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-6 md:p-10"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Category
                </span>
                <h2 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl md:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{c.blurb}</p>
              </div>
              <a
                href="tel:+919328563439"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:px-4"
              >
                <Phone className="h-3.5 w-3.5" /> Enquire
              </a>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-secondary/50 px-4 py-3 text-sm text-ink"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-muted-foreground">
            Don't see what you need? We regularly source additional surgical and healthcare items on
            request.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Request a product
          </Link>
        </div>
      </section>
    </>
  );
}
