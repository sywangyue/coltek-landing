import { redirect } from 'next/navigation';

export default async function DronesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/drones/dji`);
}
