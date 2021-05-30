import { AxiosResponse } from 'axios';
import { Inject, injectable } from 'inversify-props';
import SERVICE_IDENTIFIER from '@/identifiers';
import HttpGateway from '@/api/HttpGateway';

@injectable()
export default class CustomerGateway {
    private resource = '/customers';

    public constructor(
        @Inject(SERVICE_IDENTIFIER.HTTP_GATEWAY)
        private http: HttpGateway
    ) {
        //
    }

    public async list(): Promise<AxiosResponse> {
        return this.http.instance.get(`${this.resource}`);
    }

    public async get(id: number): Promise<AxiosResponse> {
        return this.http.instance.get(`${this.resource}/${id}`);
    }

    public async create(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.http.instance.post(`${this.resource}`, payload);
    }

    public async update(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.http.instance.patch(`${this.resource}`, payload);
    }

    public async delete(id: number): Promise<AxiosResponse> {
        return this.http.instance.delete(`${this.resource}/${id}`);
    }
}
