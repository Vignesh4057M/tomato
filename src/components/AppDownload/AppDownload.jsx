import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience Download <br />Tomato App </p>
        <div className="app-download-platform">
            <img src={assets.playstore} alt="" height={70}/>
            <img src={assets.app_store} alt="" height={70}/>
        </div>
      
    </div>
  )
}

export default AppDownload
