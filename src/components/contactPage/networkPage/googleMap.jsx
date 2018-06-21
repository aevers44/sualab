import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const NetworkMapComponent = withGoogleMap(props => {
  const { markerList } = props;
  const centerLatitude =
    markerList.reduce((prev, curr) => prev + curr.lat, 0) / markerList.length;
  const centerLongitude =
    markerList.reduce((prev, curr) => prev + curr.lng, 0) / markerList.length;
  console.log(centerLatitude, centerLongitude);
  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{
        lat: centerLatitude || 16.311724714285713,
        lng: centerLongitude || 45.87756114285714,
      }}
    >
      {markerList.map((elem, idx) => (
        <Marker key={idx} position={{ ...elem }} />
      ))}
    </GoogleMap>
  );
});
export default NetworkMapComponent;
