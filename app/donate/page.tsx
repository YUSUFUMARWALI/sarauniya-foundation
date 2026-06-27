"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { bankAccounts } from "@/data/banks";
import { contact } from "@/data/contact";
import {
  Copy,
  Download,
  HeartHandshake,
  Landmark,
  MessageCircle,
  QrCode,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";

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

const bankStyles: Record<string, string> = {
  "Sterling Alternative Bank": "border-blue-200 bg-blue-50",
  TAJBank: "border-green-200 bg-green-50",
  "Guaranty Trust Bank (GTBank)": "border-orange-200 bg-orange-50",
  "United Bank for Africa (UBA)": "border-red-200 bg-red-50",
};

export default function DonatePage() {
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [copied, setCopied] = useState("");
  const [query, setQuery] = useState("");

  const grouped = bankAccounts.reduce((acc, account) => {
    if (!acc[account.bank]) acc[account.bank] = [];
    acc[account.bank].push(account);
    return acc;
  }, {} as Record<string, typeof bankAccounts>);

  const banks = useMemo(() => {
    return Object.keys(grouped).filter((bank) =>
      bank.toLowerCase().includes(query.toLowerCase())
    );
  }, [grouped, query]);

  const selectedAccounts = selectedBank ? grouped[selectedBank] : [];

  const copyText = async (text: string, label = "Copied successfully") => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2500);
  };

  const fullDetails = (account: (typeof bankAccounts)[number]) =>
    `Bank: ${account.bank}
Account Name: ${account.accountName}
Account Number: ${account.accountNumber}
Currency: ${account.currency}`;

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Sarauniya Charity Foundation", 20, 20);
    doc.setFontSize(13);
    doc.text("Official Donation Account Details", 20, 32);

    let y = 48;

    bankAccounts.forEach((account, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${account.bank}`, 20, y);
      y += 8;
      doc.text(`Currency: ${account.currency}`, 25, y);
      y += 7;
      doc.text(`Account Name: ${account.accountName}`, 25, y);
      y += 7;
      doc.text(`Account Number: ${account.accountNumber}`, 25, y);
      y += 13;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("sarauniya-donation-details.pdf");
  };

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      {copied && (
        <div className="fixed right-6 top-6 z-[120] rounded-full bg-[#062B5F] px-6 py-3 font-semibold text-white shadow-xl">
          {copied}
        </div>
      )}

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
          emergency relief, empowerment, orphan care and humanitarian assistance.
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
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#0B4EA2]">
                Choose a Bank
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Select a bank to view official donation account details.
              </p>
            </div>

            <button
              onClick={downloadPdf}
              className="rounded-full bg-[#B88A2E] px-6 py-3 font-semibold text-white"
            >
              <Download className="mr-2 inline h-4 w-4" />
              Download Details
            </button>
          </div>

          <div className="relative mt-8 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bank..."
              className="w-full rounded-full border border-blue-100 bg-white py-4 pl-12 pr-5 outline-none ring-[#0B4EA2] focus:ring-2"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {banks.map((bank) => (
              <button
                key={bank}
                onClick={() => setSelectedBank(bank)}
                className={`rounded-3xl border p-7 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${
                  bankStyles[bank] || "border-blue-100 bg-white"
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                  <Landmark className="h-9 w-9 text-[#B88A2E]" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0B4EA2]">
                  {bank}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {grouped[bank].length} account option
                  {grouped[bank].length > 1 ? "s" : ""}
                </p>

                <span className="mt-6 inline-block font-semibold text-[#B88A2E]">
                  View Accounts
                </span>
              </button>
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
              Scan to copy official donation information. Payment gateway QR
              codes can be added later.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-blue-50 p-6 text-center">
                <QRCodeCanvas
                  value="Sarauniya Charity Foundation NGN Donation Accounts"
                  size={150}
                  className="mx-auto"
                />
                <p className="mt-4 font-semibold text-[#0B4EA2]">NGN QR</p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6 text-center">
                <QRCodeCanvas
                  value="Sarauniya Charity Foundation USD Donation Accounts"
                  size={150}
                  className="mx-auto"
                />
                <p className="mt-4 font-semibold text-[#0B4EA2]">USD QR</p>
              </div>
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

      {selectedBank && (
        <div
          onClick={() => setSelectedBank(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2E]">
                  Official Account
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0B4EA2]">
                  {selectedBank}
                </h2>
              </div>

              <button
                onClick={() => setSelectedBank(null)}
                className="rounded-full bg-blue-50 p-3 text-[#0B4EA2]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-5">
              {selectedAccounts.map((account) => (
                <div
                  key={account.accountNumber}
                  className="rounded-3xl border border-blue-100 bg-[#f8f5ef] p-6"
                >
                  <p className="text-sm font-semibold text-[#B88A2E]">
                    {account.currency}
                  </p>

                  <p className="mt-4 text-sm text-gray-600">Account Name</p>
                  <p className="font-bold text-[#062B5F]">
                    {account.accountName}
                  </p>

                  <p className="mt-4 text-sm text-gray-600">Account Number</p>
                  <p className="text-3xl font-bold text-[#0B4EA2]">
                    {account.accountNumber}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        copyText(account.accountNumber, "Account number copied")
                      }
                      className="rounded-full bg-[#0B4EA2] px-5 py-3 font-semibold text-white"
                    >
                      <Copy className="mr-2 inline h-4 w-4" />
                      Copy Number
                    </button>

                    <button
                      onClick={() =>
                        copyText(fullDetails(account), "Full details copied")
                      }
                      className="rounded-full bg-[#B88A2E] px-5 py-3 font-semibold text-white"
                    >
                      <Copy className="mr-2 inline h-4 w-4" />
                      Copy Full Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
