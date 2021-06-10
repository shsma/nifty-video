<template>
    <div class="home">
        <nv-trailer v-if="trailer"></nv-trailer>
        <button class="reload-movies" @click="fetchMovies">Reload</button>
        <br />
        <section
            class="movie-box"
            v-for="movie in movieList"
            :key="movie"
            @click="fetchTrailer(movie.id)"
        >
            <div class="movie-image">
                <img
                    :src="movieBackdrop(movie)"
                    alt=""
                    width="500"
                    height="600"
                />
            </div>
            <div class="movie-title">
                <h2>{{ movie.title }}</h2>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { namespace } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';

import { Movie } from '@/entities/external/movie';
import NvTrailer from '@/components/NvTrailer.vue';
import { Trailer } from '@/entities/external/trailer';

const movieModule = namespace('MovieModule');

@Options({
    name: 'Home',
    components: {
        NvTrailer
    }
})
export default class Home extends Vue {
    @movieModule.Getter('movieList')
    private movieList!: [Movie];

    @movieModule.Getter('trailer')
    private trailer!: Trailer;

    @movieModule.Action('fetchMovies')
    private fetchMovies!: () => Promise<void>;

    @movieModule.Action('fetchTrailer')
    private fetchTrailer!: (id: number) => Promise<void>;

    protected movieBackdrop(movie: Movie): string {
        return `${process.env.VUE_APP_IMAGE_API}${movie.backdrop_path}`;
    }
}
</script>

<style>
.reload-movies {
    margin: 1rem 0 2rem 0;
    padding: 0.5rem;
    border: 2px solid #a9a9ce;
    color: #575786;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
}
.movie-box {
    width: 80%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid crimson;
    border-radius: 15px 10px 10px 15px;
    margin-bottom: 2rem;
    cursor: pointer;
}
.movie-box:hover {
    box-shadow: 0 0 11px #9999b9;
}
.movie-image {
    margin-right: 1rem;
}
.movie-image img {
    min-width: 500px;
    border-radius: 10px 0 0 10px;
}
.movie-title {
    padding: 2rem;
}
.movie-title h2 {
    font-size: 1.5rem;
    color: #575786;
    font-weight: 500;
}
</style>
