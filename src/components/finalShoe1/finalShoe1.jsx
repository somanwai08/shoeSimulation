import './finalShoe1.scss'
import React, { useEffect, useState } from 'react'
import {setSelectedKellySide} from '../../Store/modules/gem.js'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
// 批量引入gem圖片
import { gemImages1 } from '../../Store/modules/gem.js'
// 引入legacy gem鞋圖片
import legacyShoeImg from '../../assets/images/shoe/Marlene Mesh 75 24K Gold White Calf-forWebUse.jpg'
// 引入kelly gem鞋圖片
import kellyShoeImg from '../../assets/images/shoe/Marlene Mesh 75 24K Gold White Calf and Mesh with Part C_Without_Springbar_IG_1x1.jpg'



// 批量引入Kelly gem圖片
const requireContext3 = require.context('../../assets/images/Kelly2/',false)
const gemImages2 = requireContext3.keys().map(requireContext3)






export default function Finalshoe1() {
    const selectedGem=useSelector(state=>state.gem.selectedGem)
    const selectedKelly = useSelector(state=>state.gem.selectedKelly)
    const [gemPic,setGemPic]=useState(gemImages1[0])
    const [leftKellyPic,setLeftKellyPic]=useState('')
    const [rightKellyPic,setRightKellyPic]=useState('')
    
    const dispatch=useDispatch()
    const location = useLocation()
    const isLegacy = location.pathname.split('/')[2]==='legacy'?true:false
    
    

    // 選擇gem時變化的副作用
    useEffect(()=>{
            
          // 其他gem
      const arr1=gemImages1.map(item=>item.split('media/')[1]).map(item=>item.replaceAll('_',' ')).map(item=>item.split('.')[0])
      const index=arr1.findIndex(item=>item===selectedGem)
      setGemPic(gemImages1[index])

      // 根據kelly gem的顏色和選中的邊來找出應該call那張圖
      const arr2=gemImages2.map(item=>item.split('media/')[1]).map(item=>item.replaceAll('_',' ')).map(item=>item.split('.')[0])
      const colorName = selectedKelly[selectedKelly.selectedSide].split('.')[0]+` ${selectedKelly.selectedSide}`
     
      // index2 是 Kelly Gem單邊圖數組中找到的index
      const index2=arr2.findIndex(item=>item.includes(colorName))
      
      
      if(selectedKelly.selectedSide==='LEFT'&&selectedKelly.LEFT!=''){
        setLeftKellyPic(gemImages2[index2])
      }else if(selectedKelly.selectedSide==='LEFT'&&selectedKelly.LEFT===''){
        setLeftKellyPic('')
      }
      if(selectedKelly.selectedSide==='RIGHT'&&selectedKelly.RIGHT!=''){
        setRightKellyPic(gemImages2[index2])
      }else if(selectedKelly.selectedSide==='LEFT'&&selectedKelly.RIGHT===''){
        setRightKellyPic('')
        dispatch(setSelectedKellySide('LEFT'))
      }
        
     
    },[selectedGem,selectedKelly,dispatch])




  return (
    <div className='finalShoeContainer'>
      <div className='finalBag'>
          <img className='shoe' src={isLegacy?legacyShoeImg:kellyShoeImg} alt='' />
          {/* 下面三行代碼，都是因為防止移動設備上出現邊框，而設置滿足具體條件才顯示該圖像，否則不顯示 */}
          {selectedGem===''?'':<img className='gem' src={gemPic} alt='' />}
          {selectedKelly.LEFT===''?'':<img className='leftKelly' src={isLegacy?'':leftKellyPic} alt='' />}
          {selectedKelly.RIGHT===''?'':<img className='rightKelly' src={isLegacy?'':rightKellyPic} alt='' />}
          
      </div>
      

    </div>
    
  )
}
