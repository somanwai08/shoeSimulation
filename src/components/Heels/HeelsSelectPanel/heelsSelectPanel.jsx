import './heelsSelectPanel.scss'
import React, { useState } from 'react'
import Headline from '../../headline/headline';
import { Col, Image,Row } from 'antd'
import { useDispatch } from 'react-redux';
import { setSelectedHeel } from '../../../Store/modules/shoe';
import classnames from 'classnames';
const requireContext1 = require.context('../../../assets/images/heel/',false)
export const gemImages1 = requireContext1.keys().map(requireContext1)




export default function HeelsSelectPanel() {

    const [selectedPic,setSelectedPic]=useState(0)
    const dispatch = useDispatch()

        const changeHeels=(key,height,color)=>{
            return()=>{
              // 選中的圖片顯示active
                setSelectedPic(key)
              // 更新選中的heel height
                dispatch(setSelectedHeel(height,color))
            }
            
        }

        // 要渲染的內容
        const heelsArr=gemImages1.map((item,i)=>{
         const height = item.split('.')[1].split('.')[0]
         const heightLabel = height.split('-')[0]
         const color = item.split('-')[1].split('.')[0]

         const myClass2 = classnames({
          'indicator':true,
          'active':selectedPic===i?true:false
        })
         

        return <Col key={i} xs={8} sm={8} lg={8}className='heels-choice'>
        <a >
          <Image
              width={'60%'}
              preview={false}
              onClick={changeHeels(i,height,color)}
              key={i}
              src={item}
              className={{'active':selectedPic===i?true:false}}
            />
          <p className='height-txt' onClick={changeHeels(i,height)}>{heightLabel}</p>
          <span className={myClass2} ></span>
          </a>
          </Col>})



  return (
    <div className='Heels-section'>
      <Headline title='Heels' borderTop={false}></Headline>
        <Row className='heels-pic' >
           
            {heelsArr}
        
        </Row>
       
       
      
    
    </div>
  )
}
