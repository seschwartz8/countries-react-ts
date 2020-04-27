import React, { useEffect, useState } from 'react';
import Map from './Map';
import axios from 'axios';

const Destinations: React.FC = () => {
  const [markerLocations, setMarkerLocations] = useState([]);

  useEffect(() => {
    async function fetchDestinations() {
      const url = 'http://localhost:3001';
      const response = await axios.get(`${url}/destinations`);
      setMarkerLocations(response.data);
    }

    fetchDestinations();
  }, []);

  return (
    <>
      <Map destinations={markerLocations} />
    </>
  );
};

export default Destinations;
