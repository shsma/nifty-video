import axios, { AxiosInstance } from 'axios';

export default abstract class Gateway {
    public name: string;
    public instance: AxiosInstance;
    private baseDomain = process.env.ROOT_API || 'https://api.themoviedb.org/3';
    private timeout = process.env.TIMEOUT || 1000;
    private baseURL = `${this.baseDomain}`;

    protected constructor(name: string) {
        this.name = name;
        this.instance = axios.create({
            baseURL: this.baseURL,
            headers: { Accept: 'application/json' },
            timeout: this.timeout as number
        });
    }
}
