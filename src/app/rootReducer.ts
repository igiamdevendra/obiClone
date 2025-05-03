import { combineReducers } from "@reduxjs/toolkit";
import marketReducer from "../features/market/marketSlice";
import signInReducer from "../features/signin/signinSlice"

const rootReducer = combineReducers({
    market: marketReducer,
    signIn: signInReducer
})

export default rootReducer;