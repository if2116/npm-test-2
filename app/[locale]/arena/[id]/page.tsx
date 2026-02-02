import { notFound } from 'next/navigation';
import { getArenaById, getArenaByFolderId, arenas } from '@/lib/data';
import { ArenaDetailClient } from './client-page';
import { getArenaContent } from '@/lib/content';

// Force static generation for this page
export const dynamic = 'force-static';

// Disable dynamic params - only pre-generated pages will be accessible
export const dynamicParams = false;

export async function generateStaticParams() {
  const locales = ['en', 'zh'];

  // Generate params for both id and folderId (since the page supports both)
  const params = locales.flatMap((locale) =>
    arenas.map((arena) => ({
      locale,
      id: arena.folderId, // Use folderId as the primary route param
    }))
  );

  return params;
}

export default async function ArenaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  // Try to find arena by id first (for backward compatibility), then by folderId
  let arena = getArenaById(id);
  if (!arena) {
    arena = getArenaByFolderId(id);
  }

  if (!arena) {
    notFound();
  }

  // Load all content server-side
  const tabs = ['overview', 'implementation', 'requirements', 'validation-report', 'project-report'] as const;
  const content: Record<string, string> = {};
  let hasContent = false;

  for (const tab of tabs) {
    const result = await getArenaContent(id, tab, locale);
    if (result) {
      content[tab] = result.content;
      hasContent = true;
    }
  }

  return (
    <ArenaDetailClient
      arena={arena}
      locale={locale}
      arenaId={id}
      initialContent={content}
      hasContent={hasContent}
    />
  );
}
