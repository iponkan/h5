<template>
    <div>
        <d-player ref="player" :options="options"></d-player>
    </div>
</template>

<script>
    import dPlayer from 'vue-dplayer'
    import 'vue-dplayer/dist/vue-dplayer.css'

    export default {
        name: 'in-video',
        props: {
            source: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                player: null,
                options: {
                    video: {
                        url: ''
                    },
                    contextmenu: [
                        {}
                    ]
                }
            }
        },
        mounted() {
            this.player = this.$refs.player.dp
        },
        created() {
            this._setVideoUrl(this.source)
        },
        methods: {
            // 设置视频播放路径
            _setVideoUrl(url) {
                this.player.switchVideo({
                    url: url
                })
            }
        },
        components: {
            dPlayer
        }
    }
</script>
