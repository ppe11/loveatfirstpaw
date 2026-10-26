'use client';

import { useEffect, useState } from 'react';
import { getFromSessionStorage } from '@/lib/clientStorage';
import ShelterClientDetails from '@/components/ShelterClientDetails';

export default function MapboxShelterDetails({ shelterId, backUrl }) {
  const [shelter, setShelter] = useState(undefined);

  useEffect(() => {
    setShelter(getFromSessionStorage(`mapbox_shelter_${shelterId}`) || null);
  }, [shelterId]);

  if (shelter === undefined) {
    return <div className="p-20 text-center">Loading shelter details...</div>;
  }

  if (!shelter) {
    return <div className="p-20 text-center text-red-500">Shelter details are unavailable. Return to the shelter results and choose it again.</div>;
  }

  return <ShelterClientDetails shelter={shelter} backUrl={backUrl} />;
}
