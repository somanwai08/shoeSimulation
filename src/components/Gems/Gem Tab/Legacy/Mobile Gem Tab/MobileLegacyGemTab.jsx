import './MobileLegacyGemTab.scss'

import React from 'react'
import { Tabs } from 'antd';
import LegacyArtistGemPanel from '../../../Gem Panels/Legacy Artist gem Panel /LegacyArtistGemPanel.jsx';
import CollabrationGemPanel from '../../../Gem Panels/Collabration gem Panel /CollabrationGemPanel.jsx';
import MaterialGemPanel from '../../../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../../../headline/headline.jsx';


export default function MobileLegacyGemTab() {


      // Legacy Tab的內容
      const items = [
        {
          key: '1',
          label: 'ARTIST',
          children: <LegacyArtistGemPanel scrollable={false}></LegacyArtistGemPanel>,
        },
        {
          key: '2',
          label: 'MATERIAL',
          children: <MaterialGemPanel scrollable={false}></MaterialGemPanel>,
        },
        {
          key: '3',
          label: 'COLLABORATION',
          children: <CollabrationGemPanel scrollable={false}></CollabrationGemPanel>,
        },
      ];


     

  return (
               
    <div className='gemTab' id='MobileLegacyGemTab'>
      <Headline title='LEGACY' borderTop={false}></Headline>
      <Tabs
         items={items} className='main-Tab'/>
     
       
    </div>
  )
}
