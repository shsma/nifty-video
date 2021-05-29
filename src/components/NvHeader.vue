<template>
    <header class="header">
        <div class="showcase-top">
            <img src="../assets/header-title.png" alt="header" />
            <a href="#" class="btn btn-rounded">Sign in</a>
        </div>
        <div class="showcase-content">
            <h1>See what's next</h1>
            <p>Watch any where, Cancel anytime</p>
            <a href="#" class="btn btn-xl">
                Watch free For 30 Days
                <i class="fas fa-chevron-right btn-icon"></i>
            </a>
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
