import 'reflect-metadata';
import { container } from 'inversify-props';

import SERVICE_IDENTIFIER from './identifiers';
import HttpClient from '@/api/HttpClient';
import MovieGateway from '@/api/gateways/MovieGateway';
import CustomerGateway from '@/api/gateways/CustomerGateway';

export default class Container {
    public bindDependencies(): void {
        container
            .bind<HttpClient>(SERVICE_IDENTIFIER.HTTP_CLIENT)
            .to(HttpClient)
            .inSingletonScope();

        container
            .bind<MovieGateway>(SERVICE_IDENTIFIER.MOVIE_GATEWAY)
            .to(MovieGateway)
            .inSingletonScope();

        container
            .bind<CustomerGateway>(SERVICE_IDENTIFIER.CUSTOMER_GATEWAY)
            .to(CustomerGateway)
            .inSingletonScope();
    }
}
