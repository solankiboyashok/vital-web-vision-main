import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Healthy Fly — Ahmedabad Surgical Distributor" },
      {
        name: "description",
        content:
          "Get in touch with Healthy Fly for surgical and healthcare supplies. Call +91 93285 63439 or email healthyflycelebratinglife@gmail.com.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(`Enquiry from ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name") ?? ""}\nEmail: ${data.get("email") ?? ""}\nPhone: ${data.get("phone") ?? ""}\n\nMessage:\n${data.get("message") ?? ""}`,
    );

    const mailto = `mailto:healthyflycelebratinglife@gmail.com?subject=${subject}&body=${body}`;

    try {
      const opened = window.open(mailto, "_self");
      setMailtoLink(mailto);
      setSuccessMessage(
        "Opening your email client... If it does not open, use the link below to send your enquiry.",
      );
      setErrorMsg(null);
      form.reset();

      if (!opened) {
        throw new Error("Unable to open mail client");
      }
    } catch (err) {
      setMailtoLink(mailto);
      setErrorMsg(
        "Could not open email client. Please copy-and-paste this link into your browser:",
      );
      setSuccessMessage(null);
    }
  };

  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Contact
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
            Tell us what you need — we'll quote the same day.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="grid gap-5">
          {[
            {
              icon: Phone,
              label: "Call",
              value: "+91 9328563439",
              href: "tel:+91 9328563439",
            },
            {
              icon: Mail,
              label: "Email",
              value: "healthyflycelebratinglife@gmail.com",
              href: "mailto:healthyflycelebratinglife@gmail.com",
            },
            {
              icon: Globe,
              label: "Web",
              value: "www.healthyfly.com",
              href: "https://www.healthyfly.com",
            },
            {
              icon: MapPin,
              label: "Visit",
              value: "Nava Wadaj, Ahmedabad — 380013, Gujarat",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="grid gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-ink">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="break-words font-display text-base font-semibold text-ink hover:text-brand"
                  >
                    {c.value}
                  </a>
                ) : (
                  <div className="font-display text-base font-semibold text-ink">{c.value}</div>
                )}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">GSTIN</div>
            <div className="mt-1 font-mono text-ink">24BKEPC6994A1ZE</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-6 md:p-8"
        >
          <h2 className="font-display text-2xl font-bold text-ink">Send an enquiry</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your indent or query. We'll get back the same business day.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Name
              </span>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone
              </span>
              <input
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Submit
          </button>
          {errorMsg ? (
            <p className="mt-3 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {errorMsg}
            </p>
          ) : successMessage ? (
            <div className="mt-3 space-y-3 rounded-2xl border border-brand/10 bg-brand-soft/10 px-4 py-3 text-sm text-ink">
              <p>{successMessage}</p>
              {mailtoLink ? (
                <a href={mailtoLink} className="font-semibold text-brand underline">
                  Open email client manually
                </a>
              ) : null}
            </div>
          ) : null}
        </form>
      </section>
    </>
  );
}
