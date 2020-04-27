import React from 'react';
import Map from './Map';

const markerLocations = [
  { name: 'Japan', latitude: 37.776021, longitude: -130.4171949 },
  { name: 'US', latitude: 37.776021, longitude: -122.4171949 },
  { name: 'Hello', latitude: 45.776021, longitude: -122.4171949 },
];

const Destinations: React.FC = () => {
  return (
    <>
      <Map destinations={markerLocations} />
    </>
  );
};

export default Destinations;
