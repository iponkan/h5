<template>
    <div id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Scroll style="width:100%;height:100%;">
            <CSlider style="width:100%;height:100%"/>
        </Scroll>

        <audio
                id="audio"
                src="https://m7.music.126.net/20190904154408/f442f39b5e7e408351d7a0427bd97fc6/ymusic/0152/055a/5308/681ef6f50f20971ac5bddb07161fc6b5.mp3"
                loop="loop"
                autoplay="true"
        ></audio>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Scroll from './components/Scroll.vue'
    import CSlider from './components/CSlider.vue'
    import wxapi from '../src/sns/wxapi.js'

    export default {
        name: 'app',
        mounted() {
            new this.$vconsole();
            wxapi.wxRegister(this.wxRegCallback);
        },
        methods: {
            wxRegCallback() {
                // 用于微信JS-SDK回调
                this.wxShareTimeline()
                this.wxShareAppMessage()
            },
            wxShareTimeline() {
                // 微信自定义分享到朋友圈
                let option = {
                    title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
                    link: 'https://movie.douban.com/subject/25785114/', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg', // 分享图标, 请自行替换，需要绝对路径
                    success: () => {
                        alert('分享成功')
                    },
                    error: () => {
                        alert('已取消分享')
                    }
                };
                // 将配置注入通用方法
                wxapi.ShareTimeline(option)
            },
            wxShareAppMessage() {
                // 微信自定义分享给朋友
                let option = {
                    title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
                    desc: '限时团购周 挑战最低价', // 分享描述, 请自行替换
                    link: 'https://movie.douban.com/subject/25785114/', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg', // 分享图标, 请自行替换，需要绝对路径
                    success: () => {
                        alert('分享成功')
                    },
                    error: () => {
                        alert('已取消分享')
                    }
                };
                // 将配置注入通用方法
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
