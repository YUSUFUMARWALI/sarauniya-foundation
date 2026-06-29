import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-6 text-center text-[#062B5F]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Page Not Found
        </p>

        <h1 className="mt-4 text-5xl font-bold">This page is not available</h1>

        <p className="mt-5 max-w-xl text-gray-600">
          The page may have moved, or the link may be incorrect.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
