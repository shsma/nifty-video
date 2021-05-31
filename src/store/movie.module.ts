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
import { Trailer } from '@/entities/external/trailer';

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
    private _trailer: Trailer | null = null;

    get page(): number {
        return this._page;
    }

    get movieList(): [Movie] | null {
        return this._movieList;
    }

    get movie(): Movie | null {
        return this._movie;
    }

    get trailer(): Trailer | null {
        return this._trailer;
    }

    @Mutation
    public setPage(page: number): void {
        this._page = page;
    }

    @Mutation
    public randomizePage(): void {
        this._page = Math.floor(Math.random() * 1000);
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
    public setTrailer(trailer: Trailer | null): void {
        this._trailer = trailer;
    }

    @Action
    public async fetchMovies(): Promise<void> {
        try {
            let response: any;
            do {
                this.randomizePage();
                response = await this.gateway.listMovies(this.page);
            } while (response.data.item_count < 30);
            this.setMovieList(response.data.items);
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public async fetchMovie(id: number): Promise<void> {
        try {
            const response = await this.gateway.fetchMovie(id);
            this.setMovie(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public async fetchTrailer(id: number): Promise<void> {
        try {
            const response = await this.gateway.fetchTrailer(id);
            this.setTrailer(response.data.results[0]);
            if (this._trailer) {
                this._trailer.movieId = id;
            }
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public async nextTrailer(): Promise<void> {
        try {
            if (this._movieList && this._trailer) {
                const currentIndex = this._movieList.findIndex(
                    (movie: Movie) => movie.id === this._trailer?.movieId
                );
                const response = await this.gateway.fetchTrailer(
                    this._movieList[currentIndex + 1].id
                );
                this.setTrailer(response.data.results[0]);
                this._trailer.movieId = this._movieList[currentIndex + 1].id;
            }
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public async previousTrailer(): Promise<void> {
        try {
            if (this._movieList && this._trailer) {
                const currentIndex = this._movieList.findIndex(
                    (movie: Movie) => movie.id === this._trailer?.movieId
                );
                const response = await this.gateway.fetchTrailer(
                    this._movieList[currentIndex - 1].id
                );
                this.setTrailer(response.data.results[0]);
                this._trailer.movieId = this._movieList[currentIndex - 1].id;
            }
        } catch (error) {
            console.error(error);
        }
    }

    @Action
    public closeTrailer(): void {
        this.setTrailer(null);
    }
}
