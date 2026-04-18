import { notFound } from 'next/navigation';
import LandingPage from '@/components/LandingPage';
import { getVariant } from '@/lib/getVariant';

export default async function VariantPage({ params }) {
  const { slug } = await params;
  const variant = await getVariant(slug);
  if (!variant || !variant.isLive) {
    notFound();
  }
  return <LandingPage variant={variant} />;
}
