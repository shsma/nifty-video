<template>
    <header class="header">
        <div class="inner_header">
            <div class="logo_container">
                <h1>Nifty<span>VIDEO</span></h1>
            </div>
            <ul class="useful">
                <a><li>About</li></a>
                <a><li>Contact</li></a>
                <a><li>Sign in</li></a>
            </ul>
        </div>
    </header>
    <section>
        <div class="tag_line">
            <h2>The best suggestion of movies to watch</h2>
            <br />
            <h3>Are in <span>Here</span></h3>
        </div>
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
