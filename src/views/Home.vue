<template>
    <div class="home"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import Counter from '@/components/Counter.vue';

@Options({
    name: 'Home',
    components: {
        HelloWorld,
        Counter
    }
})
export default class Home extends Vue {}
</script>
