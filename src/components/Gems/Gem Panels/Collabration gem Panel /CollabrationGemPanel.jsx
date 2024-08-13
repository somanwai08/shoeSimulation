import React from 'react'
import './CollabrationGemPanel.scss'
import GemBar from '../../gem bar/gemBar'
import { useSelector } from 'react-redux'
import ScrollableTabContent1 from '../../ScrollableTabContent/ScrollableTabContent'

export default function CollabrationGemPanel(props) {

  const {scrollable}=props
    const gemGroup1=useSelector(state=>state.gem.collabration.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.collabration.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.collabration.gemGroup3)
     
  return (
    scrollable?<ScrollableTabContent1
      groups={[gemGroup1,gemGroup2,gemGroup3]}
      series={'Collabration Series'}
    ></ScrollableTabContent1>:
    <div className='CollabrationTab'>
        <GemBar group={gemGroup1} series={'Collabration Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup2} series={'Collabration Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup3} series={'Collabration Series'} horizontal={false} ></GemBar>      
    </div>
  )
}
