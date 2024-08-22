import React from 'react'
import './carouselA.scss'
import { Carousel } from 'antd'
import Finalshoe1 from '../finalShoe1/finalShoe1';

export default function CarouselA() {
         
        const arr=[0,2,3,3,5,2,1,0]

        function judgeMountain(arr){
            if(arr.length===1||arr.length===2){
              // edge case:arr length is too short
              return false
            }else{
              const max = Math.max(...arr)
              const index = arr.findIndex(item=>item===max)
              
              // edge case:the max number is at the end of the arr
              // edge case:the max number is the first element
              if(index===arr.length-1||index===0){
                return false
              }
              for(let i=0;i<index;i++){
                if(arr[i]>=arr[i+1]){
                  return false
                }
              }
              for(let i=index;i<arr.length;i++){
                if(arr[i]<=arr[i+1]){

                  return false
                }
              }
              return true
            }
        }

judgeMountain(arr)
console.log(judgeMountain(arr))
  return (
    <>
    </>
  )
}
