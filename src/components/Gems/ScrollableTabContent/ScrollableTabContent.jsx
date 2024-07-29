import React from 'react'
import './ScrollableTabContent.scss'
import GemBar from '../gem bar/gemBar.jsx';

export default function ScrollableTabContent1(props) {


  return (
    <div className='scrollable'>
       
        {props.groups.map((item,index)=><GemBar key={index} group={item} series={props.series} horizontal={true} side={props.side}></GemBar>)}
    </div>
  )
}
