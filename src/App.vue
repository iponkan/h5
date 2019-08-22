<template>
    <div id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Scroll style="background-color: #D81B60">
            <div style="width:100%;height:100%">
                <!-- Using the slider component -->
                <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                    <!-- slideritem wrapped package with the components you need -->
                    <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}
                    </slideritem>
                    <!-- Customizable loading -->
                    <div slot="loading">loading...</div>
                </slider>
            </div>
        </Scroll>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Scroll from './components/Scroll.vue'
    // import slider components
    import {slider, slideritem} from 'vue-concise-slider'

    export default {
        name: 'app',
        data() {
            return {
                //data list [array]
                someList: [
                    {
                        html: 'slide1',
                        style: {
                            'background': '#1bbc9b'
                        }
                    },
                    {
                        html: 'slide2',
                        style: {
                            'background': '#4bbfc3'
                        }
                    },
                    {
                        html: 'slide3',
                        style: {
                            'background': '#7baabe'
                        }
                    }
                ],
                //Slider configuration [obj]
                options: {
                    currentPage: 0,
                    direction: 'vertical'
                }
            }
        },
        components: {
            // HelloWorld,
            Scroll,
            slider,
            slideritem
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