"use client";

import { useRef, useState } from "react";
import { sendContactMessage } from "@/lib/contact-form";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const submitting = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    submitting.current = true;
    setStatus("pending");
    try {
      await sendContactMessage(form.action, new FormData(form));
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form
      className="contactForm"
      action="https://formspree.io/f/mzdjjqgd"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label className="field">
        <span>Name</span>
        <input name="name" placeholder="Your name" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          placeholder="What's on your mind?"
          rows={5}
          required
        />
      </label>
      <button type="submit" className="btn btnSolid" aria-busy={status === "pending"} disabled={status === "pending"}>
        Send it
      </button>
      <p className="formStatus" role="status" aria-live="polite" aria-atomic="true">
        {status === "pending" && "Sending your message…"}
        {status === "success" && "Your message has been sent. Thank you for reaching out."}
      </p>
      <p className="formStatus" role="alert" aria-atomic="true">
        {status === "error" && "Your message could not be sent. Your entries are still here. Please try again, or use one of the email links above."}
      </p>
    </form>
  );
}
