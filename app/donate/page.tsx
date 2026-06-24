import Link from "next/link";
import { HeartHandshake, Phone, Mail, Building2 } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Support Our Work
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Donate to Sarauniya Foundation
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Your support helps SCF reach vulnerable communities through clean water,
          education, healthcare, empowerment, orphan support and emergency relief.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <HeartHandshake className="mb-4 h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-xl font-bold text-[#0B4EA2]">Support Projects</h2>
            <p className="mt-3 text-gray-600">Partner with SCF humanitarian programs.</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Building2 className="mb-4 h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-xl font-bold text-[#0B4EA2]">Bank Details</h2>
            <p className="mt-3 text-gray-600">Add official donation account details here.</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Phone className="mb-4 h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-xl font-bold text-[#0B4EA2]">Confirm Donation</h2>
            <p className="mt-3 text-gray-600">Call or WhatsApp the foundation office.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="https://wa.me/2348021086666" target="_blank" className="rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white">
            WhatsApp Foundation
          </a>

          <a href="mailto:info@sarauniyafoundation.org" className="rounded-full border border-[#0B4EA2] px-7 py-3 font-semibold text-[#0B4EA2]">
            <Mail className="mr-2 inline h-4 w-4" />
            Email Us
          </a>
        </div>
      </div>
    </main>
  );
}
