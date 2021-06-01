<template>
    <header class="header">
        <div class="showcase-top">
            <h1>NiftyVideo</h1>
        </div>
        <div class="showcase-content">
            <h2>
                No idea what to watch?
            </h2>
            <h2>We got you covered</h2>
            <p>
                Discover our carefully selected movie list
            </p>
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'NvHeader'
})
export default class NvHeader extends Vue {}
</script>

<style scoped>
.header {
    width: 100%;
    position: relative;
    margin-bottom: 4rem;
}

h1 {
    font-size: 4rem;
    font-weight: 500;
    color: #6060e6;
}

h2 {
    font-size: 2rem;
    font-weight: 500;
}

.showcase-top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.showcase::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 120px 100px 250px #000000;
}
</style>
