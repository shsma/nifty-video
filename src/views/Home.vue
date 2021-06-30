<template>
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
                        <div class="movie-title">
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

<style>
@media (max-width: 9000px) {
    #rig li {
        width: 25%;
    }
}

@media (max-width: 800px) {
    #rig li {
        width: 33.33%;
    }
}

@media (max-width: 500px) {
    #rig li {
        width: 50%;
    }
}

@media (max-width: 350px) {
    #rig li {
        width: 100%;
    }
}
.movie-container {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 1px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    cursor: pointer;
}

.movie-image {
    position: relative;
    width: 90%;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-family: 'Quicksand', sans-serif;
    opacity: 0;
    transition: opacity 0.25s;
}
.image-overlay > * {
    transform: translateY(20px) scale(1.02);
    transition: transform 0.25s;
}

.image-overlay:hover {
    opacity: 1;
}

.image-overlay:hover > * {
    transform: translateY(0);
}

.movie-image {
    display: block;
}

.trailer-button {
    flex-grow: 1;
    text-align: center;
    opacity: 0.4;
}

.trailer-button i {
    border-radius: 25vw;
    background: rgba(0, 0, 0, 0.5);
    border: 0.1em solid white;
    padding: 1.2vw;
    font-size: 1.5vw;
    margin-top: 70px;
    margin-bottom: 20px;
}
.trailer-button:hover {
    color: red;
    opacity: 1;
    transition: 0.2s;
    visibility: visible;
}
h4 {
    padding-top: 4px;
}
.movie-title {
    padding: 1rem;
    background-color: transparent;
}
.movie-title h2 {
    font-size: 15px;
    color: black;
    font-weight: 300;
    text-transform: uppercase;
}

.movie-title h2:hover {
    color: crimson;
}
</style>
