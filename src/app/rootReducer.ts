import { combineReducers } from "@reduxjs/toolkit";
import marketReducer from "../features/market/marketSlice";
import signInReducer from "../features/signin/signinSlice";
import loaderReducer from "../features/Loader/loaderSlice";

const rootReducer = combineReducers({
    market: marketReducer,
    signIn: signInReducer,
    loader: loaderReducer
})

export default rootReducer;