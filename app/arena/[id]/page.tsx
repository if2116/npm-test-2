import { LocaleRedirect } from '@/components/locale-redirect';

export default async function ArenaDetailRedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <LocaleRedirect targetPath={`/arena/${id}`} />;
}
