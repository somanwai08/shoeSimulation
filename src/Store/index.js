import { configureStore } from "@reduxjs/toolkit";
import gemReducer from './modules/gem'
import shoeReducer from './modules/shoe'


const store = configureStore({
    reducer:{
        gem:gemReducer,
        shoe:shoeReducer
    }
})

export default store