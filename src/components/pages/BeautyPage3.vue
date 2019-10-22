<template>
    <div>
        <div
            style="width: 100%; height: 100%; left: 0.0%; top: 0%; position: absolute;"
        >
            <div
                style="width: 88%; height: 72%; left: 6%; top: 2.9242708333333334%; position: absolute; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun?'div1':null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; background-image: url("http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@480-0-538-688a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@480-0-538-688a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="position: absolute; width: 91.27000682030717%; height: 5.110744047619048%; top: 76.33511904761905%; left: 5.003175778768924%; transform-origin: center center; opacity: 1;"
            >
                <div
                    class="no_margin animated"
                    v-bind:class="anirun?'div2':null"
                    style="width: 100%; height: 100%; color: rgb(0, 0, 0); background: rgba(0, 0, 0, 0); text-align: left; font-weight: normal; text-decoration: none; line-height: 1.5; font-style: normal; box-shadow: black 0px 0px 0px; overflow-wrap: break-word; white-space: pre-wrap; font-size: 23px; letter-spacing: 0px; display: block; "
                >
                    <div><p>豪华大床房</p></div>
                </div>
            </div>
            <div
                style="position: absolute; width: 83.0830600913593%; height: 8.323229166666666%; top: 82.72306547619047%; left: 5.131683490872272%; transform-origin: center center; opacity: 1;"
            >
                <div
                    class="no_margin animated"
                    v-bind:class="anirun?'div3':null"
                    style="width: 100%; height: 100%; color: rgb(75, 75, 75); background: rgba(25, 25, 25, 0); text-align: left; font-weight: normal; text-decoration: none; line-height: 1.5; font-style: normal; box-shadow: black 0px 0px 0px; overflow-wrap: break-word; white-space: pre-wrap; font-size: 12px; letter-spacing: 0px; display: block; "
                >
                    <div>
                        <p>
                            在此输入房间介绍您可以进行文本输入、复制、黏贴；调整字体大小、颜色、对齐、行距；更便捷的文字编辑，丰富的形状搭配。
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
            console.log("runAni =========== ");
        },
        pauseAni: function() {
            this.anirun = false;
            console.log("pauseAni =========== ");
        }
    }
};
</script>

<style scoped>
/*引入公共样式*/
@import "./style/beauty.css";
.div1{
    animation: 3000ms linear 0ms 1 normal both running fadeInNormal;
}
.div2{
    animation: 800ms linear 1000ms 1 normal both running moveLeft;
}
.div3{
    animation: 1600ms linear 2000ms 1 normal both running pullDown;
}
</style>