<template>
    <div class="home">
        <counter msg="CounterModule" />
        <button @click="fetchMovies">+</button>
        <div v-for="movie in movieList" :key="movie">
            <div>{{ movie.title }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Counter from '@/components/Counter.vue';
import { namespace } from 'vuex-class';
import { Movie } from '@/entities/external/movie';

const movieModule = namespace('MovieModule');

@Options({
    name: 'Home',
    components: {
        Counter
    }
})
export default class Home extends Vue {
    @movieModule.Getter('movieList')
    private movieList!: () => [Movie];

    @movieModule.Action('fetchMovies')
    private fetchMovies!: () => Promise<void>;
}
</script>
