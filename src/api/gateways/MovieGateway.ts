import { AxiosResponse } from 'axios';
import { Inject, injectable } from 'inversify-props';

import HttpGateway from '@/api/HttpGateway';
import SERVICE_IDENTIFIER from '@/identifiers';

@injectable()
export default class MovieGateway {
    // https://api.themoviedb.org/3/list/99?api_key=728b1c73524e7e482910e452b355872b
    private resource = 'https://api.themoviedb.org/3/';

    public constructor(
        @Inject(SERVICE_IDENTIFIER.HTTP_GATEWAY)
        private http: HttpGateway
    ) {
        //
    }

    public async list(page = 1): Promise<AxiosResponse> {
        return this.http.instance.get(
            `${this.resource}/list/${page}?api_key=${this.http.apiKey}`
        );
    }

    public async get(id: number): Promise<AxiosResponse> {
        return this.http.instance.get(`${this.resource}/${id}`);
    }
}
