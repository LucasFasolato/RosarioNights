import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';

function Map(props) {
  return (
    <GoogleMap
    defaultZoom={16}
    defaultCenter={{lat:-32.895499, lng:-60.685033}}
    
    />
  )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)