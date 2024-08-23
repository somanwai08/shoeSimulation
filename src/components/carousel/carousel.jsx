import './carousel.scss'
import React from 'react'
import { Carousel} from 'antd'
import FinalShoe1 from '../finalShoe1/finalShoe1';
import HeelsShowPanel from '../Heels/HeelsShow/heelsShowPanel';

export default function CustomCarousel() {
    const contentStyle = {
        margin: 0,
        height: '28vh',
        color: '#fff',
        minHeight:'366px',
        textAlign: 'center',
        background: 'tansparent',
      };
      const onChange = (currentSlide) => {
      };

  return (
    <div >
    <Carousel afterChange={onChange} arrows dots={false} className='custom-carousel'>
    <div>
      <h3 className='slide captured' >
      <FinalShoe1></FinalShoe1>
      </h3>
    </div>
    <div>
      <h3 className='slide' >
      <HeelsShowPanel></HeelsShowPanel>
      </h3>
    </div>
  </Carousel>
    </div>
    
  )
}
