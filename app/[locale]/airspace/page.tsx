import { redirect } from 'next/navigation';

export default async function AirspacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/airspace/droneguard`);
}
