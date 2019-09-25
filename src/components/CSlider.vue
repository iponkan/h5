<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div>
        <!-- Using the slider component -->
        <slider
            :options="options"
            @slide="slide"
            @tap="onTap"
            @init="onInit"
            ref="slider"
        >
            <slideritem>
                <Page1 class="page" ref="page1"> </Page1>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img
                        src="../assets/arrow.png"
                        width="100%"
                    />
                </div>
            </slideritem>
            <slideritem>
                <Page2 class="page" ref="page2"> </Page2>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img
                        src="../assets/arrow.png"
                        width="100%"
                    />
                </div>
            </slideritem>

            <slideritem>
                <Page3 class="page" ref="page3"> </Page3>
            </slideritem>

            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
import Page1 from "./Page1.vue";
import Page2 from "./Page2.vue";
import Page3 from "./Page3.vue";

export default {
    name: "CSlider",
    data() {
        return {
            //Slider configuration [obj]
            options: {
                currentPage: 0,
                direction: "vertical",
                //滑动回调
                //第一次渲染这个页面的时候会回调
                renderPagination: (h, index) => {
                    console.log("----------");
                }
            }
        };
    },
    components: {
        slider,
        slideritem,
        Page1,
        Page2,
        Page3
    },
    methods: {
        // Listener event
        slide(data) {
            console.log("=============" + data.currentPage);
            if (data.currentPage == 0) {
                this.$refs.page1.runAni();
            } else if (data.currentPage == 1) {
                this.$refs.page2.runAni();
            } else if (data.currentPage == 2) {
                this.$refs.page3.runAni();
            }
        },
        onTap(data) {
            console.log(data);
        },
        onInit(data) {
            console.log(data);
        },

    
        slideNext: function() {
            this.$refs.slider.$emit("slideNext");
        }
    }
};
</script>


<style>
/*引入公共样式*/
@import "../style/main.scss";

.page {
    width: 100%;
    height: 100%;
}
</style>
