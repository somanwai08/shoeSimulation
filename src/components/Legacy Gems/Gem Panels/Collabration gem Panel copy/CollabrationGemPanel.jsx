import React from 'react'
import './CollabrationGemPanel.scss'
import GemBar from '../../gem bar/gemBar'
import { useSelector } from 'react-redux'

export default function CollabrationGemPanel() {
    const gemGroup1=useSelector(state=>state.gem.collabration.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.collabration.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.collabration.gemGroup3)
     
  return (
    <div className='CollabrationTab'>
        <GemBar group={gemGroup1} series={'Collabration Series'}></GemBar>
        <GemBar group={gemGroup2} series={'Collabration Series'}></GemBar>
        <GemBar group={gemGroup3} series={'Collabration Series'}></GemBar>      
    </div>
  )
}
