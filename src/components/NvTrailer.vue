<template>
    <iframe
        class="trailer-container"
        width="1080"
        height="720"
        :src="trailerSrc()"
    >
    </iframe>
    <div class="trailer-actions">
        <div class="trailer-button" @click="previousTrailer">
            <button>Previous Trailer</button>
        </div>
        <div class="trailer-button" @click="nextTrailer">
            <button>Next Trailer</button>
        </div>

        <div class="trailer-button close" @click="closeTrailer">
            <button>Close</button>
        </div>
    </div>
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
<style></style>
