<template>
    <div id="app">
        <Scroll style="width:100%;;height:100%">
            <CSlider style="width:100%;height:100%"/>
        </Scroll>
        <audio id="audio"
               src="https://m7.music.126.net/20190904154408/f442f39b5e7e408351d7a0427bd97fc6/ymusic/0152/055a/5308/681ef6f50f20971ac5bddb07161fc6b5.mp3"
               loop="loop" autoplay="true"></audio>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Scroll from './components/Scroll.vue'
    import CSlider from './components/CSlider.vue'

    export default {
        name: 'app',
        components: {
            Scroll,
            CSlider,
        }
    }
</script>

<style>
    html, body, #app {
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
</style>
