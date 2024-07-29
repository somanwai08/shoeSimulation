import './heelsShowPanel.scss'
import React from 'react'
import { useSelector } from 'react-redux';

// 批量引入heel圖片
const requireContext1 = require.context('../../../assets/images/heel/',false)
export const gemImages1 = requireContext1.keys().map(requireContext1)



export default function HeelsShowPanel() {
    const selectedHeel = useSelector(state=>state.shoe.selectedHeel)

    const src = gemImages1.filter(item=>item.includes(selectedHeel))
 



  return (
    
    <div className='heelShowContainer'>
    <div className='heel'>    
        <img className='heel1' src={src} alt='' />
    </div>
    

  </div>
  )
}
