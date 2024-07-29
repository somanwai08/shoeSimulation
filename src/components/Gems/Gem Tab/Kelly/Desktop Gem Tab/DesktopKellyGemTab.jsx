import './DesktopKellyGemTab.scss'
import React from 'react'
import Headline from '../../../../headline/headline.jsx';
import KellyGemPanel from '../../../Gem Panels/Kelly/KellyPanel.jsx';




export default function DesktopKellyGemTab() {


     

  return (
               
    <div className='DeskGemTab' id='DeskKellyGemTab'>
      <Headline title='KELLY'></Headline>
     
         <div className='main-Tab'>
          <KellyGemPanel></KellyGemPanel>
         </div>
    </div>
  )
}


