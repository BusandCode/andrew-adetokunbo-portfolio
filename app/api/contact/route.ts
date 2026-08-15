import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No key configured yet — fail loudly in dev instead of pretending to send.
    console.error("RESEND_API_KEY is not set. Add it to .env.local to enable the contact form.");
    return NextResponse.json({ error: "Email is not configured yet" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "adetokunboandrew2@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
