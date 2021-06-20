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
// const slider = document.querySelector('.carouselbox');
// let scrollPerClick;
// const ImagePadding = 20;
// show;
</script>

<style>
/*.carousel {*/
/*    display: flex;*/
/*    flex-wrap: wrap;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    height: 100vh;*/
/*    width: 100vh;*/

/*    overflow: hidden;*/
/*}*/

/*.carousel-box {*/
/*    width: 80%;*/
/*    display: inline-flex;*/
/*    justify-content: space-between;*/
/*    align-items: center;*/
/*    border: 1px solid crimson;*/
/*    border-radius: 15px 10px 10px 15px;*/
/*    margin-bottom: 2rem;*/
/*    cursor: pointer;*/
/*}*/

/*.carousel-box:hover {*/
/*    box-shadow: 0 0 11px #9999b9;*/
/*}*/

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
