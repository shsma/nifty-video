import axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify-props';

@injectable()
export default class HttpGateway {
    public instance: AxiosInstance;
    public apiKey: string | undefined;
    public baseURL: string | undefined;

    public constructor() {
        this.apiKey = process.env.VUE_APP_API_KEY;
        this.baseURL = process.env.VUE_APP_ROOT_API;
        this.instance = axios.create({
            baseURL: this.baseURL,
            headers: { Accept: 'application/json' },
            timeout: (process.env.TIMEOUT || 1000) as number
        });
    }
}
