import React from 'react'
import './AppDownload.css'
import {play_store,app_store} from "../../../assets/frontend_assets/assets.js";
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download<br />Flavor Haven App</p>
      <div className="app-download-platforms">
        <img src={play_store} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
