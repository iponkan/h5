<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div>
        <!-- Using the slider component -->
        <slider :options="options" @slide='slide' @tap='onTap' @init='onInit'>

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
            Page3,
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
