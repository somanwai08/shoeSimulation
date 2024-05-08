import './finalBag.scss'
import React, { useEffect, useState } from 'react'
// 批量引入gem圖片
import { gemImages1 } from '../../../Store/modules/gem'
// 批量引入bag圖片
import { bagImages } from '../../../Store/modules/bag'
import { useSelector } from 'react-redux'
import ColorBar from '../colorBar/colorBar'
// 批量引入woodHandle圖片
const requireContext = require.context('../../../assets/images/woodhandle/for Simulation/',false)
const whImages = requireContext.keys().map(requireContext)





export default function FinalBag() {
    const selectedGem=useSelector(state=>state.gem.selectedGem)
    const [gemPic,setGemPic]=useState(gemImages1[0])
    const [hdPic,setWDPic]=useState('')
    const selectedMaterial=useSelector(state=>state.bag.selectedMaterial)
    const selectedSize=useSelector(state=>state.bag.selectedSize)
    const selectedColor=useSelector(state=>state.bag.selectedColor)
    const selectedHandle=useSelector(state=>state.bag.selectedHandle)
    const pathClip=`${selectedSize}_${selectedMaterial}_${selectedColor}`
    const index=bagImages.findIndex(item=>item.includes(pathClip))
    

    // 選擇gem時變化的副作用
    useEffect(()=>{

      const arr1=gemImages1.map(item=>item.split('media/')[1]).map(item=>item.replaceAll('_',' ')).map(item=>item.split('.')[0])
      const index=arr1.findIndex(item=>item===selectedGem)
      setGemPic(gemImages1[index])
     
    },[selectedGem])

    // 選擇woodHandle時變化的副作用
    useEffect(()=>{
      if(selectedSize==='PM'&&selectedHandle==='YUBARI'){
        setWDPic(whImages[8])
      }else if(selectedSize==='GM'&&selectedHandle==='WISHBONE Platanus Wood'&&(selectedColor==='Bleu'||selectedColor==='Precious Skins-Emerald'||selectedColor==='Precious Skins-Gold Black'||selectedColor==='Turquoise')){
           setWDPic(whImages[3])
      }else if(selectedSize==='GM'&&selectedHandle==='WISHBONE Platanus Wood'&&selectedColor!=='Bleu'&&selectedColor!=='Precious Skins-Emerald'&&selectedColor!=='Precious Skins-Gold Black'&&selectedColor!=='Turquoise'){
        setWDPic(whImages[2])
      }else if(selectedSize==='GM'&&selectedHandle==='WISHBONE Olive Wood'&&(selectedColor==='Bleu'||selectedColor==='Precious Skins-Emerald'||selectedColor==='Precious Skins-Gold Black'||selectedColor==='Turquoise')){
        setWDPic(whImages[1])
      }else if(selectedSize==='GM'&&selectedHandle==='WISHBONE Olive Wood'&&selectedColor!=='Bleu'&&selectedColor!=='Precious Skins-Emerald'&&selectedColor!=='Precious Skins-Gold Black'&&selectedColor!=='Turquoise'){
        setWDPic(whImages[0])
      }else if(selectedSize==='MM'&&selectedHandle==='WISHBONE Olive Wood'&&(selectedColor==='Bleu'||selectedColor==='Precious Skins-Emerald'||selectedColor==='Precious Skins-Gold Black'||selectedColor==='Turquoise')){
            setWDPic(whImages[5])
      }else if(selectedSize==='MM'&&selectedHandle==='WISHBONE Olive Wood'&&selectedColor!=='Bleu'&&selectedColor!=='Precious Skins-Emerald'&&selectedColor!=='Precious Skins-Gold Black'&&selectedColor!=='Turquoise'){
        setWDPic(whImages[4])
  }else if(selectedSize==='MM'&&selectedHandle==='YUBARI'&&(selectedColor==='Bleu'||selectedColor==='Precious Skins-Emerald'||selectedColor==='Precious Skins-Gold Black'||selectedColor==='Turquoise')){
    setWDPic(whImages[7])
}else if(selectedSize==='MM'&&selectedHandle==='YUBARI'&&selectedColor!=='Bleu'&&selectedColor!=='Precious Skins-Emerald'&&selectedColor!=='Precious Skins-Gold Black'&&selectedColor!=='Turquoise'){
         setWDPic(whImages[6])
}else{
        setWDPic(whImages[9])
  }
          
       
    },[selectedHandle,selectedColor,selectedSize])

   

  return (
    <div className='finalBagContainer'>
      <div className='finalBag'>
           
          <img className='bag' src={bagImages[index]} alt='' />
          <img className='woodHandle' src={hdPic} alt=''/>
          <img src={gemPic} alt='' className='gem'/>


      </div>
      <div className='div1'>
      <ColorBar className="colorBar"></ColorBar>
      </div>



    </div>
    
  )
}
