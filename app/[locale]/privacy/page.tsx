import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary mb-4">
        {isZh ? '隐私政策' : 'Privacy Policy'}
      </h1>
      <p className="text-text-secondary mb-6">
        {isZh
          ? '这里是隐私政策的占位内容。请根据实际情况补充。'
          : 'This is a placeholder privacy policy. Please update with your actual policy.'}
      </p>
      <Link
        href={`/${locale}`}
        className="text-primary hover:underline"
      >
        {isZh ? '返回首页' : 'Back to home'}
      </Link>
    </main>
  );
}
