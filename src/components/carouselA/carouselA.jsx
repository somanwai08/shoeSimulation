import React from 'react'
import './carouselA.scss'
import { Carousel } from 'antd'
import Finalshoe1 from '../finalShoe1/finalShoe1';

export default function CarouselA(n) {
         
          function fn(n){
                 let step=0
                 if(n===0){
                     return 0
                 }
                 if(n===1){
                     return 1
                 }
                 if(n===2){
                  return 2
                 }
                 while(n>2){
                  console.log('hi')
                  if(n%2===0){
                    console.log('run')
                    n=n/2
                    step++
                }else{
                  n=n-1
                  step++
                }
                 }
                 return step+2
          }
console.log(fn(10))

  return (
    <>

    </>
  )
}
