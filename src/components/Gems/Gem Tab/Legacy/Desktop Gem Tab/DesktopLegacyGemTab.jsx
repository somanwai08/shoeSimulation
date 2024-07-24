import './DesktopLegacyGemTab.scss'

import React from 'react'
import { Tabs,Card,Row } from 'antd';
import ClassicArtistGemPanel from '../../../Gem Panels/Classic Artist gem Panel/ClassicArtistGemPanel.jsx';
import LegacyArtistGemPanel from '../../../Gem Panels/Legacy Artist gem Panel /LegacyArtistGemPanel.jsx';
import CollabrationGemPanel from '../../../Gem Panels/Collabration gem Panel /CollabrationGemPanel.jsx';
import MaterialGemPanel from '../../../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../../../headline/headline.jsx';
import { useSelector } from 'react-redux';
// import GemBar from '../../gem bar/gemBar.jsx';
// import ScrollableTabContent1 from '../../ScrollableTabContent/ScrollableTabContent.jsx';




export default function DesktopLegacyGemTab() {


    const onChange = (key) => {
    
      };
      

      const items2=[
        {
          key:'1',
          label:'Artist',
          children:<LegacyArtistGemPanel scrollable={true}></LegacyArtistGemPanel>
        },
        {
          key:'2',
          label:'Material',
          children:<MaterialGemPanel scrollable={true}></MaterialGemPanel>
        },
        {
          key:'3',
          label:'Collaboration',
          children:<CollabrationGemPanel scrollable={true}></CollabrationGemPanel>
        }
        
      ]

     

  return (
               
    <div className='DeskGemTab' id='DeskLegacyGemTab'>
      <Headline title='LEGACY'></Headline>
      <Tabs
         items={items2} className='main-Tab'/>
     
       
    </div>
  )
}


