import { createStore } from 'vuex';
import CounterModule from './counter.module';
import MovieModule from './movie.module';

const store = createStore({});

new CounterModule({ store, name: 'counter' });
new MovieModule({ store, name: 'movie' });

export default store;
