import { createSlice } from "@reduxjs/toolkit";
import { ISigninState } from "../../types/signInSliceTypes";
import { RootState } from "../../app/store";

const initialState: ISigninState = {
    authed: false,
    logindetails: {},
    userDefault: {},
    error: null
}

const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers : {
        loginInServiceSuccess: (state, action) => {
            state.authed = true;
            state.error = null;
            state.logindetails = action.payload;
            state.userDefault = action.payload.userdefault;
        }
    }
})

export const { loginInServiceSuccess } = signInSlice.actions;

export const authed = (state: RootState) => state.signIn?.authed;
export const userDefault = (state: RootState) => state.signIn?.userDefault;
export const error = (state: RootState) => state.signIn?.error;
export const logindetails = (state: RootState) => state.signIn?.logindetails;

export default signInSlice.reducer;