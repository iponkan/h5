/**
 * 微信js-sdk
 * 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 */
import wx from 'weixin-js-sdk'
import axios from 'axios'

const wxApi = {
    /**
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegister(callback) {

        axios.get('https://api.sonicers.com/release/get_signature', {
            params: {
                reqUrl: window.location.href
            }
        }).then((res) => {
            console.log("res=========", res);
            let data = res.data;
            console.log("data==========", data);
            console.log("data.appId==========", data.appId);
            console.log("data.timestamp==========", data.timestamp);
            console.log("data.nonceStr==========", data.nonceStr);
            console.log("data.signature==========", data.signature);
            wx.config({
                debug: false, // 开启调试模式
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'onVoicePlayEnd',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
            })
        }).catch((error) => {
            console.log(error)
        });
        wx.ready(() => {
            // 如果需要定制ready回调方法
            if (callback) {
                callback()
            }
        })
    },
    /**
     * [ShareTimeline 微信分享到朋友圈]
     */
    ShareTimeline(option) {
        wx.onMenuShareTimeline({
            title: option.title, // 分享标题
            link: option.link, // 分享链接
            imgUrl: option.imgUrl, // 分享图标
            success() {
                // 用户成功分享后执行的回调函数
                option.success()
            },
            cancel() {
                // 用户取消分享后执行的回调函数
                option.error()
            }
        })
    },
    /**
     * [ShareAppMessage 微信分享给朋友]
     */
    ShareAppMessage(option) {
        wx.onMenuShareAppMessage({
            title: option.title, // 分享标题
            desc: option.desc, // 分享描述
            link: option.link, // 分享链接
            imgUrl: option.imgUrl, // 分享图标
            success() {
                // 用户成功分享后执行的回调函数
                option.success()
            },
            cancel() {
                // 用户取消分享后执行的回调函数
                option.error()
            }
        })
    }
};
export default wxApi
