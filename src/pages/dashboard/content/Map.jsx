import React from 'react'
import { MapContainer , Marker, Popup, TileLayer} from 'react-leaflet';
import "../content/map.css"
import "leaflet/dist/leaflet.css"
import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = () => {

 const markers = [
    {
      geocode:[36.5655 , 53.0516],
      popUp:"Hello Iam here"
    },

    {
        geocode:[36.5658 , 53.052],
        popUp:"Hello Iam here"
    },

    {
        geocode:[36.5657 , 53.053],
        popUp:"Hello Iam here"
    }

 ]

//  const createCustom


  return (
 
    <MapContainer center={[36.5659 , 53.0586]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            
        />

        <MarkerClusterGroup
            chunkedLoading
            // iconCreateFunction={}
        >

             {markers.map((marker)=>(
            <Marker position={marker.geocode}>
                <Popup>
                  {marker.popUp}
                </Popup>
            </Marker>
        ))} 

        </MarkerClusterGroup>

    

    </MapContainer>
  )
}

export default Map
