import axios, { AxiosError, AxiosResponse } from 'axios';
import {MinutesToMilliseconds} from "./configs";

const TIMEOUT = MinutesToMilliseconds(1);
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.REACT_APP_SPRING_API_PATH;

interface CustomAxiosResponse extends Omit<AxiosResponse, 'data'> {
    data: String[];
}

interface CustomAxiosError extends Omit<AxiosError, 'response'> {
    response: CustomAxiosResponse;
}

export const setupAxiosInterceptors = async (): Promise<void> => {
    const onResponseSuccess = (response: AxiosResponse): AxiosResponse<any, any> => response;
    const onResponseError = async (err: CustomAxiosError): Promise<CustomAxiosError> => {
        const originalErrorMessages: String[] | undefined = err.response?.data !== undefined ? err.response?.data : ['Error has occured'];

        // TODO: Implement a better Axios Error handler, where each error will be thrown independently
        const translatedMessage = originalErrorMessages ? originalErrorMessages[0] : "";
        throw new Error(translatedMessage);
    };
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};
