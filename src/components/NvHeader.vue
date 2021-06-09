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

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.header {
    width: 100%;
    height: 80px;
    display: block;
    background-color: #101010;
}
.inner_header {
    width: 1000px;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.logo_container {
    height: 100%;
    display: table;
    float: left;
}

.logo_container h1 {
    color: crimson;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Montserrat';
    font-size: 32px;
    font-weight: 200;
}

.logo_container h1 span {
    font-weight: 800;
    color: white;
}

.useful {
    float: right;
    height: 100%;
}

.useful a {
    height: 100%;
    display: table;
    float: left;
    padding: 0 20px;
}

.useful a:last-child {
    padding-right: 0;
}

.useful a li {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    color: white;
    font-family: 'Montserrat';
    font-size: 16px;
}

section {
    background-image: ;
}
.tag_line h2 {
    font-weight: 800;
    color: crimson;
    font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    font-style: italic;
    padding: 20px;
    text-transform: uppercase;
}

.tag_line h3 {
    font-weight: 600;
    color: crimson;
    font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    font-style: italic;
    text-transform: uppercase;
}

.tag_line h3 span {
    font-weight: 600;
    color: black;
    font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    font-style: italic;
    text-transform: uppercase;
}
</style>
