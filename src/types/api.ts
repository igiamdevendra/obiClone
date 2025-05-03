import { AppDispatch } from "../app/store";

export type PostRequest = (
    url: string,
    data: any,
    headers?: Record<string, string> | null
) => Promise<any>;

export type LoginType = (
    dispatch: AppDispatch,
    data: any,
    sendBroadcastMessage: () => void,
    standByLogin: boolean,
    explicit: boolean
) => any