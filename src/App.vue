<template>
    <div id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--        <Scroll style="background-color: #D81B60 ;width:100%;;height:100%">-->
        <!--            <CSlider style="width:100%;height:100%"/>-->
        <!--        </Scroll>-->
        <div class="arrow fadeOutUp">
            <img src="./assets/arrwo.png" width="100%"/>
        </div>
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