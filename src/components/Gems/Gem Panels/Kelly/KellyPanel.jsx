import React ,{useEffect, useState}from 'react'
import './KellyPanel.scss'
import GemBar from '../../gem bar/gemBar';
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd';
import { setSelectedKellySide } from '../../../../Store/modules/gem';



export default function KellyGemPanel() {
    const gemGroup1=useSelector(state=>state.gem.artist.gemGroup6)
    const selectedSide = useSelector(state=>state.gem.selectedKelly.selectedSide)
    const tabArr = ['LEFT','RIGHT']
    const [activeKey, setActiveKey] = useState('0')
    
    const dispatch=useDispatch()

    

    const setKellySide = (e)=>{
            dispatch(setSelectedKellySide(tabArr[e]))
            setActiveKey(e)

    }
useEffect(()=>{
  if(selectedSide==='LEFT'){
    setActiveKey('0')
  }
},[selectedSide])

     
  return (
    <div className='KellyTab'>

        <Tabs
              activeKey={activeKey}
              centered
              className='KellyTab1'
              onChange={setKellySide}
              items={tabArr.map((item, i) => {
                return {
                  label: item,
                  key: String(i),
                  children: <GemBar group={gemGroup1} series={'Artist Series'} side={tabArr[i]}></GemBar>,
                 

                };
              })}
            />
    </div>
  )
}
