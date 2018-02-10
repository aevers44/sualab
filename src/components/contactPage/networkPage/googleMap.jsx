import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const NetworkMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 37.465518, lng: 126.95989 }}>
      <Marker position={{ lat: 37.465518, lng: 126.95989 }} />
      <Marker position={{ lat: 37.565518, lng: 126.95989 }} />
      <Marker position={{ lat: 37.565518, lng: 126.85989 }} />
      <Marker position={{ lat: 37.465518, lng: 126.85989 }} />
    </GoogleMap>
  )),
);

export default NetworkMapComponent;
