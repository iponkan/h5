<template>
    <div id="app">
        <d-player @play="play" :options="options"
                  class="page1_palyer"></d-player>
    </div>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'
    import 'vue-dplayer/dist/vue-dplayer.css'

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
                console.log('play callback')
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

