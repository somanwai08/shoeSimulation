import React from 'react'
import './ArtistGemPanel.scss'
import GemBar from '../../gem bar/gemBar'
import { useSelector } from 'react-redux'

export default function ArtistGemPanel() {
    const gemGroup1=useSelector(state=>state.gem.artist.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.artist.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.artist.gemGroup3)
    const gemGroup4=useSelector(state=>state.gem.artist.gemGroup4)
    const gemGroup5=useSelector(state=>state.gem.artist.gemGroup5)
  
     
  return (
    <div className='ArtistTab'>
        <GemBar group={gemGroup1} series={'Artist Series'}></GemBar>
        <GemBar group={gemGroup2} series={'Artist Series'}></GemBar>
        <GemBar group={gemGroup3} series={'Artist Series'}></GemBar> 
        <GemBar group={gemGroup4} series={'Artist Series'}></GemBar>   
        <GemBar group={gemGroup5} series={'Artist Series'}></GemBar>   
    </div>
  )
}
