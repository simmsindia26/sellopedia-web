import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendToWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your verified business WhatsApp number.
    const phoneNumber = "919439332880";

    const text = `
*New Contact Form Submission*

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#fe0100] focus:ring-4 focus:ring-red-50";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-slate-800";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-16 selection:bg-[#fe0100] selection:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-slate-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
            <Sparkles className="h-4 w-4" />
            Let's Connect
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-[#fe0100]">great together.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Have an idea, a business to grow, or a project in mind? Tell us
            what you need, and let's explore how we can make it happen.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact information */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
              <MessageSquare className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Start your next project
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              We're here to help with digital marketing, creative design,
              website development, and your wider digital growth goals.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:hello@sellopedia.in"
                className="group flex min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-red-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition-colors group-hover:bg-[#fe0100] group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-slate-500">
                    Email us
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-slate-900 sm:text-base">
                    hello@sellopedia.in
                  </span>
                </span>

                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#fe0100]" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-red-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition-colors group-hover:bg-[#fe0100] group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-slate-500">
                    Call us
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-slate-900 sm:text-base">
                    +91 98765 43210
                  </span>
                </span>

                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#fe0100]" />
              </a>

              {/* Location */}
              <div className="flex min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                  <MapPin className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-medium text-slate-500">
                    Headquarters
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-slate-900 sm:text-base">
                    Balasore, Odisha, India
                  </span>
                </span>
              </div>
            </div>

            {/* Trust note */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-white p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#fe0100]" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Focused on your goals
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  We aim to understand your requirements and recommend a
                  solution suited to your business.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Complete the form below to continue the conversation on
                WhatsApp.
              </p>
            </div>

            <form onSubmit={sendToWhatsApp} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="user-name" className={labelClasses}>
                  Full Name <span className="text-[#fe0100]">*</span>
                </label>
                <input
                  id="user-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="user-email" className={labelClasses}>
                  Email Address <span className="text-[#fe0100]">*</span>
                </label>
                <input
                  id="user-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="user-service" className={labelClasses}>
                  Service You're Interested In
                </label>
                <select
                  id="user-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option>Website Development</option>
                  <option>SEO Optimization</option>
                  <option>Social Media Marketing</option>
                  <option>Performance Marketing</option>
                  <option>Creative Design</option>
                  <option>Content Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="user-message" className={labelClasses}>
                  Project Details <span className="text-[#fe0100]">*</span>
                </label>
                <textarea
                  id="user-message"
                  rows={5}
                  name="message"
                  required
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, requirements, or project..."
                  className={`${inputClasses} resize-y`}
                />
                <p className="mt-2 text-right text-xs text-slate-400">
                  {formData.message.length}/3000
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe0100] focus-visible:ring-offset-4"
              >
                Continue on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#fe0100]" />
                <span>
                  Your message will open in WhatsApp for you to review and send.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
