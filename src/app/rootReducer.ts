import { combineReducers } from "@reduxjs/toolkit";
import marketReducer from "../features/market/marketSlice";

const rootReducer = combineReducers({
    market: marketReducer
})

export default rootReducer;