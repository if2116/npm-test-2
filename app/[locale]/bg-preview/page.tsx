import BackgroundPreviewClient from './bg-preview-client';

// Force static generation
export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

interface BackgroundPreviewPageProps {
  params: { locale: string };
}

export default async function BackgroundPreviewPage({ params }: BackgroundPreviewPageProps) {
  const { locale } = params;
  return <BackgroundPreviewClient locale={locale} />;
}
