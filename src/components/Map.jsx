import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker";

export default function Map(){
  const defaultProps = {
    center: {
      lat: 37.37015718405753,
      lng: -459.40429687500006
    },
    zoom: 5
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAeRt954i2RAA_DpXpc6Hk9CCATkGL9zxg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <LocationMarker lat={center.lat} lng={center.lng}></LocationMarker> */}
      </GoogleMapReact>
    </div>
  );
}

