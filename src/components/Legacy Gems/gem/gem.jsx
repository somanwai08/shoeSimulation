import React from 'react'

import './gem.scss'
import classnames from 'classnames'
import { setSelectedGem, setSelectedSeries } from '../../../Store/modules/gem'
import { useDispatch,useSelector } from 'react-redux'

export default function Gem(props) {
       const selectedGem=useSelector(state=>state.gem.selectedGem)
       const {name,src,series}=props
       const dispatch=useDispatch()
           const myClass=classnames({
            active:name===selectedGem?true:false
           })
           const handleClick=(e)=>{
                e.preventDefault()
                dispatch(setSelectedGem(name))
                dispatch(setSelectedSeries(series))
               
           }

  return (
    <div  className='gem' onClick={handleClick} >
      <a href='/' >
        <img src={src} alt=''  className={myClass}></img>
      </a>
    </div>
  )
}
