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
                        url: 'https://1251413404.vod2.myqcloud.com/vodtransgzp1251413404/7447398155988700674/v.f13477.mp4',
                        pic: ''
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

