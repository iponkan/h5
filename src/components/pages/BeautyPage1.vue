<template>
    <div style="width: 100.0%; height: 100.0%;position: absolute;">
        <div
            style="position: absolute; width: 100.0%; height: 100.0%;overflow: hidden; background-color: rgb(255, 255, 255);"
        >
            <img
                src="http://img1.maka.im/user/4815651/images/65e1cf2a43c347e0f3f5ff8cd34b5c34.jpg@80Q.src"
                style="position: absolute; width: 118.5936573487052%; top: 0.0%; left: -9.287758368938775%; -webkit-user-drag: none; user-select: none; opacity: 1;"
            />
        </div>
        <div
            class="maka-eleCanvas maka-eleCanvas-1"
            style="width: 97.03117419439516%; height: 97.03124999999999%; left: 0.0%; top: 1.484375%; position: absolute;"
        >
            <div></div>
            <div
                style="position: absolute; width: 58.61737608017494%; height: 96.63526785714286%; top: -0.01869717261904762%; left: -0.08834407160619406%;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div1':null"
                    style="position: absolute; width: 100%; height: 100%;background:#ffffff; display: block;"
                ></div>
            </div>
            <div
                style="position: absolute; width: 23.802872029006227%; height: 12.70386904761905%; top: 10.011160714285715%; left: 52.00261562295655%; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div2':null"
                    style="font-family: makafontmakaimmakafont4815651TFEKZ1JCS1509949591872-bemukettf;background:#000000; width: 100%; height: 100%; color: white; text-align: center; font-weight: bold; text-decoration: none; line-height: 1.3; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 0.49466684rem; letter-spacing: 0.049466684rem; display: block; "
                >
                    <div>宁静致远</div>
                </div>
            </div>
            <div
                style="position: absolute; width: 50.486444932464906%; height: 12.849880952380953%; top: 8.182202380952381%; left: 0.6064448387149698%;  transform-origin: center center; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div3':null"
                    style="font-family: makafontmakaimmakafont4815651TFEKZ1JCS1509949591872-bemukettf; width: 100%; height: 100%; color: rgb(0, 0, 0); text-align: right; font-weight: bold; text-decoration: none; line-height: 1.3; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 0.7110836rem; letter-spacing: 0.071108356rem; display: block;"
                >
                    <div>关于我们</div>
                </div>
            </div>
            <div
                style="position: absolute; width: 49.31058647610432%; height: 3.6505357142857147%; top: 19.829761904761906%; left: 4.245113871004789%;  transform-origin: center center; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div4':null"
                    style="font-family: makafontmakaimmakafont4815651TFEKZ1JCS1509949591872-bemukettf; width: 100%; height: 100%; color: rgb(0, 0, 0); text-align: left; font-weight: bold; text-decoration: none; line-height: 1.3; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 0.2782501rem; letter-spacing: 0.02782501rem; display: block; "
                >
                    <div>欢迎来到maka的小店</div>
                </div>
            </div>
            <div
                style="position: absolute; width: 45.88941727389276%; height: 4.964732142857143%; top: 31.505357142857143%; left: 5.243808403274685%;  transform-origin: center center; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div5':null"
                    style="font-family: makafontmakaimmakafont4815651TFEKZ1JCS1509949679090-hls92yttf; width: 100%; height: 100%; color: rgb(0, 0, 0); text-align: center; font-weight: normal; text-decoration: none; line-height: 1.6; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 0.3555418rem; letter-spacing: 0.0rem; display: block; "
                >
                    <div>标题</div>
                </div>
            </div>
            
            <div
                style="position: absolute; width: 47.04816636862002%; height: 43.36830357142858%; top: 38.60565476190476%; left: 4.008840618093267%;  transform-origin: center center; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div6':null"
                    style="font-family: makafontmakaimmakafont4815651TFEKZ1JCS1509949679090-hls92yttf; width: 100%; height: 100%; color: rgb(0, 0, 0); text-align: left; font-weight: normal; text-decoration: none; line-height: 1.8; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 0.2782501rem; letter-spacing: 0.0rem; display: block; "
                >
                    <div>
                        在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容在此输入文本内容
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
    animation: 1700ms linear 700ms 1 normal both running fadeInLeft;
}
.div2 {
    animation: 1700ms linear 800ms 1 normal both running fadeInLeft;
}
.div3 {
    animation: 1700ms linear 800ms 1 normal both running fadeInLeft;
}
.div4 {
    animation: 1700ms linear 800ms 1 normal both running fadeInLeft;
}
.div5 {
    animation: 1700ms linear 900ms 1 normal both running fadeInUp;
}
.div6 {
    animation: 1700ms linear 1000ms 1 normal both running fadeInRight;
}
</style>