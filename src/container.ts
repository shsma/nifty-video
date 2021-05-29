import 'reflect-metadata';
import { container } from 'inversify-props';

import MovieGateway from '@/api/gateways/MovieGateway';
import CustomerGateway from '@/api/gateways/CustomerGateway';

export default class Container {
    public bindDependencies(): void {
        container.addSingleton<MovieGateway>(MovieGateway, 'MovieGateway');
        container.addSingleton<CustomerGateway>(
            CustomerGateway,
            'CustomerGateway'
        );
    }
}
