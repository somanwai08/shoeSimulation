import { createSlice } from "@reduxjs/toolkit";

// 批量引入shoe圖片
const requireContext = require.context('../../assets/images/bag',false)
const shoeImages=requireContext.keys().map(requireContext)
// console.log(shoeImages,'shoeImages')

export const shoeSlice = createSlice({
    name:'shoe',
    initialState:{
        selectedMaterial:'Box Calf Maia Calf',
        selectedSize:'MM',
        selectedColor:'Gold White',
        selectedHandle:'Normal',
        selectedHeel:'20MM'

        

        

    },
    reducers:{
      // setSelectedSize:(state,action)=>{
      //       state.selectedSize=action.payload
      // },
      // setSelectedMaterial:(state,action)=>{
      //   state.selectedMaterial=action.payload
      // },
      // setSelectedColor:(state,action)=>{
      //   state.selectedColor=action.payload
      // },
      setSelectedHeel:(state,action)=>{
        state.selectedHeel=action.payload
      },
    }
})

export {shoeImages}
export const { 
  // setSelectedSize,setSelectedMaterial,setSelectedColor,
  setSelectedHeel } = shoeSlice.actions
export default shoeSlice.reducer