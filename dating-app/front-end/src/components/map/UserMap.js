import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class UserMap extends React.Component {
  
  render () {
    const position = [this.props.user.lati, this.props.user.longi];
    return (
      <Map style={{height:"50vh",zIndex:"-1"}} center={position} zoom="12">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}  >
          <Popup> Found You. <br /> jus Kidding!!.</Popup>
        </Marker>
      </Map>
    )
  }
}

export default UserMap;