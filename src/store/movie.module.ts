import 'reflect-metadata';
import { Inject } from 'inversify-props';
import {
    Action,
    Mutation,
    Module,
    VuexModule,
    RegisterOptions
} from 'vuex-class-modules';

import MovieGateway from '@/api/gateways/MovieGateway';
import { Movie } from '@/entities/external/movie';
import SERVICE_IDENTIFIER from '@/identifiers';

@Module({ generateMutationSetters: true })
export default class MovieModule extends VuexModule {
    constructor(props: RegisterOptions) {
        super(props);
    }

    @Inject(SERVICE_IDENTIFIER.MOVIE_GATEWAY)
    private gateway!: MovieGateway;

    private _page = Math.floor(Math.random() * 1000);
    private _movieList: [Movie] | null = null;
    private _movie: Movie | null = null;

    get movieList(): [Movie] | null {
        return this._movieList;
    }

    get movie(): Movie | null {
        return this._movie;
    }

    get page(): number {
        return this._page;
    }

    @Mutation
    public setMovieList(movieList: [Movie]): void {
        this._movieList = movieList;
    }

    @Mutation
    public setMovie(movie: Movie): void {
        this._movie = movie;
    }

    @Mutation
    public setPage(page: number): void {
        this._page = page;
    }

    @Mutation
    public randomizePage(): void {
        this._page = Math.floor(Math.random() * 1000);
    }

    @Action
    public async fetchMovies(): Promise<void> {
        try {
            let response: any;
            do {
                this.randomizePage();
                response = await this.gateway.list(this.page);
            } while (response.data.items.length < 30);
            this.setMovieList(response.data.items);
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
