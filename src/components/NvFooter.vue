<template>
    <footer id="footer">
        <div class="footer-container">
            <div class="left">NIFTY.VIDEO</div>
            <div class="right">
                <ul>
                    <li><a href="#" class="nav-link">About</a></li>
                    <li><a href="#" class="nav-link">Contact</a></li>
                    <li>
                        Created by<a href="#" target="_blank"
                            >Velox Solutions</a
                        >
                    </li>
                </ul>
            </div>
            <div style="clear: both"></div>
        </div>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'NvFooter'
})
export default class NvFooter extends Vue {}
</script>

<style></style>
