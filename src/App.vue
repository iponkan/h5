<template>
    <div id="app">
        <Scroll style="width:100%;height:100%;">
            <CSlider style="width:100%;height:100%"/>
        </Scroll>

        <audio
                id="audio"
                src="https://m7.music.126.net/20190904154408/f442f39b5e7e408351d7a0427bd97fc6/ymusic/0152/055a/5308/681ef6f50f20971ac5bddb07161fc6b5.mp3"
                loop="loop"
                autoplay="autoplay"
        ></audio>
    </div>
</template>

<script>
    import Scroll from './components/Scroll.vue'
    import CSlider from './components/CSlider.vue'
    import wxapi from '../src/sns/wxapi.js'

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
            }
        },
        components: {
            Scroll,
            CSlider,
            wxapi
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
