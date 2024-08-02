import React from 'react'
import './carouselA.scss'
import { Carousel } from 'antd'
import Finalshoe1 from '../finalShoe1/finalShoe1';

export default function CarouselA() {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

      const onChange = (currentSlide) => {
        // console.log(currentSlide);
      };
  return (
    <>
 <>
    <Carousel arrows dots={false} className='custom-carouselA'>
      <div>
        <h3 
        // style={contentStyle}
        className='slide'
        >
            <Finalshoe1></Finalshoe1>
        </h3>
      </div>
      <div>
        <h3 
        // style={contentStyle}
        className='slide'
        >
            <Finalshoe1></Finalshoe1>
        </h3>
      </div>
    
    </Carousel>
  
  </>
    </>
  )
}
