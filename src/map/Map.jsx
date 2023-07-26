import React from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'


const Map = () => {

  return (
    <>
      <MapContainer 
        center={[37.0902, -95.7129]} 
        zoom={3} 
        zoomControl={false} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='topright'/>
      </MapContainer>
    </>
  )
}

export default Map