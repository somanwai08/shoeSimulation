import React from 'react'
import { Flex } from "antd";
import { useSelector,useDispatch } from 'react-redux';
import './Material Bar.scss'
import { setSelectedMaterial,setSelectedSize,setSelectedColor } from '../../../Store/modules/bag';
import calfBox from '../../../assets/images/colors/Box Calf Maia Calf.jpg'
import PS from '../../../assets/images/colors/Precious Skins.jpg'

export default function MaterialBar() {
    const dispatch=useDispatch()
    let selectedMaterial = useSelector(state=>state.bag.selectedMaterial)
    let selectedSize = useSelector(state=>state.bag.selectedSize)

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(e.target.dataset.material,'target')
        const material = e.target.dataset.material
        // if(material==='Precious Skins'&&selectedSize!="MM"&&selectedSize!="GM"){
        //      dispatch(setSelectedSize('MM'))
        //      dispatch(setSelectedColor('Gold Alfalfa'))
        // }else if(material==='Precious Skins'&&selectedSize==="GM"){
        //   dispatch(setSelectedColor('Gold Alfalfa'))
        // }

        if(material==='Precious Skins'){
                  dispatch(setSelectedSize('MM'))
             dispatch(setSelectedColor('Gold Ruby'))
        }else if(material==='Box Calf Maia Calf'){
          dispatch(setSelectedSize('MM'))
          dispatch(setSelectedColor('Gold White'))
        }
        
        dispatch(setSelectedMaterial(e.target.dataset.material))
    
    }
     

  return (
    <div className='materialBar'>
                <div className='subTitle'>Material</div>


    <Flex gap="small" wrap="wrap" justify="space-evenly"  > 


    <a href="/"  onClick={handleClick} data-material="Box Calf Maia Calf">
      <img src={calfBox} alt='' data-material="Box Calf Maia Calf" ></img>
      <div className={`materialName ${selectedMaterial==='Box Calf Maia Calf'?'active':''} text`} data-material="Box Calf Maia Calf">Box Calf/Maia Calf</div>
    </a>

    {selectedSize!="PM"&&<a href="/"  onClick={handleClick} data-material="Box Calf Maia Calf">
      <img src={PS} alt='' data-material="Precious Skins"></img>
      <div className={`materialName ${selectedMaterial==='Precious Skins'?'active':''} text`} data-material="Precious Skins">Precious Skins</div>
    </a>}
    

    </Flex>
    
         
    </div>
  )
}
