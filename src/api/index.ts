import { PostRequest } from "../types/api";
import { appAxios } from "./axiosConfig";

export const _post: PostRequest = async (url, data, headers = null) => {
    // const endpoint = url.split('/').filter(Boolean).pop();
    let response;
    try {
        console.log("request for ", url, data);
        if (headers) {
            response = await appAxios.post(url, data, { headers });
        }
        else {
            response = await appAxios.post(url, data);
        }
        console.log("response for ", url, response?.data);
        return response?.data;
    } catch (error) {
        console.log("error")
    }
}