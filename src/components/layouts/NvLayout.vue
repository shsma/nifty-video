<template>
    <div class="page-wrapper">
        <nv-header />
        <router-view />
        <nv-footer />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NvHeader from '@/components/NvHeader.vue';
import NvFooter from '@/components/NvFooter.vue';

@Options({
    name: 'NvLayout',
    components: {
        NvHeader,
        NvFooter
    }
})
export default class NvLayout extends Vue {}
</script>

<style>
.page-wrapper {
    width: 100%;
    max-width: 1350px;
    margin: auto;
    padding: 5rem;
}
</style>
