import FrameworkClient from './framework-client';

// Force static generation
export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

interface FrameworkPageProps {
  params: { locale: string };
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const { locale } = params;
  return <FrameworkClient locale={locale} />;
}
