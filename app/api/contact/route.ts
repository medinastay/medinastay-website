import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(s: string) {
  return typeof s === "string" && s.includes("@") && s.includes(".");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const service = String(body?.service || "").trim();
    const language = String(body?.language || "").trim();
    const message = String(body?.message || "").trim();

    // Simple validation
    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    // Basic anti-spam (optional but recommended)
    const honey = String(body?.company || "").trim(); // hidden field in your form
    if (honey) {
      return NextResponse.json({ ok: true }); // pretend success
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "contact@medina-stay.com";
    const from = process.env.SMTP_FROM || process.env.SMTP_USER || "contact@medina-stay.com";

    await transporter.sendMail({
      from,
      to,
      replyTo: email, // so you can hit "reply" and it goes to the visitor
      subject: `Medina Stay contact request${service ? `: ${service}` : ""}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone || "-"}\n` +
        `Service: ${service || "-"}\n` +
        `Preferred language: ${language || "-"}\n\n` +
        `Message:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
