import React from 'react'
import { Flex } from "antd";
import { useSelector,useDispatch } from 'react-redux';
import './Wood Handle.scss'
import { setWoodHandle } from '../../../Store/modules/bag';
// 批量引入wood handle圖片
const requireContext = require.context('../../../assets/images/woodhandle/for Menu/',false)
const whMenuImages=requireContext.keys().map(requireContext)


export default function WoodHDBar() {
    const dispatch=useDispatch()
    let selectedHandle = useSelector(state=>state.bag.selectedHandle)
    let selectedSize=useSelector(state=>state.bag.selectedSize)
    console.log(whMenuImages,'whMenuImages')

    const handleClick=(e)=>{
        e.preventDefault()
        const chosen = e.target.dataset.woodhandle
        if(chosen===selectedHandle){
          dispatch(setWoodHandle('Normal'))
        }else{
          dispatch(setWoodHandle(chosen))
        }
        
    
    }
     

  return (
    <div className='whBar'>
                <div className='subTitle'>Wood Handle</div>


    <Flex gap="small" wrap="wrap" justify='center'>


    <a href="/"  
    onClick={handleClick} 
    
    style={{
      display:selectedSize==="MM"?'block':'none'
    }}
    // className={`whOption ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}` }
    >
      <img src={whMenuImages[0]} alt='' 
      
      data-woodhandle="WISHBONE Olive Wood" ></img>
      <div  className={`text ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}`} data-woodHandle="WISHBONE Olive Wood">WISHBONE</div>
      <div  className={`text1 ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}`} data-woodHandle="WISHBONE Olive Wood">Spanish Olive Wood</div>
    </a>

    <a href="/"  
    onClick={handleClick} 
    // onTouchStart={handleClick}
    style={{
      display:selectedSize==="MM"?'block':'none'
    }}
    // className={`whOption ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}` }
    >
      <img src={whMenuImages[4]} alt='' 
      
      data-woodhandle="YUBARI" ></img>
      <div  className={`text ${selectedHandle==='YUBARI'?'active':' '}`} data-woodHandle="YUBARI">YUBARI</div>
      <div  className={`text1 ${selectedHandle==='YUBARI'?'active':' '}`} data-woodHandle="YUBARI">Swiss Platanus Wood</div>
    </a>

    <a href="/"  onClick={handleClick}
    style={{
      display:selectedSize==='GM'?'block':'none'
    }}
    // className={`whOption ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}` }
    >
      <img src={whMenuImages[1]} 
      
      alt='' data-woodhandle="WISHBONE Olive Wood"></img>
      <div  className={`text ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}`} data-woodHandle="WISHBONE Olive Wood">WISHBONE </div>
      <div  className={`text1 ${selectedHandle==='WISHBONE Olive Wood'?'active':' '}` } data-woodHandle="WISHBONE Olive Wood">Spanish Olive Wood</div>
    </a>


    <a href="/"  onClick={handleClick} 
    style={{
      display:selectedSize==='GM'?'block':'none'
    }}
    // className={`whOption ` }
    >
      <img src={whMenuImages[2]} alt='' 
      
      data-woodhandle="WISHBONE Platanus Wood" ></img>
      <div  className={`text ${selectedHandle==='WISHBONE Platanus Wood'?'active':' '}`} data-woodHandle="WISHBONE Platanus Wood">WISHBONE</div>
      <div  className={`text1 ${selectedHandle==='WISHBONE Platanus Wood'?'active':' '}`} data-woodHandle="WISHBONE Platanus Wood">Swiss Platanus Wood</div>
    </a>

    <a href="/"  onClick={handleClick}
    style={{
      display:selectedSize==='PM'?'block':'none'
    }}
    // className={`whOption ${selectedHandle==='YUBARI'?'active':' '}` }
    >
      <img src={whMenuImages[3]} alt='' 
      
      data-woodhandle="YUBARI"></img>
      <div  className={`text ${selectedHandle==='YUBARI'?'active':' '}` } data-woodHandle="YUBARI">YUBARI</div>
      <div  className={`text1 ${selectedHandle==='YUBARI'?'active':' '}`} data-woodHandle="YUBARI">Swiss Platanus Wood</div>
    </a>

    </Flex>
    
         
    </div>
  )
}
