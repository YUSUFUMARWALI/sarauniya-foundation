"use client";

import Link from "next/link";
import { ArrowUp, Heart, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={scrollTop}
        title="Back to Top"
        className="rounded-full bg-white p-4 text-[#0B4EA2] shadow-xl transition hover:-translate-y-1"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <Link
        href="/donate"
        title="Donate"
        className="rounded-full bg-[#B88A2E] p-4 text-white shadow-xl transition hover:-translate-y-1"
      >
        <Heart className="h-5 w-5" />
      </Link>

      <a
        href="https://wa.me/2348021086666?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20know%20more%20about%20Sarauniya%20Charity%20Foundation."
        target="_blank"
        title="WhatsApp"
        className="rounded-full bg-[#25D366] p-4 text-white shadow-xl transition hover:-translate-y-1"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
