import { AxiosResponse } from 'axios';
import { Inject, injectable } from 'inversify-props';
import SERVICE_IDENTIFIER from '@/identifiers';
import HttpClient from '@/api/HttpClient';

@injectable()
export default class CustomerGateway {
    private resource = '/customers';

    public constructor(
        @Inject(SERVICE_IDENTIFIER.HTTP_CLIENT)
        private httpClient: HttpClient
    ) {
        //
    }

    public async list(): Promise<AxiosResponse> {
        return this.httpClient.instance.get(`${this.resource}`);
    }

    public async get(id: number): Promise<AxiosResponse> {
        return this.httpClient.instance.get(`${this.resource}/${id}`);
    }

    public async create(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.httpClient.instance.post(`${this.resource}`, payload);
    }

    public async update(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.httpClient.instance.patch(`${this.resource}`, payload);
    }

    public async delete(id: number): Promise<AxiosResponse> {
        return this.httpClient.instance.delete(`${this.resource}/${id}`);
    }
}
