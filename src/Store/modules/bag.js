import { createSlice } from "@reduxjs/toolkit";

// 批量引入bag圖片
const requireContext = require.context('../../assets/images/bag',false)
const bagImages=requireContext.keys().map(requireContext)
// console.log(bagImages,'bagImages')

export const bagSlice = createSlice({
    name:'bag',
    initialState:{
        selectedMaterial:'Box Calf Maia Calf',
        selectedSize:'MM',
        selectedColor:'Gold White',
        selectedHandle:'Normal'
        

        

    },
    reducers:{
      setSelectedSize:(state,action)=>{
            state.selectedSize=action.payload
      },
      setSelectedMaterial:(state,action)=>{
        state.selectedMaterial=action.payload
      },
      setWoodHandle:(state,action)=>{
        state.selectedHandle=action.payload
      },
      setSelectedColor:(state,action)=>{
        state.selectedColor=action.payload
      }
    }
})

export {bagImages}
export const { setSelectedSize,setSelectedMaterial,setWoodHandle,setSelectedColor } = bagSlice.actions
export default bagSlice.reducer