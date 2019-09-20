<template>
    <div>
        <d-player ref="player" :options="options"></d-player>
    </div>
</template>

<script>
    import dPlayer from 'vue-dplayer'
    import 'vue-dplayer/dist/vue-dplayer.css'

    export default {
        name: "VideoPlayer",
        components: {
            dPlayer
        }
    }
</script>
