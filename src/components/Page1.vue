<template>
    <div class="page" style="background:#23aa67">
        <my-video :sources="video.sources" :options="video.options" style="width: 100%">

        </my-video>
    </div>
</template>

<script>

    import myVideo from 'vue-video'

    export default {
        name: 'page1',
        data() {
            return {
                video: {
                    sources: [{
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }],
                    options: {
                        autoplay: false,
                        volume: 0.6,
                        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
                    }
                }
            }
        },
        components: {
            myVideo
        }
    }
</script>
