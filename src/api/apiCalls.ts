import { _post } from "."
import { VIPER_CONST } from "../constants/api"

const baseURL = VIPER_CONST.base_url;

export const getMarkets = async() => {
    const body = {
        username: VIPER_CONST.alwaysOnUsername,
        sessionid: VIPER_CONST.alwaysOnSessionid,
        request: {}
    }
    try {
        const response = await _post(`${baseURL}getmarkets`, body)
    } catch (error) {
        console.log("errors")
    }
}