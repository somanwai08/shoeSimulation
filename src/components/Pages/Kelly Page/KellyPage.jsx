import React from 'react'
import './KellyPage.scss'
import DesktopKellyGemTab from '../../Gems/Gem Tab/Kelly/Desktop Gem Tab/DesktopKellyGemTab';
import MobileKellyGemTab from '../../Gems/Gem Tab/Kelly/Mobile Gem Tab/MobileKellyGemTab';




export default function KellyPage() {
  return (
    <div className='KellyPage' >
         <DesktopKellyGemTab></DesktopKellyGemTab>
         <MobileKellyGemTab></MobileKellyGemTab>
    </div>
  )
}
