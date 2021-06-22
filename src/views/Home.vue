<template>
    <div class="home">
        <nv-trailer v-if="trailer"></nv-trailer>
        <button class="reload-movies" @click="fetchMovies">
            Reload <i class="fal fa-sync-alt"></i>
        </button>
        <div class="container-films">
            <div class="row">
                <div
                    class="col-4"
                    id="section1"
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
                    <a class="switchLeft sliderButton"></a>
                    <a class="switchRight sliderButton"></a>
                </div>
            </div>
        </div>
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
.container-films {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    cursor: pointer;
}
.movie-image {
    padding-right: 10%;
    width: 60%;
}
.movie-image img {
    min-width: 500px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0.6;
    filter: alpha(opacity=40);
}
.movie-image img:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    opacity: 1;
    filter: alpha(opacity=100);
}

.movie-title {
    padding: 1rem;
    background-color: transparent;
}
.movie-title h2 {
    font-size: 1rem;
    color: black;
    font-weight: 300;
    text-transform: uppercase;
}

.movie-title h2:hover {
    color: crimson;
}
</style>
