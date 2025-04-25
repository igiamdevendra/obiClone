import { _post } from "."
import { AppDispatch } from "../app/store";
import { VIPER_CONST } from "../constants/api"
import { marketFetchSuccess } from "../features/market/marketSlice";

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