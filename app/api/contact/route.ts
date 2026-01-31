import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(v: unknown) {
  return String(v ?? "").trim();
}

function isEmail(s: string) {
  return s.includes("@") && s.includes(".");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body?.name);
    const email = clean(body?.email);
    const phone = clean(body?.phone);
    const service = clean(body?.service);
    const language = clean(body?.language);
    const message = clean(body?.message);

    // Honeypot (optional but recommended)
    const honey = clean(body?.company);
    if (honey) {
      return NextResponse.json({ ok: true }); // pretend success for bots
    }

    // Validation
    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    // Env sanity check (helps debugging)
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { ok: false, error: "missing_env" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: 465,
      secure: true,                // SSL
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, // App Password
      },
    });

    await transporter.verify();


    const to = process.env.CONTACT_TO || SMTP_USER;
    const from = process.env.SMTP_FROM || SMTP_USER;
    const replyTo = process.env.CONTACT_REPLYTO || from;

    // 1) Internal mail to your inbox
    await transporter.sendMail({
      from,
      to,
      replyTo: email, // when you hit "reply" it goes to the visitor
      subject: `New website request${service ? `: ${service}` : ""}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone || "-"}\n` +
        `Service: ${service || "-"}\n` +
        `Preferred language: ${language || "-"}\n\n` +
        `Message:\n${message}\n`,
    });

    // 2) Auto-confirmation to the visitor (premium touch)
    await transporter.sendMail({
      from,       // admin@... (or whichever you set in SMTP_FROM)
      to: email,
      replyTo,    // your contact mailbox (admin@... in your env right now)
      subject: "We received your request",
      text:
        `Hello ${name},\n\n` +
        `Thank you for your message. We received your request and will get back to you as soon as possible.\n` +
        `Typical response time is within 24 hours.\n\n` +
        `Best regards,\n` +
        `Medina Stay\n` +
        `${replyTo}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}

// Optional: makes GET /api/contact not show 405 in browser
export function GET() {
  return NextResponse.json({ ok: true, info: "Use POST to send messages." });
}
