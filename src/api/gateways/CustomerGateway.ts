import { AxiosResponse } from 'axios';
import { injectable } from 'inversify-props';

import Gateway from '@/api/Gateway';

@injectable()
export default class CustomerGateway extends Gateway {
    private resource = '/customers';

    public constructor() {
        super('MovieGateway');
    }

    public async list(): Promise<AxiosResponse> {
        return this.instance.get(`${this.resource}`);
    }

    public async get(id: number): Promise<AxiosResponse> {
        return this.instance.get(`${this.resource}/${id}`);
    }

    public async create(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.instance.post(`${this.resource}`, payload);
    }

    public async update(payload: Record<string, any>): Promise<AxiosResponse> {
        return this.instance.patch(`${this.resource}`, payload);
    }

    public async delete(id: number): Promise<AxiosResponse> {
        return this.instance.delete(`${this.resource}/${id}`);
    }
}
