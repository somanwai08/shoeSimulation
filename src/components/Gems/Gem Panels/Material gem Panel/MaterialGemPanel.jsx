import React from 'react'
import './MaterialGemPanel.scss'
import GemBar from '../../gem bar/gemBar'
import { useSelector } from 'react-redux'
import ScrollableTabContent1 from '../../ScrollableTabContent/ScrollableTabContent'

export default function MaterialGemPanel(props) {

  const {scrollable}=props
    const gemGroup1=useSelector(state=>state.gem.material.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.material.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.material.gemGroup3)
    const gemGroup4=useSelector(state=>state.gem.material.gemGroup4)
    const gemGroup5=useSelector(state=>state.gem.material.gemGroup5)
    const gemGroup6=useSelector(state=>state.gem.material.gemGroup6)
    const gemGroup7=useSelector(state=>state.gem.material.gemGroup7)


     
  return (
    scrollable?<ScrollableTabContent1 
    groups={[gemGroup1,gemGroup2,gemGroup3,gemGroup4,gemGroup5,gemGroup6,gemGroup7]} 
    series={'Material Series'}></ScrollableTabContent1>:
    <div className='MaterialTab'>
        <GemBar group={gemGroup1} series={'Material Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup2} series={'Material Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup3} series={'Material Series'} horizontal={false}></GemBar>  
        <GemBar group={gemGroup4} series={'Material Series'} horizontal={false}></GemBar> 
        <GemBar group={gemGroup5} series={'Material Series'} horizontal={false}></GemBar> 
        <GemBar group={gemGroup6} series={'Material Series'} horizontal={false}></GemBar> 
        <GemBar group={gemGroup7} series={'Material Series'} horizontal={false}></GemBar> 
    </div>
  )
}
