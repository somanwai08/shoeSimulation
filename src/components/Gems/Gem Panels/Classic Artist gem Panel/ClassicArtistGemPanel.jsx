import React from 'react'
import './ClassicArtistGemPanel.scss'
import KellyGemPanel from '../Kelly/KellyPanel'
import { useSelector } from 'react-redux'

export default function ClassicArtistGemPanel() {
    const gemGroup1=useSelector(state=>state.gem.artist.gemGroup1)
    const gemGroup2=useSelector(state=>state.gem.artist.gemGroup2)
    const gemGroup3=useSelector(state=>state.gem.artist.gemGroup3)
    const gemGroup4=useSelector(state=>state.gem.artist.gemGroup4)
    const gemGroup5=useSelector(state=>state.gem.artist.gemGroup5)
    
  
     
  return (
    <div className='ArtistTab'>
        <KellyGemPanel></KellyGemPanel>  
    </div>
  )
}
