/* eslint-disable camelcase */

/**
 * Find here the exhaustive list of the movie attributes on 'The movie DB'
 * https://developers.themoviedb.org/3/movies/get-movie-details
 */

export interface Movie {
    id: number;
    imdb_id?: string;
    adult: boolean;
    genre: {
        id: number;
        name: string;
    };
    original_language: string;
    original_title: string;
    overview?: string;
    poster_path?: string;
    vote_average: number;
    vote_count: number;
}
