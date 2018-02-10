import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 37.465518, lng: 126.95989 }}>
      {props.isMarkerShown && <Marker position={{ lat: 37.465518, lng: 126.95989 }} />}
    </GoogleMap>
  )),
);

export default MyMapComponent;
