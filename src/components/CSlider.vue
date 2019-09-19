<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div>
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
                <Page1 class="page">

                </Page1>
                <div class="arrow fadeOutUp">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>
            <slideritem>
                <Page2 class="page">

                </Page2>
                <div class="arrow fadeOutUp">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <Page3 class="page">

                </Page3>
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
    import Page3 from './Page3.vue'

    export default {
        name: 'CSlider',
        data() {
            return {
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
            Page2,
            Page3
        }
    }
</script>


<style>

    /*引入公共样式*/
    @import '../style/main.scss';

    .page {
        width: 100%;
        height: 100%;
    }

</style>
