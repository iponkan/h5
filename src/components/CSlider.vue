<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div class="cslider">
        <!-- Using the slider component -->
        <slider :options="options" @slide='slide' @tap='onTap' @init='onInit'>
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
    // import slider components
    import {slider, slideritem} from 'vue-concise-slider'

    export default {
        name: 'CSlider',
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
            slider,
            slideritem
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>