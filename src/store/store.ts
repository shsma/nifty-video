import { createStore } from 'vuex';

import CounterModule from '@/store/counter.module';
import MovieModule from '@/store/movie.module';

const store = createStore({});

new CounterModule({ store, name: 'CounterModule' });
new MovieModule({ store, name: 'MovieModule' });

export default store;
