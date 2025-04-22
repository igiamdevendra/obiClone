import { PostRequest } from "../types/api";
import { appAxios } from "./axiosConfig";

export const _post: PostRequest = async (url, data, headers = null) => {
    // const endpoint = url.split('/').filter(Boolean).pop();
    let response;
    try {
        if (headers) {
            response = await appAxios.post(url, data, { headers });
        }
        else {
            response = await appAxios.post(url, data);
        }
        return response?.data;
    } catch (error) {
        console.log("error")
    }
}