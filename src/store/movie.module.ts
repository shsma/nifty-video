import 'reflect-metadata';
import { Inject } from 'inversify-props';
import { Action, Mutation, Module, VuexModule } from 'vuex-class-modules';

import MovieGateway from '@/api/gateways/MovieGateway';

@Module({ generateMutationSetters: true })
export default class MovieModule extends VuexModule {
    @Inject()
    private gateway!: MovieGateway;

    public movieList: [] | null = null;

    @Action
    public async fetchMovies(): Promise<void> {
        try {
            const response = await this.gateway.list();
            this.setMovieList(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation
    public setMovieList(movieList: []): void {
        this.movieList = movieList;
    }
}
