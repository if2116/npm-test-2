import ContactClient from './contact-client';

// Force static generation
export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

interface ContactPageProps {
  params: { locale: string };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = params;
  return <ContactClient locale={locale} />;
}
