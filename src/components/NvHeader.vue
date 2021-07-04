<template>
    <header class="header">
        <div class="inner_header">
            <div class="logo_container">
                <h1>Nifty<span>VIDEO</span></h1>
            </div>
            <ul class="useful">
                <li><a href="#" class="menu">About</a></li>

                <li><a href="#" class="menu">Contact</a></li>
                <li>
                    <a href="#" class="menu"
                        ><i class="fas fa-globe"></i>French</a
                    >
                </li>
                <li>
                    <a href="#"> <i class="fa fa-user"></i> Sign in</a>
                </li>
            </ul>
        </div>
    </header>
    <section>
        <div class="tag_line">
            <h2>Wondering what to watch Tonight ?</h2>
            <br />
            <h3>
                We help you Discover, organize and track over our delicately
                secelected recommandation.
            </h3>
        </div>
        <br />
        <!--        <button class="btn-i"><i class="fas fa-chevron-down"></i></button>-->
        <!--        &lt;!&ndash;        <button class="reload-movies" @click="fetchMovies">Reload</button>&ndash;&gt;-->
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
