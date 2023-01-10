import React from 'react'
import './FindIss.scss'
import  MapContainer  from '../../components/IssMap/IssMap'
const FindIss = ({ userLocation,issLocation,zoom,visible}) => {
  return (

    <div className='map'>
      <MapContainer userLocation={userLocation} issLocation={issLocation} zoom={zoom} visible={visible}/>
      </div>
  )
}

export default FindIss