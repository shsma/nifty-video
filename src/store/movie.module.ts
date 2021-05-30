import 'reflect-metadata';
import { Inject } from 'inversify-props';
import { Action, Mutation, Module, VuexModule } from 'vuex-class-modules';

import MovieGateway from '@/api/gateways/MovieGateway';
import { Movie } from '@/entities/external/movie';

@Module({ generateMutationSetters: true })
export default class MovieModule extends VuexModule {
    @Inject()
    private gateway!: MovieGateway;

    private _movieList: [Movie] | null = null;
    private _movie: Movie | null = null;

    get movieList(): [Movie] | null {
        return this._movieList;
    }

    get movie(): Movie | null {
        return this._movie;
    }

    @Mutation
    public setMovieList(movieList: [Movie]): void {
        this._movieList = movieList;
    }

    @Mutation
    public setMovie(movie: Movie): void {
        this._movie = movie;
    }

    @Action
    public async fetchMovies(): Promise<void> {
        try {
            const response = await this.gateway.list();
            this.setMovieList(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public async getMovie(id: number): Promise<void> {
        try {
            const response = await this.gateway.get(id);
            this.setMovie(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}
