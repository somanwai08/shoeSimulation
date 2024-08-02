import './carousel.scss'
import React from 'react'
import {Card, Carousel} from 'antd'
import FinalShoe1 from '../finalShoe1/finalShoe1';
import ShoeCloseUp from '../ShoeCloseUp/shoeCloseUp';
import HeelsShowPanel from '../Heels/HeelsShow/heelsShowPanel';

export default function CustomCarousel() {
    const contentStyle = {
        margin: 0,
        height: '28vh',
        color: '#fff',
        minHeight:'366px',
        // lineHeight: '160px',
        textAlign: 'center',
        background: 'tansparent',
        // border:'none'
      };
      const onChange = (currentSlide) => {
        // console.log(currentSlide);
      };

  return (
    <Carousel afterChange={onChange} arrows dots={false} >
      <div>
        <Card style={contentStyle} >
        <FinalShoe1></FinalShoe1>
        </Card>
      </div>
      <div>
        <Card style={contentStyle} >
        <ShoeCloseUp></ShoeCloseUp>
        </Card>
      </div>
      <div>
        <Card style={contentStyle} >
        <HeelsShowPanel></HeelsShowPanel>
        </Card>
      </div>
    </Carousel>
  )
}
