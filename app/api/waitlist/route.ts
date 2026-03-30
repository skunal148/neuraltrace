import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const { name, email, company, role, message } = body as {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    message?: string;
  };

  // Validate required fields
  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const sanitized = {
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || null,
    role: role?.trim() || null,
    message: message?.trim() || null,
  };

  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "UTC",
  });

  // Build field rows
  const fieldRow = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 0; color:#8888a0; font-size:14px; width:120px; vertical-align:top;">${label}</td>
      <td style="padding:8px 0; color:#e8e8f0; font-size:14px;">${value}</td>
    </tr>`;

  let fieldsHtml = fieldRow("Name", sanitized.name);
  fieldsHtml += fieldRow("Email", `<a href="mailto:${sanitized.email}" style="color:#00ff6a; text-decoration:none;">${sanitized.email}</a>`);
  if (sanitized.company) fieldsHtml += fieldRow("Company", sanitized.company);
  if (sanitized.role) fieldsHtml += fieldRow("Role", sanitized.role);
  if (sanitized.message) fieldsHtml += fieldRow("Message", sanitized.message.replace(/\n/g, "<br>"));

  const html = `
<div style="background:#08080c; padding:40px; font-family:Arial,sans-serif;">
  <div style="max-width:560px; margin:0 auto; background:#12121c; border-radius:16px; border:1px solid #1f1f30; overflow:hidden;">
    <div style="padding:24px 32px; border-bottom:1px solid #1f1f30;">
      <h1 style="color:#00ff6a; font-size:20px; margin:0;">NeuralTrace Waitlist</h1>
      <p style="color:#8888a0; font-size:14px; margin:4px 0 0;">New signup received</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%; border-collapse:collapse;">
        ${fieldsHtml}
      </table>
    </div>
    <div style="padding:16px 32px; border-top:1px solid #1f1f30;">
      <p style="color:#55556a; font-size:12px; margin:0;">Submitted at ${timestamp} (UTC)</p>
    </div>
  </div>
</div>`.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: `[NeuralTrace Waitlist] New signup: ${sanitized.name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Waitlist] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
