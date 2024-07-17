import './gemTab.scss'

import React from 'react'
import { Tabs } from 'antd';
import ArtistGemPanel from '../Gem Panels/Artist gem Panel/ArtistGemPanel.jsx'
import CollabrationGemPanel from '../Gem Panels/Collabration gem Panel /CollabrationGemPanel.jsx';
import MaterialGemPanel from '../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../headline/headline.jsx';


export default function GemTab() {


    const onChange = (key) => {
    
      };
      // Legacy Tab的內容
      const items = [
        {
          key: '1',
          label: 'Artist',
          children: <ArtistGemPanel></ArtistGemPanel>,
        },
        {
          key: '2',
          label: 'Material',
          children: <MaterialGemPanel></MaterialGemPanel>,
        },
        {
          key: '3',
          label: 'Collaboration',
          children: <CollabrationGemPanel></CollabrationGemPanel>,
        },
      ];

      // Classic Tab的內容
      const items3 = [
        {
          key: '1',
          label: 'Material',
          children: <MaterialGemPanel></MaterialGemPanel>,
        },
        {
          key: '2',
          label: 'Artist',
          children: <ArtistGemPanel></ArtistGemPanel>,
        },
        
        {
          key: '3',
          label: 'Collaboration',
          children: <CollabrationGemPanel></CollabrationGemPanel>,
        },
      ];

      const items2=[
        {
          key:'1',
          label:'LEGACY',
          // children:<Tabs defaultActiveKey="1" 
          // items={items} 
          // onChange={onChange} 
          // animated={false}
          // className='Legacy-Tab'
          // />
          children:'1'
        },
        {
          key:'2',
          label:'CLASSIC',
          children:<Tabs defaultActiveKey="1" 
          items={items3} 
          onChange={onChange} 
          animated={false}
          className='Classic-Tab'
          />
        }
      ]

     

  return (
               
    <div className='gemTab'>
      <Headline title='COLLECTION'></Headline>
      <Tabs
         items={items2} className='main-Tab'/>
     
       
    </div>
  )
}
