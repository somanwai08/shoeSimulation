import React from 'react'
import './gemBar.scss'
import Gem from '../gem/gem'


export default function GemBar(props) {
  
      const {group:{title,product},series,side}=props
      

  return (
    <div className='gemBar'>
       {title==='Kelly'?'':<h4>{title}</h4>} 
      <div className='gemBar1'>
      {product.map((item,index)=><Gem key={index} name={item.name} src={item.src} series={series} side={side}></Gem>)}
      </div>
      
    </div>
  )
}
