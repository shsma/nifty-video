<template>
    <div class="home">
        <counter msg="CounterModule" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Counter from '@/components/Counter.vue';

@Options({
    name: 'Home',
    components: {
        Counter
    }
})
export default class Home extends Vue {}
</script>
