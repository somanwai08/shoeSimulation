import React from 'react'
import './carouselA.scss'
import { Carousel } from 'antd'
import Finalshoe1 from '../finalShoe1/finalShoe1';

export default function CarouselA() {
         
        const arr=[17,18,5,4,6,1]

        function greatestRight(arr){
          if(arr.length===1){
            arr=[-1]
          }else {
            for(let i=0;i<arr.length-1;i++){
              let tem=0
                    for(let j=arr.length-1;j>i;j--){
                      
                            //  console.log(`i:${i} j:${j}`)
                             
                             if(tem<arr[j]){
                                     tem=arr[j]
                             }
                            //  console.log(`arr[i]:${arr[i]}  arr[j]:${arr[j]}  tem:${tem}`)
                            //  console.log(`第${i}輪，tem：${tem}`)
                            arr[i]=tem
                            // console.log(`完了第${i}輪，arr：${arr}tem：${tem}`)
                    }
                  
            }
              arr[arr.length-1]=-1
            // console.log(arr,'arr')
            
          }
        
        }

greatestRight(arr)
// console.log(judgeMountain(arr))
  return (
    <>
    </>
  )
}
