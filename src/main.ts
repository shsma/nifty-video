import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
import Container from '@/container';

class Bootstrap {
    public readonly container: Container;

    constructor() {
        this.container = new Container();
    }

    public start(): void {
        console.log('here');
        this.container.bindDependencies();
        Bootstrap.mount();
    }

    private static mount(): void {
        createApp(App)
            .use(store)
            .use(router)
            .mount('#app');
    }
}

new Bootstrap().start();
