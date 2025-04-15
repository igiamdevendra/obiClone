import { appAxios } from "./axiosConfig";

export const _post = async (url: string, data: any, headers: any) => {
    // const endpoint = url.split('/').filter(Boolean).pop();
    let response;
    try {
        if (headers) {
            const response = await appAxios.post(url, data, { headers });
        }
        else {
            const response = await appAxios.post(url, data);
        }
        return response?.data;
    } catch (error) {
        console.log("error")
    }

}