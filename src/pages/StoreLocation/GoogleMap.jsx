import React from 'react';
import LocationPin from './LocationPin';
import { Box } from '@mui/material';
import GoogleMapReact from 'google-map-react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const GoogleMap = (props) => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };
  const zoomLevel = 17;

  //   const {} = useLoadScript({ googleMapsApiKey: '' });
  return (
    <Box height={500}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>

      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={12}
      /> */}
    </Box>
  );
};

export default GoogleMap;
