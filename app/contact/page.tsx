import Link from "next/link";
import { contact } from "@/data/contact";
import { socials } from "@/data/socials";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Contact Us
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Get in Touch With Sarauniya Charity Foundation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          For donations, partnerships, volunteering, humanitarian collaboration,
          project inquiries, or official communication, contact the Foundation
          through the channels below.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <MapPin className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="mt-4 text-xl font-bold text-[#0B4EA2]">
              Office Address
            </h2>
            <p className="mt-3 leading-7 text-gray-600">{contact.address}</p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <Phone className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="mt-4 text-xl font-bold text-[#0B4EA2]">
              Phone
            </h2>
            <p className="mt-3 text-gray-600">{contact.phone}</p>
            <p className="mt-1 text-gray-600">{contact.phoneAlt1}</p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <Mail className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="mt-4 text-xl font-bold text-[#0B4EA2]">
              Email
            </h2>
            <p className="mt-3 text-gray-600">{contact.email}</p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <Clock className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="mt-4 text-xl font-bold text-[#0B4EA2]">
              Office Hours
            </h2>
            <p className="mt-3 text-gray-600">
              Monday to Friday
            </p>
            <p className="mt-1 text-gray-600">
              9:00 AM - 5:00 PM
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl">
            <MessageCircle className="h-9 w-9 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold">
              Contact Through WhatsApp
            </h2>

            <p className="mt-4 leading-8 text-white/75">
              Reach out for donations, partnership inquiries, volunteering,
              project information, or confirmation of official foundation
              accounts.
            </p>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20know%20more%20about%20Sarauniya%20Charity%20Foundation.`}
              target="_blank"
              className="mt-6 inline-block rounded-full bg-[#25D366] px-7 py-3 font-semibold text-white"
            >
              Open WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#0B4EA2]">
              Follow Our Social Media
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Follow Sarauniya Charity Foundation for latest projects,
              humanitarian updates, outreach photos, award ceremonies,
              speeches, and beneficiary stories.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  className="rounded-2xl border border-blue-100 bg-[#f8f5ef] px-5 py-4 font-semibold text-[#0B4EA2] transition hover:bg-[#0B4EA2] hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <div className="bg-[#0B4EA2] p-8 text-white">
            <h2 className="text-3xl font-bold">Map Location</h2>
            <p className="mt-3 text-white/75">
              Official Google Map will be added after the final address is
              confirmed.
            </p>
          </div>

          <div className="flex min-h-[260px] items-center justify-center bg-blue-50 p-8 text-center text-gray-600">
            Google Map Placeholder
          </div>
        </section>
      </div>
    </main>
  );
}

