<template>
    <div>
        <video-player :options="videoOptions"
                      poster="https://v-img.zjol.com.cn/279757.jpg"/>
    </div>
</template>

<script>
    import VideoPlayer from "./VideoPlayer/VideoPlayer.vue";

    export default {
        name: "page1",
        components: {
            VideoPlayer
        },
        data() {
            return {
                videoOptions: {
                    autoplay: false,
                    controls: true,
                    preload: "auto",
                    width: "960px",
                    height: "540px",
                    sources: [
                        {
                            src: "https://v-cdn.zjol.com.cn/279761.mp4?userId=44ee8296-cff7-4580-a6de-6c4e8285995f",
                            type: "video/mp4"
                        }
                    ]
                }
            };
        }
    }
</script>
