import './DesktopKellyGemTab.scss'

import React from 'react'
import { Tabs,Card,Row } from 'antd';
import ClassicArtistGemPanel from '../../../Gem Panels/Classic Artist gem Panel/ClassicArtistGemPanel.jsx';
import LegacyArtistGemPanel from '../../../Gem Panels/Legacy Artist gem Panel /LegacyArtistGemPanel.jsx';
import CollabrationGemPanel from '../../../Gem Panels/Collabration gem Panel /CollabrationGemPanel.jsx';
import MaterialGemPanel from '../../../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../../../headline/headline.jsx';
import { useSelector } from 'react-redux';
import KellyGemPanel from '../../../Gem Panels/Kelly/KellyPanel.jsx';




export default function DesktopKellyGemTab() {


    const onChange = (key) => {
    
      };
     

     

  return (
               
    <div className='DeskGemTab' id='DeskKellyGemTab'>
      <Headline title='KELLY'></Headline>
     
         <div className='main-Tab'>
          <KellyGemPanel></KellyGemPanel>
         </div>
    </div>
  )
}


