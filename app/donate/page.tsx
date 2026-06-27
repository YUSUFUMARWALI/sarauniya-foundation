"use client";

import Link from "next/link";
import { bankAccounts } from "@/data/banks";
import { contact } from "@/data/contact";
import { Copy, HeartHandshake, ShieldCheck, QrCode, MessageCircle } from "lucide-react";

const categories = [
  "Water Projects",
  "Medical Outreach",
  "Education",
  "Women Empowerment",
  "Youth Empowerment",
  "Ramadan Feeding",
  "Orphan Support",
  "IDPs Support",
  "General Donation",
];

export default function DonatePage() {
  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied successfully");
  };

  const ngnAccounts = bankAccounts.filter((item) => item.currency === "NGN");
  const usdAccounts = bankAccounts.filter((item) => item.currency === "USD");

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Donate
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Support Sarauniya Charity Foundation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Your support helps provide clean water, healthcare, education,
          emergency relief, women and youth empowerment, orphan care and
          humanitarian assistance to vulnerable communities.
        </p>

        <section className="mt-12 rounded-[2rem] bg-[#062B5F] p-8 text-white">
          <HeartHandshake className="h-10 w-10 text-[#B88A2E]" />
          <h2 className="mt-4 text-3xl font-bold">Donation Categories</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#0B4EA2]">
            Nigerian Naira Accounts
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ngnAccounts.map((account) => (
              <div key={account.accountNumber} className="rounded-3xl bg-white p-7 shadow-lg">
                <p className="text-sm font-semibold text-[#B88A2E]">{account.currency}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#0B4EA2]">{account.bank}</h3>
                <p className="mt-4 text-gray-600">Account Name</p>
                <p className="font-bold">{account.accountName}</p>
                <p className="mt-4 text-gray-600">Account Number</p>
                <p className="text-2xl font-bold">{account.accountNumber}</p>

                <button
                  onClick={() => copyText(account.accountNumber)}
                  className="mt-6 rounded-full bg-[#0B4EA2] px-5 py-3 font-semibold text-white"
                >
                  <Copy className="mr-2 inline h-4 w-4" />
                  Copy Account Number
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#0B4EA2]">
            US Dollar Accounts
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {usdAccounts.map((account) => (
              <div key={account.accountNumber} className="rounded-3xl bg-white p-7 shadow-lg">
                <p className="text-sm font-semibold text-[#B88A2E]">{account.currency}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#0B4EA2]">{account.bank}</h3>
                <p className="mt-4 text-gray-600">Account Name</p>
                <p className="font-bold">{account.accountName}</p>
                <p className="mt-4 text-gray-600">Account Number</p>
                <p className="text-2xl font-bold">{account.accountNumber}</p>

                <button
                  onClick={() => copyText(account.accountNumber)}
                  className="mt-6 rounded-full bg-[#B88A2E] px-5 py-3 font-semibold text-white"
                >
                  <Copy className="mr-2 inline h-4 w-4" />
                  Copy Account Number
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <QrCode className="h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              QR Code Donations
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              Branded NGN and USD QR codes will be added here once the official
              payment QR details are confirmed.
            </p>
            <div className="mt-6 flex h-48 items-center justify-center rounded-3xl bg-blue-50 text-gray-500">
              QR Code Placeholder
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl">
            <ShieldCheck className="h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold">Security Notice</h2>
            <p className="mt-4 leading-8 text-white/75">
              Sarauniya Charity Foundation will never request donations through
              personal bank accounts. Please donate only through the official
              accounts listed on this website.
            </p>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=Assalamu%20Alaikum.%20I%20want%20to%20confirm%20Sarauniya%20Charity%20Foundation%20donation%20details.`}
              target="_blank"
              className="mt-6 inline-block rounded-full bg-[#25D366] px-7 py-3 font-semibold text-white"
            >
              <MessageCircle className="mr-2 inline h-4 w-4" />
              Confirm on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
