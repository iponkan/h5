<template>
    <scroll style="background-color: #D81B60;">
        <!-- Make a div wrapped slider,set height and width -->
        <div style="width:100%;height:100%">
            <!-- Using the slider component -->
            <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                <!-- slideritem wrapped package with the components you need -->
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
                <!-- Customizable loading -->
                <div slot="loading">loading...</div>
            </slider>
        </div>
    </scroll>

</template>
<script>
    // import slider components
    import {slider, slideritem} from 'vue-concise-slider'

    import {scroll} from '@/components/Scroll'

    export default {
        el: '#app',
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
            scroll,
            slider,
            slideritem
        }
    }
</script>
