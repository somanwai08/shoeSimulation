import React from 'react'
import Headline from '../../headline/headline'
import { Button ,Flex ,ConfigProvider} from "antd";
import { useSelector,useDispatch } from 'react-redux';
import './Size Bar.scss'
import { setSelectedSize,setSelectedColor } from '../../../Store/modules/bag';

export default function SizeBar() {
    const dispatch=useDispatch()
    let selectedSize = useSelector(state=>state.bag.selectedSize)
    let selectedMaterial = useSelector(state=>state.bag.selectedMaterial)
    let selectedColor = useSelector(state=>state.bag.selectedColor)

    const handleClick=(e)=>{
      console.log(e.target.innerText,'e.target')
      if(e.target.innerText==='PM'){
              dispatch(setSelectedColor('Gold White'))
      }
     
      else if(e.target.innerText==='CLUTCH'&&selectedColor!='Gold White'&&selectedColor!='Gold Black'&&selectedColor!='Poudre'){
        dispatch(setSelectedColor('Gold White'))
      }

         dispatch(setSelectedSize(e.target.innerText))
    
    }
     

  return (
    <div className='sizeBar'>
                <div className='subTitle'>Size</div>

    <Flex gap="small" wrap="wrap" justify="center">
    <Button type="text" 
    className={selectedSize==='PM'?'active':''} 
    style={{
      display:selectedMaterial==='Precious Skins'?'none':'block'
    }}
    onClick={handleClick} >PM</Button>

    <Button type="text" className={selectedSize==='MM'?'active':''} onClick={handleClick} >MM</Button>

    <Button type="text" className={selectedSize==='GM'?'active':''} onClick={handleClick} >GM</Button>

    <Button type="text" 
    className={selectedSize==='CLUTCH'?'active':''} 
    style={{
      display:selectedMaterial==='Precious Skins'?'none':'block'
    }}
    onClick={handleClick} >CLUTCH</Button>
    </Flex>
        
    
         
    </div>
  )
}
