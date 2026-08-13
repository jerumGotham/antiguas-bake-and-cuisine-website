import { NextResponse } from "next/server";

const businessRecipients = [
  { email: "jerumpgalang@gmail.com" },
  { email: "patriciamariz.antigua@gmail.com" },
];

type OrderRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiryType?: unknown;
  order?: unknown;
  notes?: unknown;
  website?: unknown;
};

function value(input: unknown, limit: number) {
  return typeof input === "string" ? input.trim().slice(0, limit) : "";
}

async function sendEmail(body: Record<string, unknown>) {
  return fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY ?? "",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestHost =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && requestHost && new URL(origin).host !== requestHost) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 },
    );
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!process.env.BREVO_API_KEY || !senderEmail) {
    return NextResponse.json(
      { error: "Order email is not configured yet." },
      { status: 503 },
    );
  }

  let payload: OrderRequest;
  try {
    payload = (await request.json()) as OrderRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid order details." },
      { status: 400 },
    );
  }

  if (value(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = value(payload.name, 120);
  const email = value(payload.email, 254);
  const phone = value(payload.phone, 40);
  const inquiryType = value(payload.inquiryType, 40);
  const order = value(payload.order, 2_000);
  const notes = value(payload.notes, 2_000);
  if (!name || !email.includes("@") || !phone || !order) {
    return NextResponse.json(
      { error: "Please complete your name, email, phone number, and order." },
      { status: 400 },
    );
  }

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Inquiry: ${inquiryType || "Order"}`,
    "",
    "Order:",
    order,
    notes ? `\nNotes:\n${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const notification = await sendEmail({
    sender: { email: senderEmail, name: "Antigua's Bake & Cuisine" },
    to: businessRecipients,
    replyTo: { email, name },
    subject: `New ${inquiryType || "order"} from ${name}`,
    textContent: details,
    tags: ["website-order"],
  });

  if (!notification.ok) {
    return NextResponse.json(
      {
        error: "We could not send your request. Please try Messenger instead.",
      },
      { status: 502 },
    );
  }

  await sendEmail({
    sender: { email: senderEmail, name: "Antigua's Bake & Cuisine" },
    to: [{ email, name }],
    subject: "We received your request",
    textContent: `Hi ${name},\n\nWe received your ${inquiryType || "order"} request. We will follow up using the contact details you provided.\n\nYour request:\n${order}${notes ? `\n\nNotes:\n${notes}` : ""}\n\nAntigua's Bake & Cuisine`,
    tags: ["website-order-confirmation"],
  });

  return NextResponse.json({ ok: true });
}
