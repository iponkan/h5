<template>
    <div id="body">
        <div id="title">
            <div id="div1" class="animated" v-bind:class="anirun?'div1Ani':null">
                <div>Nmame--房型</div>
            </div>
        </div>

        <div id="div2">
            <div id="div3" class="no_margin animated" v-bind:class="anirun?'div3Ani':null">
                <div><p>在此输入酒店的服务宗旨、态度等内容。</p></div>
            </div>
        </div>
        <div id="div4">
            <div id="div5" class="animated" v-bind:class="anirun?'div5Ani':null">
                <img
                    src="http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@126-0-346-450a_80Q.src"
                    style="opacity: 0;"
                />
            </div>
        </div>
        <div id="div6">
            <div id="div7" class="animated" v-bind:class="anirun?'div7Ani':null">
                <img
                    src="http://img1.maka.im/user/4815651/images/454b5d3fc53d9eb2571bfa30ffdb67c9.jpg@126-0-344-450a_80Q.src"
                    style="opacity: 0;"
                />
            </div>
        </div>
        <div id="div8">
            <div id="div9" class="animated" v-bind:class="anirun?'div9Ani':null">
                <img
                    src="http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@125-0-345-450a_80Q.src"
                    style="opacity: 0;"
                />
            </div>
        </div>
        <div id="div10">
            <div id="div11" class="animated" v-bind:class="anirun?'div11Ani':null">
                <img
                    src="http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@510-0-535-688a_80Q.src"
                    style="opacity: 0;"
                />
            </div>
        </div>
        <div id="div12">
            <div id="div13" class="no_margin animated" v-bind:class="anirun?'div13Ani':null">
                <div><p>请在这里输入文本&nbsp;</p></div>
            </div>
        </div>
        <div id="div14">
            <div id="div15" class="no_margin animated" v-bind:class="anirun?'div15Ani':null">
                <div><p>&nbsp;请在这里输入文本&nbsp;</p></div>
            </div>
        </div>
        <div id="div16">
            <div id="div17" class="no_margin animated" v-bind:class="anirun?'div17Ani':null">
                <div><p>请在这里输入文本&nbsp;</p></div>
            </div>
        </div>
        <div id="div18">
            <div id="div19" class="no_margin animated" v-bind:class="anirun?'div19Ani':null">
                <div><p>&nbsp;请在这里输入文本&nbsp;</p></div>
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
            console.log("------");
        },
        pauseAni: function() {
            this.anirun = false;
            console.log("+++++++");
        }
    }
};
</script>

<style scoped>
/*引入公共样式*/
@import "./style/beauty.css";
#body {
    width: 100%;
    height: 100%;
    position: absolute;
}
#title {
    position: absolute;
    width: 100%;
    height: auto;
    top: 3.7202380952380953%;
    left: 5.859370422366858%;
    transform-origin: center center;
    opacity: 1;
}
#div1 {
    width: 100%;
    height: 100%;
    color: rgb(255, 255, 255);
    background: rgba(25, 25, 25, 0);
    text-align: left;
    font-weight: bold;
    text-decoration: none;
    line-height: 1;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 25px;
    letter-spacing: 0px;
    display: block;
    transform: none;
}
#div2 {
    position: absolute;
    width: 100%;
    height: 2.7744047619047616%;
    top: 11.441324404761904%;
    left: 5.587964384402825%;
    transform: rotate(0deg);
    transform-origin: center center;
    opacity: 1;
}
#div3 {
    width: 100%;
    height: 100%;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0);
    text-align: left;
    font-weight: normal;
    text-decoration: none;
    line-height: 1.5;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 12px;
    letter-spacing: 0px;
    display: block;
}

.div3Ani {
    animation: 1000ms linear 1500ms 1 normal both running pullUp;
}

#div4 {
    width: 42.72606037026534%;
    height: 35.23303571428571%;
    left: 50.02074217129518%;
    top: 58.39077380952381%;
    position: absolute;
    opacity: 1;
}
#div5 {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@126-0-346-450a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}

.div5Ani {
    animation: 1000ms linear 3500ms 1 normal both running fadeInNormal;
}

#div6 {
    width: 42.46566994869536%;
    height: 35.23303571428571%;
    left: 4.689465086355402%;
    top: 58.58333333333333%;
    position: absolute;
    opacity: 1;
}
#div7 {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("http://img1.maka.im/user/4815651/images/454b5d3fc53d9eb2571bfa30ffdb67c9.jpg@126-0-344-450a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}

.div7Ani {
    animation: 1000ms linear 3000ms 1 normal both running fadeInNormal;
}

#div8 {
    width: 42.46566994869536%;
    height: 35.06755952380952%;
    left: 4.471637131533492%;
    top: 21.33824404761905%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div9 {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@125-0-345-450a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}

.div9Ani {
    animation: 1000ms linear 2000ms 1 normal both running fadeInNormal;
}

#div10 {
    width: 42.986685166652215%;
    height: 35.06755952380952%;
    left: 49.993320317718506%;
    top: 21.267113095238095%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div11 {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@510-0-535-688a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}

.div11Ani {
    animation: 1000ms linear 2500ms 1 normal both running fadeInNormal;
}

#div12 {
    position: absolute;
    width: 42.29949820351703%;
    height: 4.672693452380953%;
    top: 51.78854166666667%;
    left: 4.5483245716214284%;
    transform: rotate(0deg);
    transform-origin: center center;
    opacity: 1;
}
#div13 {
    width: 100%;
    height: 100%;
    color: rgb(105, 105, 105);
    background: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 2;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 15px;
    letter-spacing: 0px;
    display: block;
}

.div13Ani {
    animation: 1000ms linear 2000ms 1 normal both running fadeInNormal;
}

#div14 {
    position: absolute;
    width: 43.20910686788527%;
    height: 4.672693452380953%;
    top: 51.88482142857143%;
    left: 49.72847677462753%;
    transform-origin: center center;
    opacity: 1;
}
#div15 {
    width: 100%;
    height: 100%;
    color: rgb(105, 105, 105);
    background: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 2;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 15px;
    letter-spacing: 0px;
    display: block;
}

.div15Ani {
    animation: 1000ms linear 2500ms 1 normal both running fadeInNormal;
}

#div16 {
    position: absolute;
    width: 42.29949820351703%;
    height: 4.672693452380953%;
    top: 89.25312499999998%;
    left: 4.591027663259639%;
    transform: rotate(0deg);
    transform-origin: center center;
    opacity: 1;
}
#div17 {
    width: 100%;
    height: 100%;
    color: rgb(105, 105, 105);
    background: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 2;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 15px;
    letter-spacing: 0px;
    display: block;
}

.div17Ani {
    animation: 1000ms linear 3000ms 1 normal both running fadeInNormal;
}

#div18 {
    position: absolute;
    width: 43.20910686788527%;
    height: 4.672693452380953%;
    top: 89.07931547619047%;
    left: 49.70925803964216%;
    transform: rotate(0deg);
    transform-origin: center center;
    opacity: 1;
}
#div19 {
    width: 100%;
    height: 100%;
    color: rgb(105, 105, 105);
    background: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 2;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 15px;
    letter-spacing: 0px;
    display: block;
}

.div19Ani {
    animation: 1000ms linear 3000ms 1 normal both running fadeInNormal;
}

.div1Ani {
    animation: 1000ms linear 357ms 1 normal both running rotateIn;
}
</style>