import { AxiosResponse } from 'axios';
import { injectable } from 'inversify-props';

import Gateway from '@/api/Gateway';

@injectable()
export default class MovieGateway extends Gateway {
    private resource = '/';

    public constructor() {
        super('MovieGateway');
    }

    public async list(): Promise<AxiosResponse> {
        return this.instance.get(`${this.resource}`);
    }

    public async get(id: number): Promise<AxiosResponse> {
        return this.instance.get(`${this.resource}/${id}`);
    }
}
