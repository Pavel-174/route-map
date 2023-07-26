import React from 'react'
import { MapContainer, TileLayer, ZoomControl, Polyline } from 'react-leaflet'


const Map = () => {

  const limeOptions = { color: 'lime' }
  const blackOptions = { color: 'black' }
  const redOptions = { color: 'red' }

  const polyline1 = [
    [59.84660399, 30.29496392],
    [59.82934196, 30.42423701],
    [59.83567701, 30.38064206],
  ]

  const polyline2 = [
    [59.82934196, 30.42423701],
    [59.82761295, 30.41705607],
    [59.84660399, 30.29496392],
  ]

  const polyline3 = [
    [59.83567701, 30.38064206],
    [59.84660399, 30.29496392],
    [59.82761295, 30.41705607],
  ]

  return (
    <>
      <MapContainer 
        center={[59.82934196, 30.42423701]} 
        zoom={10} 
        zoomControl={true} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <ZoomControl position='topright'/> */}
        <Polyline pathOptions={limeOptions} positions={polyline1} />
        <Polyline pathOptions={blackOptions} positions={polyline2} />
        <Polyline pathOptions={redOptions} positions={polyline3} />
      </MapContainer>
    </>
  )
}

export default Map