import React, { useState } from 'react'
import LocationData from './subComponents/LocationData'
import Resident from './subComponents/Resident'
import Search from './subComponents/Search'

const DataApp = ({location, setSearchLocation}) => {

  return (
    <div className='div-principal'>
        <Search setSearchLocation={setSearchLocation}/>
        <LocationData location={location}/>
        <div className='residents'>
            {location?.residents.map(resident => (
                <Resident key={resident}
                resident={resident}/>
                ))}
        </div>
    </div>
  )
}

export default DataApp