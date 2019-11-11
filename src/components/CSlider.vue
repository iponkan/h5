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
            <!-- <slideritem>
                <BeautyPage class="page" ref="page1"></BeautyPage>
            </slideritem>
            <slideritem>
                <BeautyPage2 class="page" ref="page2"></BeautyPage2>
            </slideritem>
            <slideritem>
                <BeautyPage1 class="page" ref="page3"></BeautyPage1>
            </slideritem>

            <slideritem>
                <BeautyPage3 class="page" ref="beautyPage3"></BeautyPage3>
            </slideritem>

            <slideritem>
                <BeautyPage4 class="page" ref="beautyPage4"></BeautyPage4>
            </slideritem>

            <slideritem>
                <BeautyPage5 class="page" ref="beautyPage5"></BeautyPage5>
            </slideritem>

            <slideritem>
                <BeautyPage6 class="page" ref="beautyPage6"></BeautyPage6>
            </slideritem>

            <slideritem>
                <BeautyPage7 class="page" ref="beautyPage7"></BeautyPage7>
            </slideritem>

            <slideritem>
                <BeautyPage8 class="page" ref="beautyPage8"></BeautyPage8>
            </slideritem>

            <slideritem>
                <BeautyPage9 class="page" ref="beautyPage9"></BeautyPage9>
            </slideritem>

            <slideritem>
                <BeautyPage10 class="page" ref="beautyPage10"></BeautyPage10>
            </slideritem>

            <slideritem>
                <BeautyPage11 class="page" ref="beautyPage11"></BeautyPage11>
            </slideritem>

            <slideritem>
                <BeautyPage12 class="page" ref="beautyPage12"></BeautyPage12>
            </slideritem>

            <slideritem>
                <BeautyPage13 class="page" ref="beautyPage13"></BeautyPage13>
            </slideritem>

            <slideritem>
                <BeautyPage14 class="page" ref="beautyPage14"></BeautyPage14>
            </slideritem>

            <slideritem>
                <BeautyPage15 class="page" ref="beautyPage15"></BeautyPage15>
            </slideritem> -->

            <slideritem>
                <BeautyPage16 class="page" ref="beautyPage16"></BeautyPage16>
            </slideritem>

            <slideritem>
                <BeautyPage17 class="page" ref="beautyPage17"></BeautyPage17>
            </slideritem>

            <slideritem>
                <BeautyPage12 class="page" ref="beautyPage12"></BeautyPage12>
            </slideritem>

            <slideritem>
                <BeautyPage18 class="page" ref="beautyPage18"></BeautyPage18>
            </slideritem>

            <slideritem>
                <BeautyPage19 class="page" ref="beautyPage19"></BeautyPage19>
            </slideritem>

            <slideritem>
                <BeautyPage20 class="page" ref="beautyPage20"></BeautyPage20>
            </slideritem>



            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>

        <div class="arrow fadeOutUp" @click="slideNext">
            <img src="../assets/arrow.png" width="100%" />
        </div>
    </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
// import BeautyPage from "./pages/BeautyPage.vue";
// import BeautyPage1 from "./pages/BeautyPage1.vue";
// import BeautyPage2 from "./pages/BeautyPage2.vue";
// import BeautyPage3 from "./pages/BeautyPage3.vue";
// import BeautyPage4 from "./pages/BeautyPage4.vue";
// import BeautyPage5 from "./pages/BeautyPage5.vue";
// import BeautyPage6 from "./pages/BeautyPage6.vue";
// import BeautyPage7 from "./pages/BeautyPage7.vue";
// import BeautyPage8 from "./pages/BeautyPage8.vue";
// import BeautyPage9 from "./pages/BeautyPage9.vue";
// import BeautyPage10 from "./pages/BeautyPage10.vue";
// import BeautyPage11 from "./pages/BeautyPage11.vue";
import BeautyPage12 from "./pages/BeautyPage12.vue";
// import BeautyPage13 from "./pages/BeautyPage13.vue";
// import BeautyPage14 from "./pages/BeautyPage14.vue";
// import BeautyPage15 from "./pages/BeautyPage15.vue";
import BeautyPage16 from "./pages/BeautyPage16.vue";
import BeautyPage17 from "./pages/BeautyPage17.vue";
import BeautyPage18 from "./pages/BeautyPage18.vue";
import BeautyPage19 from "./pages/BeautyPage19.vue";
import BeautyPage20 from "./pages/BeautyPage20.vue";
// import Page2 from "./Page2.vue";
// import Page3 from "./Page3.vue";
// import Page4 from "./Page4.vue";
// import MainPage from "./MainPage.vue";

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
        // BeautyPage,
        // Page2,
        // Page3,
        // Page4,
        // BeautyPage1,
        // BeautyPage2,
        // BeautyPage3,
        // BeautyPage4,
        // BeautyPage5,
        // BeautyPage6,
        // BeautyPage7,
        // BeautyPage8,
        // BeautyPage9,
        // BeautyPage10,
        // BeautyPage11,
        BeautyPage12,
        // BeautyPage13,
        // BeautyPage14,
        // BeautyPage15,
        BeautyPage16,
        BeautyPage17,
        BeautyPage18,
        BeautyPage19,
        BeautyPage20,
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
                this.slide2Page(data.currentPage);
                this.curPage = data.currentPage;
            }
        },
        onTap(data) {
            console.log("onTap");
        },
        onInit(data) {
            console.log("onInit=========");
            var width = window.screen.width;
            var height = window.screen.height;
            console.log("width = " + width);
            console.log("height = " + height);
            document.body.style.setProperty("--screenWidth", width - 60 + "px");
            document.body.style.setProperty("--screenHeight", "400px");

            //init first page
            this.slide2Page(this.curPage);
        },
        slideNext: function() {
            this.curPage = this.curPage + 1;
            this.$refs.slider.$emit("slideNext");
            this.slide2Page(this.curPage);
        },

        slide2Page: function(pageindex) {
            if (pageindex == 0) {
                this.$refs.beautyPage16.runAni();
                this.$refs.beautyPage17.pauseAni();
            } else if (pageindex == 1) {
                this.$refs.beautyPage16.pauseAni();
                this.$refs.beautyPage17.runAni();
                this.$refs.beautyPage12.pauseAni();
            } else if(pageindex == 2){
                this.$refs.beautyPage17.pauseAni();
                this.$refs.beautyPage12.runAni();
                this.$refs.beautyPage18.pauseAni();
            } else if(pageindex == 3){
                this.$refs.beautyPage12.pauseAni();
                this.$refs.beautyPage18.runAni();
                this.$refs.beautyPage19.pauseAni();
            } else if(pageindex == 4){
                this.$refs.beautyPage18.pauseAni();
                this.$refs.beautyPage19.runAni();
                this.$refs.beautyPage20.pauseAni();
            } else if(pageindex == 5){
                this.$refs.beautyPage19.pauseAni();
                this.$refs.beautyPage20.runAni();
            }
            // if (pageindex == 0) {
            //     this.$refs.page1.runAni();
            //     this.$refs.page2.pauseAni();
            // } else if (pageindex == 1) {
            //     this.$refs.page2.runAni();
            //     this.$refs.page1.pauseAni();
            //     this.$refs.page3.pauseAni();
            // } else if (pageindex == 2) {
            //     this.$refs.page3.runAni();
            //     this.$refs.page2.pauseAni();
            //     this.$refs.beautyPage3.pauseAni();
            // } else if (pageindex == 3) {
            //     this.$refs.beautyPage3.runAni();
            //     this.$refs.page3.pauseAni();
            //     this.$refs.beautyPage4.pauseAni();
            // } else if (pageindex == 4) {
            //     this.$refs.beautyPage4.runAni();
            //     this.$refs.beautyPage3.pauseAni();
            //     this.$refs.beautyPage5.pauseAni();
            // } else if (pageindex == 5) {
            //     this.$refs.beautyPage5.runAni();
            //     this.$refs.beautyPage4.pauseAni();
            //     this.$refs.beautyPage6.pauseAni();
            // } else if (pageindex == 6) {
            //     this.$refs.beautyPage5.pauseAni();
            //     this.$refs.beautyPage6.runAni();
            //     this.$refs.beautyPage7.pauseAni();
            // } else if (pageindex == 7) {
            //     this.$refs.beautyPage6.pauseAni();
            //     this.$refs.beautyPage7.runAni();
            //     this.$refs.beautyPage8.pauseAni();
            // } else if (pageindex == 8) {
            //     this.$refs.beautyPage7.pauseAni();
            //     this.$refs.beautyPage8.runAni();
            //     this.$refs.beautyPage9.pauseAni();
            // } else if (pageindex == 9) {
            //     this.$refs.beautyPage8.pauseAni();
            //     this.$refs.beautyPage9.runAni();
            //     this.$refs.beautyPage10.pauseAni();
            // } else if (pageindex == 10) {
            //     this.$refs.beautyPage9.pauseAni();
            //     this.$refs.beautyPage10.runAni();
            //     this.$refs.beautyPage11.pauseAni();
            // } else if (pageindex == 11) {
            //     this.$refs.beautyPage10.pauseAni();
            //     this.$refs.beautyPage11.runAni();
            //     this.$refs.beautyPage12.pauseAni();
            // } else if (pageindex == 12) {
            //     this.$refs.beautyPage11.pauseAni();
            //     this.$refs.beautyPage12.runAni();
            //     this.$refs.beautyPage13.pauseAni();
            // } else if (pageindex == 13) {
            //     this.$refs.beautyPage12.pauseAni();
            //     this.$refs.beautyPage13.runAni();
            //     this.$refs.beautyPage14.pauseAni();
            // } else if (pageindex == 14) {
            //     this.$refs.beautyPage13.pauseAni();
            //     this.$refs.beautyPage14.runAni();
            //     this.$refs.beautyPage15.pauseAni();
            // } else if (pageindex == 15) {
            //     this.$refs.beautyPage14.pauseAni();
            //     this.$refs.beautyPage15.runAni();
            // }
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
