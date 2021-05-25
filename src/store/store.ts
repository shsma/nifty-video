import { createStore } from 'vuex';

import CounterModule from '@/store/counter.module';
import MovieModule from '@/store/movie.module';

const store = createStore({});

new CounterModule({ store, name: 'counter' });
new MovieModule({ store, name: 'movie' });

export default store;
