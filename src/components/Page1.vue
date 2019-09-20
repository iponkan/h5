<template>
    <div>
        <video-player :options="videoOptions"/>
    </div>
</template>

<script>
    import videoPlayer from "./VideoPlayer/VideoPlayer.vue";

    export default {
        name: "page1",
        components: {
            videoPlayer
        },
        data() {
            return {
                videoOptions: {
                    autoplay: false,
                    controls: true,
                    preload: "auto",
                    poster: "https://v-img.zjol.com.cn/279757.jpg",
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
