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
      {props.markerList.map(elem => <Marker position={{ ...elem }} />)}
    </GoogleMap>
  )),
);

export default NetworkMapComponent;
