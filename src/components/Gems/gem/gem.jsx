import React from 'react'

import './gem.scss'
import classnames from 'classnames'
import { setSelectedGem, setSelectedSeries,setSelectedKelly, ResetKelly } from '../../../Store/modules/gem'
import { useDispatch,useSelector } from 'react-redux'

export default function Gem(props) {
       const selectedGem=useSelector(state=>state.gem.selectedGem)
       const selectedKellySide = useSelector(state=>state.gem.selectedKelly.selectedSide)
       const selectedKelly = useSelector(state=>state.gem.selectedKelly)
       const {name,src,series,side}=props

       const isActive=()=>{
                 if(side===undefined&&name===selectedGem){
                  // 如果side屬性是undefine，就不是選中Kelly Gem，只要name等於selectedGem，就是active
                  return true
                 }else if(side!='undefined'&&side==='LEFT'&&name===selectedKelly.LEFT){
                  
                  // 如果side屬性不是是undefine，就代表選中Kelly Gem
                  // 這時如果選中LEFT panel，而且名稱和selectedKelly.LEFT一樣，嗰粒gem就係active
                  return true
                 }else if(side!='undefined'&&side==='RIGHT'&&name===selectedKelly.RIGHT){
                  
                  // 如果side屬性不是是undefine，就代表選中Kelly Gem
                  // 這時如果選中RIGHT panel，而且名稱和selectedKelly.RIGHT一樣，嗰粒gem就係active
                  return true
                 }else{
                  return false
                 }
       }
       const dispatch=useDispatch()
            // 控制圖片的
           const myClass=classnames({
            active:isActive(),
            'gem':true
           })


           const handleClick=(e)=>{
                e.preventDefault()
               
                const isKelly = e.target.src.split('/')[e.target.src.split('/').length-1].includes('Kelly')
                if(isKelly){
                    dispatch(setSelectedGem(''))
                    // 獲得Kelly gem的顏色（名稱）
                    const kellyName ='Kelly ' + e.target.src.split('_')[e.target.src.split('_').length-1].split('.')[0]
                    dispatch(setSelectedKelly({side:selectedKellySide,name:kellyName}))

                }else{
                  // 放上gem的照片
                  dispatch(setSelectedGem(name))
                  // reset Kelly gem為沒有選中
                  dispatch(ResetKelly())
                }
                
                
                dispatch(setSelectedSeries(series))
               
           }

  return (
    <div  className={myClass} onClick={handleClick} >
      <a href='/' >
        <img src={src} alt=''  ></img>
        <span className='indicator'></span>
      </a>
        
    </div>
  )
}
