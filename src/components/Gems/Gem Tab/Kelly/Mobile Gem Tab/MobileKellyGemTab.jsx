import './MobileKellyGemTab.scss'
import React from 'react'
import Headline from '../../../../headline/headline.jsx';
import KellyGemPanel from '../../../Gem Panels/Kelly/KellyPanel.jsx';


export default function MobileKellyGemTab() {

     

  return (
               
    <div className='gemTab' id='MobileKellyGemTab'>
      <Headline title='KELLY'></Headline>
         <KellyGemPanel></KellyGemPanel>
     
       
    </div>
  )
}
