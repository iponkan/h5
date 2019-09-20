<template>
    <div id="app">
        <h1>Vue-DPlayer</h1>
        <h2>A Vue 2.x component of <a href="https://github.com/DIYgod/DPlayer" target="_blank">DPlayer</a></h2>
        <video-player :options="options"
                     @play="play"
                     ref="player">
        </video-player>
    </div>
</template>

<script>
    import videoPlayer from "./DPlayer/DPlayer.vue";

    export default {
        data() {
            return {
                options: {
                    video: {
                        url: 'https://v-cdn.zjol.com.cn/279761.mp4?userId=44ee8296-cff7-4580-a6de-6c4e8285995f',
                        pic: 'https://v-img.zjol.com.cn/279757.jpg'
                    },
                    autoplay: false,
                    contextmenu: [
                        {
                            text: 'GitHub',
                            link: 'https://github.com/MoePlayer/vue-dplayer'
                        }
                    ]
                },
            }
        },
        methods: {
            play() {
                const player = this.$refs.player.dp
                player.play()
                console.log('play callback')
            }
        },
        components: {
            videoPlayer,
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }

    .video_palyer {
        width: 800px;
        margin: 50px auto;
    }

    h1 {
        font-size: 54px;
        color: #42b983;
        margin: 30px 0 10px;
    }

    h2 {
        font-size: 22px;
        color: #555;
    }

    @media (max-width: 768px) {
        .video_palyer {
            width: 90%;
        }

        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 16px;
        }
    }
</style>
