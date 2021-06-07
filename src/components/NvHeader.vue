<template>
    <header class="header">
        <div class="showcase-top">
            <img src="../assets/logo.png" alt="header" />
            <a class="nav-a" href="#">
                <i class="fa fa-globe" aria-hidden="true"></i>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                <span>Français</span>
            </a>
            <a href="#" class="btn btn-rounded">Sign in</a>
        </div>
        <div class="showcase-content">
            <h1>
                Film,séries TV et bien <br />
                plus en illimité.
            </h1>
            <p>Où que vous soyez. Annulez à tout moment</p>
            <h2>
                Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour
                vous abonner où réactiver votre <br />abonnement.
            </h2>
            <form action="/action_page.php">
                <label for="email">Enter your email:</label>
                <input type="email" id="email" name="email" />
                <a href="#" class="btn btn-xl">
                    Commencer <i class="fas fa-chevron-right btn-icon"></i>
                </a>
            </form>
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

<style>
.header {
    width: 100%;
    height: 93vh;
    position: relative;
    background-size: cover cover;
    background-repeat: no-repeat;
    background-position: center;
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
