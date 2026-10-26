import MapboxShelterDetails from '@/components/MapboxShelterDetails';

/// Main component to display shelter details
export default async function ShelterDetail({ params, searchParams }) {
  const { id } = await params;
  const searchPar = await searchParams;
  return <MapboxShelterDetails shelterId={id} backUrl={searchPar.backUrl || '/shelters'} />;
}
