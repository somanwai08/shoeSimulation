import React from 'react'
import './KellyPage.scss'
import { Link } from "react-router-dom";
import DesktopKellyGemTab from '../../Gems/Gem Tab/Kelly/Desktop Gem Tab/DesktopKellyGemTab';
import MobileKellyGemTab from '../../Gems/Gem Tab/Kelly/Mobile Gem Tab/MobileKellyGemTab';




export default function KellyPage() {
  return (
    <div className='KellyPage' >
         <DesktopKellyGemTab></DesktopKellyGemTab>
         <MobileKellyGemTab></MobileKellyGemTab>
         <Link to={`/mesh-simulation/legacy`}>To Legacy</Link>
         
    </div>
  )
}
