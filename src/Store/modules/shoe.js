import { createSlice } from "@reduxjs/toolkit";


export const shoeSlice = createSlice({
    name:'shoe',
    initialState:{
        selectedHeel:'90mm',

        

        

    },
    reducers:{
     
      setSelectedHeel:(state,action)=>{
        state.selectedHeel=action.payload
      }
    }
})

export const { 
  setSelectedHeel,setSelectedView } = shoeSlice.actions
export default shoeSlice.reducer