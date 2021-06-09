<template>
    <nv-layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NvLayout from '@/components/layouts/NvLayout.vue';

@Options({
    name: 'App',
    components: {
        NvLayout
    }
})
export default class App extends Vue {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
