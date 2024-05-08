import './gemTab.scss'

import React from 'react'
import { Tabs } from 'antd';
import ArtistGemPanel from '../Gem Panels/Artist gem Panel/ArtistGemPanel.jsx'
import CollabrationGemPanel from '../Gem Panels/Collabration gem Panel copy/CollabrationGemPanel.jsx';
import MaterialGemPanel from '../Gem Panels/Material gem Panel/MaterialGemPanel.jsx';
import Headline from '../../headline/headline.jsx';
import { useSelector,useDispatch } from 'react-redux';
import {setSelectedSeries} from '../../../Store/modules/gem.js'

export default function GemTab() {

   const selectedGem=useSelector(state=>state.gem.selectedSeries)
   const dispatch=useDispatch()

    const onChange = (key) => {
        console.log(key);
       
        
      };
    
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

  return (
               
    <div className='gemTab'>
      <Headline title='LEGACY GEMS'></Headline>
      <div className='subTitle'> Series</div>
      <Tabs defaultActiveKey="1" 
      items={items} 
      onChange={onChange} 
      animated={false}
      className='tab'
      />
       
    </div>
  )
}
