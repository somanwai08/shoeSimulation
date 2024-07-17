import './heelsSelectPanel.scss'
import React, { useState } from 'react'
import Headline from '../../headline/headline';
import { Col, Image,Row } from 'antd'
import { useDispatch } from 'react-redux';
import { setSelectedHeel } from '../../../Store/modules/shoe';
const requireContext1 = require.context('../../../assets/images/heel/',false)
export const gemImages1 = requireContext1.keys().map(requireContext1)



export default function HeelsSelectPanel() {
    const [selectedPic,setSelectedPic]=useState(0)
    const dispatch = useDispatch()

        const changeHeels=(key,height)=>{
            return()=>{

              // 選中的圖片顯示active
                setSelectedPic(key)
              // 更新選中的heel height
                dispatch(setSelectedHeel(height))
            }
            
        }

        // 要渲染的內容
        const heelsArr=gemImages1.map((item,i)=>{
         const height = item.split('media/')[1].split('.')[0]

        return <Col xs={24} sm={12} className='heels-choice'>
        <a >
          <Image
              width={'90%'}
              preview={false}
              onClick={changeHeels(i,height)}
              key={i}
              src={item}
              className={{'active':selectedPic===i?true:false}}
            />
          <p className='height-txt' onClick={changeHeels(i,height)}>{height}</p>
          </a>
          </Col>})



  return (
    <div className='Heels-section'>
      <Headline title='HEELS'></Headline>
        <Row className='heels-pic' >
           
            {heelsArr}
        
        </Row>
       
       
      
    
    </div>
  )
}
