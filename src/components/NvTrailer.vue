<template>
    <iframe width="1080" height="720" :src="trailerSrc()"> </iframe>
    <div @click="nextTrailer">Next Trailer</div>
    <div @click="previousTrailer">Previous Trailer</div>
    <div @click="closeTrailer">Close</div>
</template>

<script lang="ts">
import { namespace } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';

import { Trailer } from '@/entities/external/trailer';

const movieModule = namespace('MovieModule');

@Options({
    name: 'NvTrailer',
    components: {}
})
export default class NvTrailer extends Vue {
    @movieModule.Getter('trailer')
    private trailer!: Trailer;

    @movieModule.Action('nextTrailer')
    private nextTrailer!: () => void;

    @movieModule.Action('previousTrailer')
    private previousTrailer!: () => void;

    @movieModule.Action('closeTrailer')
    private closeTrailer!: () => void;

    private trailerSrc(): string {
        return `${process.env.VUE_APP_YOUTUBE_EMBED}${this.trailer.key}`;
    }
}
</script>
