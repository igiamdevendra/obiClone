export type PostRequest = (
    url: string,
    data: any,
    headers?: Record<string, string> | null
) => Promise<any>;