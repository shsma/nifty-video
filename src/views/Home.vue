<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <counter msg="Counter" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <footer msg="Place Footer Here" />
        <header msg="Header"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Counter from '@/components/Counter.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Options({
    name: 'Home',
    components: {
        HelloWorld,
        Counter,
        Header,
        Footer
    }
})
export default class Home extends Vue {}
</script>
