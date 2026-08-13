"use client";

import { type FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  inquiryType: "Order",
  order: "",
  notes: "",
  website: "",
};

export function OrderForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  function update(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(result.error ?? "We could not send your request.");
      setStatus("error");
      return;
    }

    setStatus("sent");
    setForm(initialState);
  }

  if (status === "sent") {
    return (
      <div className="border border-primary bg-card p-6 shadow-[7px_7px_0_color-mix(in_srgb,var(--primary)_35%,transparent)]">
        <h2 className="font-heading text-3xl font-semibold">
          Request received.
        </h2>
        <p className="mt-3 leading-6 text-foreground/80">
          A confirmation has been sent to your email. We will follow up using
          the details you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 border border-border/35 bg-card p-5 shadow-[8px_8px_0_color-mix(in_srgb,var(--primary)_30%,transparent)] sm:p-7"
      onSubmit={submit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold">
          Name
          <input
            className="w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
            name="name"
            onChange={(event) => update("name", event.target.value)}
            required
            value={form.name}
          />
        </label>
        <label className="space-y-2 text-sm font-semibold">
          Email
          <input
            className="w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
            name="email"
            onChange={(event) => update("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-semibold">
        Phone number
        <input
          className="w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
          name="phone"
          onChange={(event) => update("phone", event.target.value)}
          required
          type="tel"
          value={form.phone}
        />
      </label>
      <label className="block space-y-2 text-sm font-semibold">
        Delivery address
        <textarea
          className="min-h-24 w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
          name="address"
          onChange={(event) => update("address", event.target.value)}
          placeholder="House or unit number, street, barangay, city"
          required
          value={form.address}
        />
      </label>
      <label className="block space-y-2 text-sm font-semibold">
        Request type
        <select
          className="w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
          name="inquiryType"
          onChange={(event) => update("inquiryType", event.target.value)}
          value={form.inquiryType}
        >
          <option>Order</option>
          <option>Reseller inquiry</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm font-semibold">
        Order or inquiry details
        <textarea
          className="min-h-32 w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
          name="order"
          onChange={(event) => update("order", event.target.value)}
          placeholder="List the items, sizes, quantities, and preferred date."
          required
          value={form.order}
        />
      </label>
      <label className="block space-y-2 text-sm font-semibold">
        Additional notes{" "}
        <span className="font-normal text-foreground/65">(optional)</span>
        <textarea
          className="min-h-24 w-full border border-border/45 bg-background px-3 py-3 font-normal outline-none focus:border-primary"
          name="notes"
          onChange={(event) => update("notes", event.target.value)}
          value={form.notes}
        />
      </label>
      <label className="sr-only" htmlFor="website">
        Website
      </label>
      <input
        autoComplete="off"
        id="website"
        name="website"
        onChange={(event) => update("website", event.target.value)}
        tabIndex={-1}
        value={form.website}
      />
      {error ? (
        <p className="text-sm font-semibold text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="min-h-11 w-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending request..." : "Send request"}
      </button>
    </form>
  );
}
