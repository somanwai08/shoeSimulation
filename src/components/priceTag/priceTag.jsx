import { useSelector } from 'react-redux'
import './priceTag.scss'
import React ,{useEffect, useState}from 'react'
import { Switch } from 'antd'

export default function PriceTag() {
       const leftKelly = useSelector(state=>state.gem.selectedKelly.LEFT).split('Kelly ')[1]
       const rightKelly = useSelector(state=>state.gem.selectedKelly.RIGHT).split('Kelly ')[1]
       const shoe = useSelector(state=>state.shoe.selectedHeel)
       const [leftPrice,setLeftPrice] = useState(2000)
       const [rightPrice,setRightPrice] = useState(2000)
       const [shoePrice,setShoePrice] = useState(8980)
       let totalPrice = `${Math.floor((leftPrice+shoePrice+rightPrice)/1000)},${(leftPrice+shoePrice+rightPrice)%1000} `

        // 決定總鞋價
       useEffect(()=>{
        if(leftKelly==='14'||leftKelly==='15'||leftKelly==='6'||leftKelly==='5'||leftKelly==='4'||leftKelly==='1'||leftKelly==='2'||leftKelly==='3'){
            setLeftPrice(2000)
             }else if(leftKelly==='12'||leftKelly==='13'){
             setLeftPrice(3000)
             }else{
             setLeftPrice(1000)
             }
        if(rightKelly==='14'||rightKelly==='15'||rightKelly==='6'||rightKelly==='5'||rightKelly==='4'||rightKelly==='1'||rightKelly==='2'||rightKelly==='3'){
                setRightPrice(2000)
                 }else if(rightKelly==='12'||rightKelly==='13'){
                 setRightPrice(3000)
                 }else{
                 setRightPrice(1000)
                 }
        if(shoe==='90mm-White'){
            setShoePrice(8980)
        }else if(shoe==='75mm-White'){
            setShoePrice(8580)
        }else {
            setShoePrice(7580)
        }


       },[leftKelly,rightKelly,shoe])
    
       const [isTurnOn,setTurnOn]=useState(false)
const handleClick=()=>{
   
    setTurnOn(!isTurnOn)
}

  return (
    <>
    <Switch 
    className='price1' 
    size="small"  
    onClick={handleClick}
    checked={isTurnOn}
    />
    {isTurnOn?<span className='price'>HK${totalPrice}</span>:''}
    </>
  )
}
