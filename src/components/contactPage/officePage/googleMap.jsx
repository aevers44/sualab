import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const OfficeMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 37.490406, lng: 127.005185 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 37.490406, lng: 127.005185 }} />
    )}
  </GoogleMap>
));
export default OfficeMapComponent;
