import { configureStore } from "@reduxjs/toolkit";
import gemReducer from './modules/gem'
import bagReducer from './modules/bag'
import bag from "./modules/bag";


const store = configureStore({
    reducer:{
        gem:gemReducer,
        bag:bag
    }
})

export default store