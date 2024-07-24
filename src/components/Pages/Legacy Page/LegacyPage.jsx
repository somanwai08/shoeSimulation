import React from 'react'
import './LegacyPage.scss'
import { Link } from "react-router-dom";
import DesktopLegacyGemTab from '../../Gems/Gem Tab/Legacy/Desktop Gem Tab/DesktopLegacyGemTab';
import MobileLegacyGemTab from '../../Gems/Gem Tab/Legacy/Mobile Gem Tab/MobileLegacyGemTab';

export default function LegacyPage() {
  return (
    <div className='LegacyPage'>
      
      <DesktopLegacyGemTab></DesktopLegacyGemTab>
      <MobileLegacyGemTab></MobileLegacyGemTab>
      <Link to={`/mesh-simulation/kelly`}>To Kelly</Link>
    </div>
  )
}
