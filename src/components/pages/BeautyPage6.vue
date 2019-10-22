<template>
    <div style="background-color: rgb(255, 255, 255);">
        <div v-bind:class="anirun ? 'showUi' : 'hideUi'">
            <div
                style="position: absolute; width: 100.0%; height: 100.0%; overflow: hidden; background-color: rgb(255, 255, 255);"
            ></div>
            <div
                style="width: 97.03117419439516%; height: 97.03124999999999%; left: 0.0%; top: 0; position: absolute;"
            >
                <div
                    style="width: 97.03117419439516%; height: 97.03124999999999%; left: 0.0%; top: 0.0%; position: absolute; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div1':null"
                        style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/5070864/images/d26d2971c8b9b8821626e180e4ecccab.png@0-0-640-1008a_80Q.src"); 
                        background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                    >
                        <img
                            src="http://img1.maka.im/user/5070864/images/d26d2971c8b9b8821626e180e4ecccab.png@0-0-640-1008a_80Q.src"
                            style="opacity: 0;"
                        />
                    </div>
                </div>
                <div
                    style="width: 138.26379823140763%; height: 38%; left: -28.80443062153858%; top: 0%; position: absolute; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div2':null"
                        style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/5070864/images/fc1b92f11702a0bfdd2a334b87242f00.png@0-17-640-361a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                    >
                        <img
                            src="http://img1.maka.im/user/5070864/images/fc1b92f11702a0bfdd2a334b87242f00.png@0-17-640-361a_80Q.src"
                            style="opacity: 0;"
                        />
                    </div>
                </div>
                <div
                    style="position: absolute; width: 63.96065315573972%; height: 4.235491071428571%; top: 47.74553571428572%; left: 5.154769410336399%; transform-origin: center center; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div3':null"
                        style="width: 100%; height: 100%; color: rgb(49, 71, 155); text-align: left; font-weight: normal; text-decoration: none; line-height: 1.5; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 19px; letter-spacing: 0px; display: block;"
                    >
                        <div>Company introduction</div>
                    </div>
                </div>
                <div
                    style="position: absolute; width: 40.63098388204385%; height: 7.123318452380952%; top: 41.39226190476191%; left: 4.851558709719758%; transform-origin: center center; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div4':null"
                        style="width: 100%; height: 100%; color: rgb(49, 71, 155); text-align: left; font-weight: bold; text-decoration: none; line-height: 1.5; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 32px; letter-spacing: 0px; display: block;"
                    >
                        <div>MAKA简介</div>
                    </div>
                </div>
                <div
                    style="position: absolute; width: 20.4679761968936%; height: 12.995550595238095%; top: 30.129464285714285%; left: 67.76971267991198%; transform: rotate(0deg);"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div5':null"
                        style="position: absolute; width: 100%; height: 100%; display: block;background-color:white;"
                    ></div>
                </div>
                <div
                    style="width: 17.738517391783287%; height: 11.262559523809523%; left: 68.98307110697569%; top: 30.89985119047619%; position: absolute; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div6':null"
                        style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/5070864/images/f9305f3bf4af666244bca658fa2466c4.png@0-0-117-117a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                    >
                        <img
                            src="http://img1.maka.im/user/5070864/images/f9305f3bf4af666244bca658fa2466c4.png@0-0-117-117a_80Q.src"
                            style="opacity: 0;"
                        />
                    </div>
                </div>
                <div
                    style="position: absolute; width: 87.63016591393288%; height: 35.42410714285714%; top: 54.00252976190476%; left: 4.851558709719758%;transform-origin: center center; opacity: 1;"
                >
                    <div
                        class="animated"
                        v-bind:class="anirun?'div7':null"
                        style="width: 100%; height: 100%; color: rgb(0, 0, 0); text-align: left; font-weight: normal; text-decoration: none; line-height: 1.8; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 16px; letter-spacing: 0px; display: block;"
                    >
                        <p>
                            MAKA（码卡）是一个H5在线创作及创意工具，由深圳格莱珉文化传播有限公司开发，为企业提供包括企业形象宣传、活动邀请、产品展示、数据可视化展示、活动报名等应用场景需求的服务。上线至2017年7月已积累1500万注册用户，[3]
                            每月超过5亿人次通过MAKA阅读H5图文交互信息。
                            [3]2017年8月，MAKA上线海报创作功能，从H5平台升级为设计平台。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            anirun: false
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
        },
        pauseAni: function() {
            this.anirun = false;
        }
    }
};
</script>

<style scoped>
/*引入公共样式*/
@import "./style/beauty.css";
.div1 {
    animation: 1000ms linear 600ms 1 normal both running fadeInNormal;
}

.div2 {
    animation: 2500ms linear 300ms 1 normal both running fadeInUp;
}

.div3 {
    animation: 1000ms linear 1000ms 1 normal both running fadeInDown;
}

.div4 {
    animation: 1000ms linear 1000ms 1 normal both running fadeInUp;
}
.div5 {
    animation: 2000ms linear 2000ms 1 normal both running zoomIn;
}
.div6 {
    animation: 2000ms linear 1500ms 1 normal both running zoomIn;
}
.div7 {
    animation: 2500ms linear 1500ms 1 normal both running fadeInNormal;
}
</style>