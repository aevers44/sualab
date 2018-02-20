import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const NetworkMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{
        lat: 16.94684033,
        lng: 114.812421,
      }}
    >
      <Marker position={{ lat: 35.705878, lng: 139.95983 }} />
      <Marker position={{ lat: 1.334551, lng: 103.90098 }} />
      <Marker position={{ lat: 13.800092, lng: 100.576453 }} />
    </GoogleMap>
  )),
);

export default NetworkMapComponent;
