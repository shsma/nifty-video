<template>
    <nv-header />
    <router-view />
    <nv-footer />
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
