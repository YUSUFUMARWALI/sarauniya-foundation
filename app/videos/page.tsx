import Link from "next/link";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">Back to Home</Link>
        <h1 className="mt-10 text-4xl font-bold md:text-6xl">Videos</h1>
        <p className="mt-6 text-gray-600">Foundation videos and social media embeds will be added here.</p>
      </div>
    </main>
  );
}

