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
                            <div class="flex-center">
                                <button class="trailer-button" @click="trailer">
                                    <i class="fal fa-play-circle"></i>
                                </button>
                                <div class="properties">
                                    <span class="movie-title">
                                        <h2>{{ movie.title }}</h2>
                                    </span>
                                    <span class="year">2012</span>
                                    <span class="age-limit">13+</span>
                                    <span class="time">2h 13m</span>
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
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    cursor: pointer;
}

.col-4:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    filter: alpha(opacity=100);
    opacity: 0.3;
}
.view {
    padding-right: 10%;
    width: 60%;
}
.movie-image img {
    min-width: 500px;
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
    border-radius: 10px 10px 10px 10px;
}

/*.movie-image-container img:hover {*/
/*    transform: scale(1.05);*/
/*    transition: all 0.2s ease-in-out;*/
/*    filter: alpha(opacity=100);*/
/*    opacity: 0.3;*/
/*}*/

/*.movie-image-container i {*/
/*    position: absolute;*/
/*    transform: translate(30%, -180%);*/
/*    -ms-transform: translate(-30%, -100%);*/
/*    background-color: transparent;*/
/*    color: white;*/
/*    font-size: 60px;*/
/*    padding: 20px 50px;*/
/*    border: none;*/
/*    cursor: pointer;*/
/*    border-radius: 5px;*/
/*}*/

/*.overlay-content {*/
/*    transition: 0.5s ease;*/
/*    opacity: 1;*/
/*    position: absolute;*/
/*    transform: translate(30%, -180%);*/
/*    -ms-transform: translate(-30%, -100%);*/
/*    text-align: center;*/
/*}*/

.rig-overlay {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: white;
    background-size: 50px 50px;
    opacity: 0;
    filter: alpha(opacity=0); /*For older IE*/
    transition: all 0.3s;
}

.movie-image-container i {
    position: absolute;
    transform: translate(30%, -180%);
    -ms-transform: translate(-30%, -180%);
    background-color: transparent;
    color: white;
    font-size: 60px;
    padding: 20px 50px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.movie-image-container i:hover {
    opacity: 1;
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
