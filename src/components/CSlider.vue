<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div class="cslider">
        <!-- Using the slider component -->
        <slider :options="options" @slide='slide' @tap='onTap' @init='onInit'>
            <!-- slideritem wrapped package with the components you need -->
            <!-- <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
                <div v-if="index < someList.length-1" class="arrow fadeOutUp">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
                <div v-if="index === 0">
                    <video class="videoClass" width="100%" height="100%" id="thevideo4" preload="auto"
                           src="https://appvideo.www.gov.cn/html5/2018/x264_hb.mp4" poster="../assets/yulan.jpg"
                           controls="">
                    </video>
                </div>

            </slideritem> -->
            <slideritem>
                <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
                <!-- <div style="'background': '#000000'"></div> -->
                <div>
                    <video class="videoClass" width="100%" height="100%" id="thevideo4" preload="auto"
                           src="https://appvideo.www.gov.cn/html5/2018/x264_hb.mp4" poster="../assets/yulan.jpg"
                           controls="">
                    </video>
                
                    
                </div>
            </slideritem>

            <slideritem>
            
                <div width="500" height="500">
                    <img src="../assets/i1.jpeg" alt="Smiley face" width="100%" height="100%">
                </div>
            </slideritem>

            <slideritem>
                <Page1></Page1>
            </slideritem>
            <slideritem>
                <Page2></Page2>
            </slideritem>

            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
    // import slider components
    import {slider, slideritem} from 'vue-concise-slider';
    import Page1 from './Page1.vue';
     import Page2 from './Page2.vue'
    // import Page3 from './Page3.vue'

    export default {
        name: 'CSlider',
        data() {
            return {
                //data list [array]
                someList: [
                    {
                        page:{

                        },
                        style: {
                            'background': '#000000'
                        }
                    },
                    {
                        style: {
                            'background': '#4bbfc3'
                        }
                    },
                    {
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
            slider,
            slideritem,
            Page1,
            Page2
        }
    }
</script>


<style lang="scss" scoped>

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
