import React from 'react';
import Map from './Map';

const markerLocations = [
  { latitude: 37.776021, longitude: -130.4171949 },
  { latitude: 37.776021, longitude: -122.4171949 },
  { latitude: 45.776021, longitude: -122.4171949 },
];

const Destinations: React.FC = () => {
  return (
    <>
      <Map destinations={markerLocations} />
    </>
  );
};

export default Destinations;
