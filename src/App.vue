<template>
    <nv-header />
    <router-view />
    <nv-footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NvHeader from '@/components/NvHeader.vue';
import NvFooter from '@/components/NvFooter.vue';

@Options({
    name: 'Home',
    components: {
        NvHeader,
        NvFooter
    }
})
export default class Home extends Vue {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
