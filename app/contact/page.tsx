import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Get in Touch With Sarauniya Foundation
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a href="tel:+2348062243064" className="rounded-3xl bg-white p-8 shadow-lg">
            <Phone className="mb-4 text-[#0B4EA2]" />
            <h2 className="font-bold">Phone</h2>
            <p className="mt-2 text-gray-600">+234 80 6224 3064</p>
          </a>

          <a href="mailto:info@sarauniyafoundation.org" className="rounded-3xl bg-white p-8 shadow-lg">
            <Mail className="mb-4 text-[#0B4EA2]" />
            <h2 className="font-bold">Email</h2>
            <p className="mt-2 text-gray-600">info@sarauniyafoundation.org</p>
          </a>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <MapPin className="mb-4 text-[#0B4EA2]" />
            <h2 className="font-bold">Office Address</h2>
            <p className="mt-2 text-gray-600">
              No. 29 Parakou Street off Aminu Kano Crescent, Wuse II, Abuja.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#0B4EA2] p-8 text-white">
          <h2 className="text-2xl font-bold">Connect Online</h2>
          <p className="mt-3 text-white/80">
            Add official Facebook, Instagram, YouTube, TikTok and X links here.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded-full border border-white px-5 py-2 font-semibold">Facebook</a>
            <a href="#" className="rounded-full border border-white px-5 py-2 font-semibold">Instagram</a>
            <a href="#" className="rounded-full border border-white px-5 py-2 font-semibold">YouTube</a>
            <a href="https://wa.me/2348021086666" target="_blank" className="rounded-full bg-white px-5 py-2 font-semibold text-[#0B4EA2]">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  );
}
