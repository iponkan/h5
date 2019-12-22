<template>
    <div id="app">
        <section id="loading" style="width:100%;height:100%;background: #1991EC">
            <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="fn" :animationShow="false">
                <img style="width: 20vh; height: 20vh" src="../src/assets/loading.gif"/>
            </preload-image>
        </section>

        <section id="content" style="width:100%;height:100%" hidden>
            <CSlider style="width:100%;height:100%"/>
        </section>
        
    </div>
</template>

<script>
    import CSlider from './components/CSlider.vue'
    import wxapi from '../src/sns/wxapi.js'
    import preloadImage from './components/util/vue-preload-image.vue'

    const baseLink = window.location.href.replace(/%26/g, '&')

    const shareData = {
        url: baseLink,
        picUrl: "https://uss.sonicers.com/zhiaibaobao/cover.jpg",
        title: '智爱宝贝，时尚塑造美～',
        desc: '产后恢复这样做，哪里像是生过娃～',
        timelineTitle: '智爱宝贝，时尚塑造美～',

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
                imgUrls: [
                    '../src/assets/page23_1.jpg',
                    '../src/assets/page24_1.jpg',
                    '../src/assets/page24_2.jpg',
                    '../src/assets/page24_3.jpg',
                    '../src/assets/page24_4.jpg',
                    '../src/assets/page24_5.jpg',
                    '../src/assets/page24_6.jpg',
                    '../src/assets/page25_1.jpg',
                    '../src/assets/page25_2.jpg',
                    '../src/assets/page25_3.jpg',
                    '../src/assets/page25_4.jpg',
                    '../src/assets/page25_5.jpg',
                    '../src/assets/page26_1.jpg',
                ],
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
