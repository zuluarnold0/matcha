import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [-26.2309, 28.0583];

const UserMap = () => {
  return (
    <Map style={{height:"50vh",zIndex:"-1"}} center={position} zoom="15">
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

export default UserMap;