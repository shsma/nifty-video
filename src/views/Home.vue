<template>
    <div class="home">
        <nv-trailer v-if="trailer"></nv-trailer>
        <button @click="fetchMovies">Reload</button>
        <div v-for="movie in movieList" :key="movie">
            <div @click="fetchTrailer(movie.id)">{{ movie.title }}</div>
            <img
                :src="movieBackdrop(movie)"
                alt=""
                width="500"
                height="600"
                @click="fetchTrailer(movie.id)"
            />
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
