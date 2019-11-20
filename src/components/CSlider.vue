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
                <BeautyPage16 class="page" ref="beautyPage16"></BeautyPage16>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <BeautyPage17 class="page" ref="beautyPage17"></BeautyPage17>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <BeautyPage12 class="page" ref="beautyPage12"></BeautyPage12>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <BeautyPage18 class="page" ref="beautyPage18"></BeautyPage18>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <BeautyPage19 class="page" ref="beautyPage19"></BeautyPage19>
                <div class="arrow fadeOutUp" @click="slideNext">
                    <img src="../assets/arrow.png" width="100%"/>
                </div>
            </slideritem>

            <slideritem>
                <BeautyPage20 class="page" ref="beautyPage20"></BeautyPage20>
            </slideritem>

        </slider>


    </div>
</template>
<script>
    // import slider components
    import {slider, slideritem} from "vue-concise-slider";
    import BeautyPage12 from "./pages/BeautyPage12.vue";
    import BeautyPage16 from "./pages/BeautyPage16.vue";
    import BeautyPage17 from "./pages/BeautyPage17.vue";
    import BeautyPage18 from "./pages/BeautyPage18.vue";
    import BeautyPage19 from "./pages/BeautyPage19.vue";
    import BeautyPage20 from "./pages/BeautyPage20.vue";

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
            BeautyPage12,
            BeautyPage16,
            BeautyPage17,
            BeautyPage18,
            BeautyPage19,
            BeautyPage20,
        },
        mounted: {
            mount: function () {
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
            slideNext: function () {
                this.curPage = this.curPage + 1;
                this.$refs.slider.$emit("slideNext");
                this.slide2Page(this.curPage);
            },

            slide2Page: function (pageindex) {
                if (pageindex == 0) {
                    this.$refs.beautyPage16.runAni();
                    this.$refs.beautyPage17.pauseAni();
                } else if (pageindex == 1) {
                    this.$refs.beautyPage16.pauseAni();
                    this.$refs.beautyPage17.runAni();
                    this.$refs.beautyPage12.pauseAni();
                } else if (pageindex == 2) {
                    this.$refs.beautyPage17.pauseAni();
                    this.$refs.beautyPage12.runAni();
                    this.$refs.beautyPage18.pauseAni();
                } else if (pageindex == 3) {
                    this.$refs.beautyPage12.pauseAni();
                    this.$refs.beautyPage18.runAni();
                    this.$refs.beautyPage19.pauseAni();
                } else if (pageindex == 4) {
                    this.$refs.beautyPage18.pauseAni();
                    this.$refs.beautyPage19.runAni();
                    this.$refs.beautyPage20.pauseAni();
                } else if (pageindex == 5) {
                    this.$refs.beautyPage19.pauseAni();
                    this.$refs.beautyPage20.runAni();
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
