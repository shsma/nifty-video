<template>
    <header class="header">
        <div class="inner_header">
            <div class="logo_container">
                <h1>Nifty<span>VIDEO</span></h1>
            </div>
            <ul class="useful">
                <a href="#"><li>About</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"
                    ><li><i class="fa fa-user"></i> Sign in</li></a
                >
            </ul>
        </div>
    </header>
    <section>
        <div class="tag_line">
            <h2>The best suggestion of movies to watch</h2>
            <br />
            <h3>Are in <span>Here</span></h3>
        </div>
        <br />
        <!--        <button class="reload-movies" @click="fetchMovies">Reload</button>-->
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'NvHeader'
})
export default class NvHeader extends Vue {}
</script>

<style></style>
