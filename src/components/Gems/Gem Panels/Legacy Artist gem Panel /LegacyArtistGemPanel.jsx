import React from 'react'
import './LegacyArtistGemPanel.scss'
import GemBar from '../../gem bar/gemBar'
import { useSelector } from 'react-redux'
import ScrollableTabContent1 from '../../ScrollableTabContent/ScrollableTabContent'

export default function LegacyArtistGemPanel(props) {

      const {scrollable}=props
    const gemGroup1=useSelector(state=>state.gem.artist.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.artist.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.artist.gemGroup3)
    const gemGroup4=useSelector(state=>state.gem.artist.gemGroup4)
    const gemGroup5=useSelector(state=>state.gem.artist.gemGroup5)
    
  
     
  return (
     scrollable?<ScrollableTabContent1 
     groups={[gemGroup1,gemGroup2,gemGroup3,gemGroup4,gemGroup5]} 
     series={'Artist Series'}></ScrollableTabContent1>:
    <div className='ArtistTab'>
        <GemBar group={gemGroup1} series={'Artist Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup2} series={'Artist Series'} horizontal={false}></GemBar>
        <GemBar group={gemGroup3} series={'Artist Series'} horizontal={false}></GemBar> 
        <GemBar group={gemGroup4} series={'Artist Series'} horizontal={false}></GemBar>   
        <GemBar group={gemGroup5} series={'Artist Series'} horizontal={false}></GemBar> 
    </div>
  )
}
