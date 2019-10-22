<template>
    <div>
        <div
            style="position: absolute; width: 100.0%; height: 100.0%; overflow: hidden; background-color: rgb(255, 255, 255);"
        ></div>
        <div
            style="width: 100%; height: 100%; left: 0.0%; top: 0%; position: absolute;"
        >
            <div
                style="width: 100%; height: 38.21041666666667%; left: 0.0%; top: 0.0%; position: absolute; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div1' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; background-image: url("http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@0-38-600-372a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/877fd209714394918802c70242a57810.jpg@0-38-600-372a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 29.960367218463112%; height: 19.35327380952381%; left: 2.344732543177701%; top: 39.533630952380946%; position: absolute; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div2' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; background-image: url("http://img1.maka.im/user/4815651/images/34b4ea7138dfd6205c268659a3e7bd68.jpg@101-0-394-401a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/34b4ea7138dfd6205c268659a3e7bd68.jpg@101-0-394-401a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 29.69997679689313%; height: 19.187946428571433%; left: 64.87073056974174%; top: 39.69910714285715%; position: absolute; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div3' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; background-image: url("http://img1.maka.im/user/4815651/images/454b5d3fc53d9eb2571bfa30ffdb67c9.jpg@76-0-442-450a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/454b5d3fc53d9eb2571bfa30ffdb67c9.jpg@76-0-442-450a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 29.960367218463112%; height: 19.187946428571433%; left: 33.60770811897804%; top: 39.69910714285715%; position: absolute; opacity: 1;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div4' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; background-image: url("http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@207-0-682-688a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@207-0-682-688a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="position: absolute; width: 87.17641626842479%; height: 5.256770833333333%; top: 62.833779761904765%; left: 4.984003918746939%; transform: rotate(0deg); transform-origin: center center; opacity: 1;"
            >
                <div
                    class="no_margin animated"
                    v-bind:class="anirun ? 'div5' : null"
                    style="width: 100%; height: 100%; color: rgb(0, 0, 0); background: rgba(25, 25, 25, 0); text-align: center; font-weight: bold; text-decoration: none; line-height: 1; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 36px; letter-spacing: 0px; display: block;"
                >
                    <div><p>Name</p></div>
                </div>
            </div>
            <div
                style="position: absolute; width: 88.08602493279302%; height: 7.593110119047619%; top: 80.89508928571428%; left: 5.086917900845391%; transform: rotate(0deg); transform-origin: center center; opacity: 1;"
            >
                <div
                    class="no_margin animated"
                    v-bind:class="anirun ? 'div6' : null"
                    style="width: 100%; height: 100%; color: rgb(105, 105, 105); background: rgba(25, 25, 25, 0); text-align: center; font-weight: normal; text-decoration: none; line-height: 1; font-style: normal; overflow-wrap: break-word; white-space: pre-wrap; font-size: 12px; letter-spacing: 0px; display: block;"
                >
                    <div>豪华套房</div>
                    <div>
                        <p>更便捷的文字编辑方式，丰富的形状元素搭配；&nbsp;</p>
                        <p>图片库持续更新丰富背景、元素、表情等素材；</p>
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

.div1 {
    animation: 1000ms linear 500ms 1 normal both running fadeInNormal;
}

.div2 {
    animation: 785ms linear 1000ms 1 normal both running stretchRight;
}

.div3 {
    animation: 785ms linear 1785ms 1 normal both running stretchRight;
}

.div4 {
    animation: 785ms linear 1357ms 1 normal both running stretchRight;
}

.div5 {
    animation: 2000ms linear 1000ms 1 normal both running zoomIn;
}

.div6 {
    animation: 1500ms linear 2200ms 1 normal both running fadeInNormal;
}
</style>