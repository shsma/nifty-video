<template>
    <div class="home">
        <button @click="fetchMovies">+</button>
        <div v-for="movie in movieList" :key="movie">
            <div>{{ movie.title }}</div>
            <img :src="movieBackdrop(movie)" alt="" width="500" height="600" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Movie } from '@/entities/external/movie';

const movieModule = namespace('MovieModule');

@Options({
    name: 'Home',
    components: {}
})
export default class Home extends Vue {
    @movieModule.Getter('movieList')
    private movieList!: () => [Movie];

    @movieModule.Action('fetchMovies')
    private fetchMovies!: () => Promise<void>;

    private movieBackdrop(movie: Movie): string {
        return `${process.env.VUE_APP_IMAGE_API}${movie.backdrop_path}`;
    }
}
</script>
