import { createSlice } from "@reduxjs/toolkit";


export const shoeSlice = createSlice({
    name:'shoe',
    initialState:{
        selectedHeel:'90mm-White',
        shot:0
        

        

    },
    reducers:{
     
      setSelectedHeel:(state,action)=>{
        state.selectedHeel=action.payload
      },
      increaseShot:(state,action)=>{
        state.shot++
      },
      decreaseShot:(state,action)=>{
        state.shot--
      }
    }
})

export const { 
  setSelectedHeel,setSelectedView ,increaseShot,decreaseShot} = shoeSlice.actions
export default shoeSlice.reducer