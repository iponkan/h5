<template>
    <div id="app">
        <d-player @play="play" :options="options"
                  class="page1_palyer"
                  ref="player"></d-player>
    </div>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'
    import '../style/dplayer-style.css'

    export default {
        data() {
            return {
                preload: "auto",
                options: {
                    video: {
                        url: 'https://v-cdn.zjol.com.cn/279761.mp4?userId=44ee8296-cff7-4580-a6de-6c4e8285995f',
                        pic: 'https://v-img.zjol.com.cn/279757.jpg'
                    },
                    autoplay: false
                },
                player: null,
            }
        },
        mounted() {
            this.player = this.$refs.player.dp
        },
        methods: {
            play() {
                console.log('play callback')
            },
            runAni: function () {
                this.player.play();
                console.log('runAni')
            },
            switchHandle() {
                this.player.pause()
            }
        },
        components: {
            'd-player': VueDPlayer
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }

    .page1_palyer {
        width: 100%;
        height: auto;
    }
</style>

