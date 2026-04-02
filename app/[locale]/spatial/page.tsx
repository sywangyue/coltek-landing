import { redirect } from 'next/navigation';

export default async function SpatialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/spatial/xgrids`);
}
