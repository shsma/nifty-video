<template>
    <div class="home">
        <nv-trailer v-if="trailer"></nv-trailer>
        <button class="reload-movies" @click="fetchMovies">Reload</button>
        <br />
        <div class="wrapper">
            <div class="arrow-left">
                <i class="icon-angle-left"></i>
            </div>
            <section
                class="section-1"
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
            </section>
            <div class="arrow-right">
                <i class="icon-angle-right"></i>
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
.reload-movies {
    margin: 1rem 0 2rem 0;
    padding: 0.5rem;
    width: 300px;
    border: none;
    background: black;
    color: #ffffff !important;
    font-weight: 100;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    letter-spacing: 2px;
}

.reload-movies:hover {
    color: #404040 !important;
    font-weight: 700 !important;
    letter-spacing: 5px;
    background: none;
    -webkit-box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0s;
}

/*.movie-box {*/
/*    width: 80%;*/
/*    display: inline-flex;*/
/*    justify-content: space-between;*/
/*    align-items: center;*/
/*    border: 1px solid crimson;*/
/*    border-radius: 15px 10px 10px 15px;*/
/*    margin-bottom: 2rem;*/
/*    cursor: pointer;*/
/*}*/

.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;
    overflow: hidden;
    background-color: black;
}

/*.movie-box:hover {*/
/*    box-shadow: 0 0 11px #9999b9;*/
/*}*/

.movie-image {
    margin-right: 1rem;
}
.movie-image img {
    min-width: 480px;
    border-radius: 10px 10px 10px 10px;
}
.movie-title {
    padding: 1rem;
    background-color: papayawhip;
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
