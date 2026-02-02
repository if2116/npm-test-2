import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary mb-4">
        {isZh ? '服务条款' : 'Terms of Service'}
      </h1>
      <p className="text-text-secondary mb-6">
        {isZh
          ? '这里是服务条款的占位内容。请根据实际情况补充。'
          : 'This is a placeholder terms page. Please update with your actual terms.'}
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
