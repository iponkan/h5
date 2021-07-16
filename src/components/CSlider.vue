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
        <BeautyPage21 class="page" ref="beautyPage21"></BeautyPage21>
      </slideritem>

      <slideritem>
        <BeautyPage23 class="page" ref="beautyPage23"></BeautyPage23>
      </slideritem>

      <slideritem>
        <BeautyPage24 class="page" ref="beautyPage24"></BeautyPage24>
      </slideritem>

      <slideritem>
        <BeautyPage25 class="page" ref="beautyPage25"></BeautyPage25>
      </slideritem>

      <slideritem>
        <BeautyPage26 class="page" ref="beautyPage26"></BeautyPage26>
      </slideritem>

      <slideritem>
        <BeautyPage22 class="page" ref="beautyPage22"></BeautyPage22>
      </slideritem>
    </slider>

    <img
      v-on:click="audioswitch"
      :src="audio_img_url"
      style="
        width: 43.3929px;
        height: 43.3929px;
        right: 21.6964px;
        top: 21.6964px;
        opacity: 1;
        position: absolute;
        display: block;
        z-index: 1000000;
        touch-action: pan-y;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      "
    />

    <audio
      id="audio"
      src="https://uss.sonicers.com/zhiaibaobao/bg.mp3"
      loop="loop"
      autoplay="autoplay"
    ></audio>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";

import BeautyPage21 from "./pages/BeautyPage21.vue";
import BeautyPage22 from "./pages/BeautyPage22.vue";
import BeautyPage23 from "./pages/BeautyPage23.vue";
import BeautyPage24 from "./pages/BeautyPage24.vue";
import BeautyPage25 from "./pages/BeautyPage25.vue";
import BeautyPage26 from "./pages/BeautyPage26.vue";

export default {
  name: "CSlider",
  data() {
    return {
      //Slider configuration [obj]
      curPage: 0,
      audio_img_url:
        "//res.maka.im/cdn/maka/release/musicon.png?6f72b5cfdeb5c543944d738bbd4d9a18",
      options: {
        currentPage: 0,
        direction: "vertical",
        freeze: false,
        //滑动回调
        //第一次渲染这个页面的时候会回调
        renderPagination: (h, index) => {
          console.log("----------");
        },
      },
      isPlaying: true,
    };
  },
  components: {
    slider,
    slideritem,
    BeautyPage21,
    BeautyPage22,
    BeautyPage23,
    BeautyPage24,
    BeautyPage25,
    BeautyPage26,
  },
  mounted: {
    mount: function () {
      console.log("mounted=====");
    },
  },
  methods: {
    // Listener event
    slide(data) {
      console.log(data);
      var x2 = (data.start.x - data.end.x) * (data.start.x - data.end.x);
      var y2 = (data.start.y - data.end.y) * (data.start.y - data.end.y);
      console.log(
        "page index = " + data.currentPage + " ; x2 = " + x2 + " ; y2 = " + y2
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
    audioswitch: function () {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.play();
      }
    },
    play() {
      var audio = document.querySelector("#audio");
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
        this.audio_img_url =
          "//res.maka.im/cdn/maka/release/musicon.png?6f72b5cfdeb5c543944d738bbd4d9a18";
      }
    },
    stop() {
      var audio = document.querySelector("#audio");
      if (this.isPlaying) {
        audio.pause();
        this.audio_img_url =
          "//res.maka.im/cdn/maka/release/musicoff.png?0351a5ffcb05654c5e110b203375cefd";
        audio.currentTime = 0;
        this.isPlaying = false;
      }
    },

    slide2Page: function (pageindex) {
      if (pageindex == 0) {
        this.$refs.beautyPage21.runAni();
        this.$refs.beautyPage23.pauseAni();
      } else if (pageindex == 1) {
        this.$refs.beautyPage21.pauseAni();
        this.$refs.beautyPage23.runAni();
        this.$refs.beautyPage24.pauseAni();
      } else if (pageindex == 2) {
        this.$refs.beautyPage23.pauseAni();
        this.$refs.beautyPage24.runAni();
        this.$refs.beautyPage25.pauseAni();
      } else if (pageindex == 3) {
        this.$refs.beautyPage24.pauseAni();
        this.$refs.beautyPage25.runAni();
        this.$refs.beautyPage26.pauseAni();
      } else if (pageindex == 4) {
        this.$refs.beautyPage25.pauseAni();
        this.$refs.beautyPage26.runAni();
        this.$refs.beautyPage22.pauseAni();
      } else if (pageindex == 5) {
        this.$refs.beautyPage26.pauseAni();
        this.$refs.beautyPage22.runAni();
      }
    },
  },
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
