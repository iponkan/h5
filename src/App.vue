<template>
    <div id="app">
        <section id="loading" style="width:100%;height:100%;background: black">
            <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="fn" :animationShow="false">
                <img src="../src/assets/loading.gif"/>
            </preload-image>
        </section>

        <section id="content" style="width:100%;height:100%" hidden>
            <CSlider style="width:100%;height:100%"/>
        </section>
        <audio
                id="audio"
                src="https://m7.music.126.net/20190904154408/f442f39b5e7e408351d7a0427bd97fc6/ymusic/0152/055a/5308/681ef6f50f20971ac5bddb07161fc6b5.mp3"
                loop="loop"
                autoplay="autoplay"
        ></audio>
    </div>
</template>

<script>
    import CSlider from './components/CSlider.vue'
    import wxapi from '../src/sns/wxapi.js'
    import preloadImage from './components/util/vue-preload-image.vue'

    const shareData = {
        url: "https://uss.sonicers.com/guimanlong/index.html",
        picUrl: "https://uss.sonicers.com/guimanlong/weixin.jpg",
        title: '桂满陇,与美食的奇遇～',
        desc: '限时团购周 挑战最低价！你还在等什么～',
        timelineTitle: '桂满陇,与美食的奇遇～',

        callback: function () {
            console.log('分享成功')
        }
    };

    export default {
        name: 'app',
        mounted() {
            if ('development' === process.env.NODE_ENV.toString()) {
                new this.$vconsole();
            }
            wxapi.wxRegister(this.wxRegCallback);
        },
        data() {
            return {
                imgUrls: ['../src/assets/bg.jpeg',
                    '../src/assets/bg.jpeg',
                    '../src/assets/img1.png',
                    '../src/assets/img2.png',
                    '../src/assets/img3.png',
                    '../src/assets/img4.png',
                    '../src/assets/img5.png',
                    '../src/assets/img6.png',
                    '../src/assets/img7.png',
                    '../src/assets/img8.png',
                    '../src/assets/img9.jpg',
                    '../src/assets/img10.gif',
                    '../src/assets/img11.jpg',
                    '../src/assets/img12.jpg',
                    '../src/assets/img13.jpg',
                    '../src/assets/img14.jpg',
                    '../src/assets/img15.jpg',
                    '../src/assets/img16.jpg',
                    '../src/assets/img17.png',
                    '../src/assets/img18.png',
                    '../src/assets/img19.jpg',
                    '../src/assets/img20.jpg',
                    '../src/assets/img21.jpg',
                    '../src/assets/img22.jpg',
                    '../src/assets/img24.jpg',
                    '../src/assets/img25.png',
                    '../src/assets/img26.png',
                    '../src/assets/img27.jpg',
                    '../src/assets/img28.png'],
                preLoaded: false // 预加载是否完成
            }
        },
        methods: {
            wxRegCallback() {
                // 用于微信JS-SDK回调
                this.wxShareTimeline();
                this.wxShareAppMessage()
            },
            wxShareTimeline() {
                // 微信自定义分享到朋友圈
                let option = {
                    title: shareData.title,
                    link: shareData.url,
                    imgUrl: shareData.picUrl,
                    success: () => {
                        shareData.callback()
                    },
                    error: () => {

                    }
                };
                wxapi.ShareTimeline(option)
            },
            wxShareAppMessage() {
                // 微信自定义分享给朋友
                const option = {
                    title: shareData.timelineTitle,
                    desc: shareData.desc,
                    link: shareData.url,
                    imgUrl: shareData.picUrl,
                    success: () => {
                        shareData.callback()
                    },
                    error: () => {

                    }
                };
                wxapi.ShareAppMessage(option)
            },
            fn() {
                this.preLoaded = true;
                document.getElementById('loading').remove()
                document.getElementById('content').hidden = false
            }
        },
        components: {
            CSlider,
            wxapi,
            preloadImage
        }

    };
</script>

<style>
    html,
    body,
    #app {
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
</style>
