import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const NetworkMapComponent = withScriptjs(
  withGoogleMap(props => {
    const { markerList } = props;
    const centerLatitude = markerList.reduce((prev, curr) => prev + curr.lat, 0) / markerList.length;
    const centerLongitude = markerList.reduce((prev, curr) => prev + curr.lng, 0) / markerList.length;

    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{
          lat: centerLatitude,
          lng: centerLongitude,
        }}
      >
        {markerList.map((elem, idx) => <Marker key={idx} position={{ ...elem }} />)}
      </GoogleMap>
    );
  }),
);

export default NetworkMapComponent;
