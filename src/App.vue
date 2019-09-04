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

<style lang="scss" scoped>
    html, body, #app {
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

    .arrow {
        position: absolute;
        top: 90%;
        left: 45%;
        width: 10%;
        z-index: 2;
    }

    .fadeOutUp {
        -webkit-animation: 2s fadeOutUp ease-in-out infinite;
        animation: 2s fadeOutUp ease-in-out infinite;
    }

    @-webkit-keyframes fadeOutUp {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
        50% {
            opacity: 0.3;
            -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    }

    @keyframes fadeOutUp {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
        50% {
            opacity: 0.3;
            -webkit-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    }
</style>
