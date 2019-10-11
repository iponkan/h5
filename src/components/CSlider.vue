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
                <Page1 class="page" ref="page1"></Page1>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%" />
                </div>
            </slideritem>
            <slideritem>
                <Page2 class="page" ref="page2"></Page2>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%" />
                </div>
            </slideritem>

            <slideritem>
                <Page3 class="page" ref="page3"></Page3>
            </slideritem>

            <slideritem>
                <Page4 class="page" ref="pagetest"></Page4>
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
import Page4 from "./Page4.vue";

export default {
    name: "CSlider",
    data() {
        return {
            //Slider configuration [obj]
            curPage: 0,
            options: {
                currentPage: 0,
                direction: "vertical",
                freeze: false,
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
        Page3,
        Page4,
    },
    mounted: {
        mount: function() {
            console.log("mounted=====");
        }
    },
    methods: {
        // Listener event
        slide(data) {
            console.log(data);
            var x2 = (data.start.x - data.end.x) * (data.start.x - data.end.x);
            var y2 = (data.start.y - data.end.y) * (data.start.y - data.end.y);
            console.log(
                "page index = " +
                    data.currentPage +
                    " ; x2 = " +
                    x2 +
                    " ; y2 = " +
                    y2
            );
            if (x2 > 100 || y2 > 100) {
                if (data.currentPage == 0) {
                    this.$refs.page1.runAni();
                } else if (data.currentPage == 1) {
                    this.$refs.page2.runAni();
                } else if (data.currentPage == 2) {
                    this.$refs.page3.runAni();
                } else if(data.currentPage == 3){
                    this.$refs.pagetest.runAni();
                }
                this.curPage = data.currentPage;
            }
        },
        onTap(data) {
            console.log("onTap");
        },
        onInit(data) {
            console.log("onInit");
            var width = window.screen.width;
            var height = window.screen.height;
            console.log("width = " + width);
            console.log("height = " + height);
            document.body.style.setProperty("--screenWidth", width - 60 + "px");
            document.body.style.setProperty("--screenHeight", "400px");
        },
        slideNext: function() {
            this.curPage = this.curPage + 1;
            this.$refs.slider.$emit("slideNext");

            if (this.curPage == 0) {
                this.$refs.page1.runAni();
            } else if (this.curPage == 1) {
                this.$refs.page2.runAni();
            } else if (this.curPage == 2) {
                this.$refs.page3.runAni();
            }
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
