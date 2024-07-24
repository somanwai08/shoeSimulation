import { createSlice } from "@reduxjs/toolkit";


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
     
      setSelectedHeel:(state,action)=>{
        state.selectedHeel=action.payload
      },
    }
})

export const { 
  // setSelectedSize,setSelectedMaterial,setSelectedColor,
  setSelectedHeel } = shoeSlice.actions
export default shoeSlice.reducer