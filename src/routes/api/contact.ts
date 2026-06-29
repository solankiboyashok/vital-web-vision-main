import "dotenv/config";
import { createFileRoute } from "@tanstack/react-router";

async function saveSubmission(subject: string, body: string) {
  const entry = `${new Date().toISOString()}\nSubject: ${subject}\n${body}\n---\n`;

  try {
    const { appendFile } = await import("node:fs/promises");
    await appendFile("contact-submissions.log", entry, "utf8");
  } catch (error) {
    console.info("Contact submission fallback", entry);
    console.warn("Unable to append contact submission log", error);
  }
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const data = await request.json();
          const name = data.name ?? "";
          const email = data.email ?? "";
          const phone = data.phone ?? "";
          const message = data.message ?? "";

          const subject = `Enquiry from ${name}`;
          const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

          const toEmail = process.env.CONTACT_TO_EMAIL ?? "healthyflycelebratinglife@gmail.com";
          const smtpHost = process.env.SMTP_HOST;
          const smtpPort = Number(process.env.SMTP_PORT ?? 0) || undefined;
          const smtpUser = process.env.SMTP_USER;
          const smtpPass = process.env.SMTP_PASS;
          const smtpDebug = process.env.SMTP_DEBUG === "true";
          // Use SMTP authenticated user as the "from" address where possible to avoid Gmail rejecting the sender
          const fromEmail =
            process.env.FROM_EMAIL ?? smtpUser ?? email ?? "no-reply@healthyfly.com";

          if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
            await saveSubmission(subject, body);

            return new Response(JSON.stringify({ ok: true, provider: "local-log" }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          try {
            const nodemailer = await import("nodemailer");
            const transporter = nodemailer.createTransport({
              host: smtpHost,
              port: smtpPort,
              secure: smtpPort === 465,
              auth: { user: smtpUser, pass: smtpPass },
              logger: smtpDebug,
              debug: smtpDebug,
            });

            // Verify connection and authentication early to give clearer errors
            try {
              await transporter.verify();
            } catch (verifyErr) {
              console.error("SMTP verify failed", verifyErr);
              return new Response(
                JSON.stringify({
                  ok: false,
                  error:
                    "SMTP verification failed. Check SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS and ensure Gmail App Password is used.",
                }),
                {
                  status: 500,
                  headers: { "Content-Type": "application/json" },
                },
              );
            }

            await transporter.sendMail({
              from: fromEmail,
              to: toEmail,
              subject,
              text: body,
            });

            return new Response(JSON.stringify({ ok: true, provider: "smtp" }), {
              headers: { "Content-Type": "application/json" },
            });
          } catch (smtpErr) {
            console.error("SMTP send failed", smtpErr);
            return new Response(
              JSON.stringify({
                ok: false,
                error: `Failed to send email: ${errorMessage(smtpErr)}`,
              }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              },
            );
          }
        } catch (err) {
          return new Response(JSON.stringify({ ok: false, error: errorMessage(err) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
