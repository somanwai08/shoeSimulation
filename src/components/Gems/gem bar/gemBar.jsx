import React from 'react'
import './gemBar.scss'
import Gem from '../gem/gem'
import classnames from 'classnames'


export default function GemBar(props) {
  
      const {group:{title,product},series,side,horizontal}=props
      const myClass = classnames({
        'gemBar':true,
        'border':horizontal?true:false

      })

      

  return (
    <div className={myClass} >
       {title==='Kelly'?'':<h4>{title}</h4>} 
      <div className={horizontal?'gemBar2':'gemBar1'}>
      {product.map((item,index)=><Gem className='gem' key={index} name={item.name} src={item.src} series={series} side={side}></Gem>)}
      </div>
      
    </div>
  )
}
