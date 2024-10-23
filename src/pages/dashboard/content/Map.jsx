import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React, { useState } from 'react'


    const libraries = ["places"];

    const mapContainerStyle = {
        width:"100%",
        height:"100%"
    }


const Map = () => {

    const [open , setOpen] = useState(false)
    const [coords , setCoords] = useState({
        lat: -3.745,
        lng: -38.523,
    })
    const [distance , setDistance] = useState(0)

    const handleMap = ()=>{
        setOpen(!open);
    }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey:"",
        libraries
    })

    if(loadError){
        return <div>Error Loading maps</div>
    }

    if(!isLoaded){
        return <div> Loading maps ...</div>
    }

    const handleLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude , longitude , accuracy}=position.coords;
                console.log(latitude , longitude , accuracy)
            })
        }
    }


  return (
    <div>
        <div className='relative flex items-center justify-center mt-[10%]'>
            <button className='bg-blue-500 text-white border-none cursor-pointer font-semibold p-[10px] mr-[20px]'>Get Location</button>
            <button className='bg-red-500 text-white border-none cursor-pointer font-semibold p-[10px]' onClick={handleMap}>Show Map</button>


                  {open &&
                 <div className='absolute top-[-180px] left-[0px] z-1 shadow-2xl w-[800px] h-[500px] p-[10px]'>
                    <button className='bg-red-500 text-white border-none cursor-pointer font-semibold p-[10px]'onClick={handleMap}>Close Map</button>
                    {isLoaded && 
                    
                    <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={coords}
                    zoom={10}
                    >
                        <Marker position={coords}/>
                    </GoogleMap>

                    }
                 </div>
                  }  
              

        </div>
    </div>
  )
}

export default Map
