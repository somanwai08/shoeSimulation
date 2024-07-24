import './MobileLegacyGemTab.scss'

import React from 'react'
import { Tabs } from 'antd';
import ClassicArtistGemPanel from '../../../Gem Panels/Classic Artist gem Panel/ClassicArtistGemPanel.jsx';
import LegacyArtistGemPanel from '../../../Gem Panels/Legacy Artist gem Panel /LegacyArtistGemPanel.jsx';
import CollabrationGemPanel from '../../../Gem Panels/Collabration gem Panel /CollabrationGemPanel.jsx';
import MaterialGemPanel from '../../../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../../../headline/headline.jsx';


export default function MobileLegacyGemTab() {


    const onChange = (key) => {
    
      };
      // Legacy Tab的內容
      const items = [
        {
          key: '1',
          label: 'Artist',
          children: <LegacyArtistGemPanel scrollable={false}></LegacyArtistGemPanel>,
        },
        {
          key: '2',
          label: 'Material',
          children: <MaterialGemPanel scrollable={false}></MaterialGemPanel>,
        },
        {
          key: '3',
          label: 'Collaboration',
          children: <CollabrationGemPanel scrollable={false}></CollabrationGemPanel>,
        },
      ];

      // Classic Tab的內容
      const items3 = [
        {
          key: '1',
          label: 'Artist',
          children: <ClassicArtistGemPanel></ClassicArtistGemPanel>,
        },
        {
          key: '2',
          label: 'Material',
          children: 'some content',
        },
        {
          key: '3',
          label: 'Collaboration',
          children: 'some content',
        },
      ];

      const items2=[
        {
          key:'1',
          label:'CLASSIC',
          children:<Tabs defaultActiveKey="1" 
          items={items3} 
          onChange={onChange} 
          animated={false}
          className='Classic-Tab'
          />
        },
        {
          key:'2',
          label:'LEGACY',
          children:<Tabs defaultActiveKey="1" 
          items={items} 
          onChange={onChange} 
          animated={false}
          className='Legacy-Tab'
          />
          // children:'1'
        }
        
      ]

     

  return (
               
    <div className='gemTab' id='MobileLegacyGemTab'>
      <Headline title='COLLECTION'></Headline>
      <Tabs
         items={items2} className='main-Tab'/>
     
       
    </div>
  )
}
