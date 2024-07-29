import './finalShoe1.scss'
import React, { useEffect, useState } from 'react'
import {setSelectedKellySide} from '../../Store/modules/gem.js'
import { useSelector,useDispatch } from 'react-redux'
// 批量引入gem圖片
import { gemImages1 } from '../../Store/modules/gem.js'
// 引入鞋圖片
import shoeImg from '../../assets/images/shoe/Marlene Mesh 75 24K Gold White Calf-forWebUse.jpg'



// 批量引入Kelly gem圖片
const requireContext3 = require.context('../../assets/images/Kelly2/',false)
const gemImages2 = requireContext3.keys().map(requireContext3)






export default function Finalshoe1() {
    const selectedGem=useSelector(state=>state.gem.selectedGem)
    const selectedKelly = useSelector(state=>state.gem.selectedKelly)
    const [gemPic,setGemPic]=useState(gemImages1[0])
    const [leftKellyPic,setLeftKellyPic]=useState('')
    const [rightKellyPic,setRightKellyPic]=useState('')
    // const [hdPic,setWDPic]=useState('')
    // const selectedMaterial=useSelector(state=>state.shoe.selectedMaterial)
    // const selectedSize=useSelector(state=>state.shoe.selectedSize)
    // const selectedColor=useSelector(state=>state.shoe.selectedColor)
    // const selectedHandle=useSelector(state=>state.shoe.selectedHandle)
    // const pathClip=`${selectedSize}_${selectedMaterial}_${selectedColor}`
    const dispatch=useDispatch()
    
    

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
          <img className='shoe' src={shoeImg} alt='' />
          {/* <img className='woodHandle' src={hdPic} alt=''/> */}
          <img className='gem' src={gemPic} alt='' />
          <img className='leftKelly' src={leftKellyPic} alt='' />
          <img className='rightKelly' src={rightKellyPic} alt='' />
      </div>
      

    </div>
    
  )
}
