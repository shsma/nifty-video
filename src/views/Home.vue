<template>
    <div>
        <!--        <p>-->
        <!--            WELCOME Lorem, ipsum dolor sit amet consectetur adipisicing elit.-->
        <!--            Dolor nam architecto, laudantium totam repellat quasi reprehenderit-->
        <!--            earum maiores tenetur cum rem id repudiandae doloribus aut ipsa-->
        <!--            facere doloremque itaque eius sint aspernatur at porro quidem? Ipsa-->
        <!--            laborum illum reiciendis rerum-->
        <!--        </p>-->
    </div>
    <div class="home">
        <nv-trailer v-if="trailer"></nv-trailer>
        <button class="reload-movies" @click="fetchMovies">
            Reload <i class="fal fa-sync-alt"></i>
        </button>
        <div class="movie-container">
            <div class="row">
                <div
                    class="col-4"
                    id="section1"
                    v-for="movie in movieList"
                    :key="movie"
                    @click="fetchTrailer(movie.id)"
                >
                    <div class="view">
                        <div class="movie-image">
                            <img
                                :src="movieBackdrop(movie)"
                                alt=""
                                width="500"
                                height="600"
                            />
                            <div class="image-overlay">
                                <button class="trailer-button" @click="trailer">
                                    <i class="fal fa-play-circle"></i>
                                </button>
                                <div class="properties">
                                    <span class="vote_average">
                                        <h3>
                                            Vote average :
                                            {{ movie.vote_average }}
                                        </h3>
                                    </span>
                                    <span class="release_date">
                                        <h4>
                                            release date :
                                            {{ movie.release_date }}
                                        </h4>
                                    </span>
                                    <!--                                    <span class="age-limit">-->
                                    <!--                                        <h2>-->
                                    <!--                                            {{ movie.adult }}-->
                                    <!--                                        </h2>-->
                                    <!--                                    </span> need function to return if movie +18 or not -->
                                </div>
                            </div>
                        </div>
                        <div class="movie-title underline--magical">
                            <h2>{{ movie.title }}</h2>
                        </div>
                    </div>
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

<style></style>
