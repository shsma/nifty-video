import 'reflect-metadata';
import { container } from 'inversify-props';

import SERVICE_IDENTIFIER from './identifiers';
import HttpGateway from '@/api/HttpGateway';
import MovieGateway from '@/api/gateways/MovieGateway';
import CustomerGateway from '@/api/gateways/CustomerGateway';

export default class Container {
    public bindDependencies(): void {
        container
            .bind<HttpGateway>(SERVICE_IDENTIFIER.HTTP_GATEWAY)
            .to(HttpGateway)
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
