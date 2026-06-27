import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { site } from "@/data/site";

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Leadership", "/leadership"],
  ["Programs", "/programs"],
  ["Gallery", "/gallery"],
  ["Achievements", "/achievements"],
  ["Contact", "/contact"],
];

const programs = [
  "Water Projects",
  "Medical Outreach",
  "Education Support",
  "Youth Empowerment",
  "Ramadan Feeding",
  "Climate Change",
];

export default function Footer() {
  return (
    <footer className="bg-[#062B5F] px-6 py-14 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo/logo.jpg"
            alt="Sarauniya Charity Foundation Logo"
            width={72}
            height={72}
            className="rounded-full bg-white"
          />

          <h2 className="mt-5 text-2xl font-bold">{site.name}</h2>

          <p className="mt-3 leading-7 text-white/75">{site.tagline}</p>

          <Link
            href="/donate"
            className="mt-6 inline-block rounded-full bg-[#B88A2E] px-6 py-3 font-semibold text-white"
          >
            Donate Now
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-[#B88A2E]">Quick Links</h3>

          <div className="mt-5 grid gap-3">
            {quickLinks.map(([label, href]) => (
              <Link key={label} href={href} className="text-white/75 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#B88A2E]">Programs</h3>

          <div className="mt-5 grid gap-3 text-white/75">
            {programs.map((program) => (
              <span key={program}>{program}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#B88A2E]">Contact</h3>

          <p className="mt-5 flex gap-3 text-white/75">
            <MapPin className="mt-1 h-5 w-5 text-[#B88A2E]" />
            {site.contact.address}
          </p>

          <p className="mt-4 flex gap-3 text-white/75">
            <Phone className="mt-1 h-5 w-5 text-[#B88A2E]" />
            {site.contact.phone1}
          </p>

          <p className="mt-4 flex gap-3 text-white/75">
            <Mail className="mt-1 h-5 w-5 text-[#B88A2E]" />
            {site.contact.email}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.socials.facebook} target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <FaFacebookF className="h-5 w-5" />
            </a>

            <a href={site.socials.instagram} target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <FaInstagram className="h-5 w-5" />
            </a>

            <a href={site.socials.youtube} target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <FaYoutube className="h-5 w-5" />
            </a>

            <a href={site.socials.linkedin} target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
        <p>{site.copyright}</p>

        <p>
          Designed and Developed by{" "}
          <span className="font-semibold text-[#B88A2E]">{site.developer}</span>
        </p>
      </div>
    </footer>
  );
}
