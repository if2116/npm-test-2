import Link from 'next/link';

export const dynamic = 'force-static';

export default function IndexPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0E17] text-white">
      <div className="text-center px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Choose your language</h1>
        <p className="text-white/70 mb-8">Select a locale to continue.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/en/"
            className="px-6 py-3 rounded-lg bg-[#3B82F6] hover:bg-blue-600 transition-colors"
          >
            English
          </Link>
          <Link
            href="/zh/"
            className="px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors"
          >
            中文
          </Link>
        </div>
      </div>
    </main>
  );
}
