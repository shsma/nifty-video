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
