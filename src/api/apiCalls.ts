import { _post } from "."
import store, { AppDispatch } from "../app/store";
import { VIPER_CONST } from "../constants/api"
import { startLoading, stopLoading } from "../features/Loader/loaderSlice";
import { marketFetchSuccess } from "../features/market/marketSlice";
import { loginInServiceSuccess } from "../features/signin/signinSlice";

const baseURL = VIPER_CONST.base_url;

export const getMarkets = async(dispatch : AppDispatch) => {
    const body = {
        username: VIPER_CONST.alwaysOnUsername,
        sessionid: VIPER_CONST.alwaysOnSessionid,
        request: {}
    }
    try {
        const response = await _post(`${baseURL}getmarkets`, body);
        dispatch(marketFetchSuccess(response));
    } catch (error) {
        console.log("errors")
    }
}

export const login = async () => {
    store.dispatch(startLoading());
    const body = {
        "failstatus": 0,
        "request": {
            "username": "esite3@viponline",
            "password": "5f4dcc3b5aa765d61d8327deb882cf99",
            "marketid": "JAM",
            "languageid": "en",
            "getpaymentgateway": "Y"
        }
    }
    const response = await _post(`${baseURL}login`, body);
    
    store.dispatch(loginInServiceSuccess(response?.data));
    store.dispatch(stopLoading());
    
    return response;
}