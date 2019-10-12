<template>
    <div>
        <div class="g-content">
            <div class="g-lottery-box">
                <div
                    class="g-lottery-img"
                    :class="[rotate ? 'go' : 'aa']"
                ></div>
                <a class="playbtn" title="开始抽奖" @click="start"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mainpage",
    data() {
        return {
            anirun: false,
            rotate: false,
            curdeg:0,
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("pagetest runAni");
        },
        start: function() {
            console.log("start === ");
            var deg = (Math.random() - 0.5) * 360 * 5 + this.curdeg;

            this.curdeg = deg;

            document.body.style.setProperty("--deg", deg + "deg");
            console.log("start === " + deg);
            this.rotate = !this.rotate;
        }
    }
};
</script>



<style scoped>
/*引入公共样式*/
@import "../style/main.scss";
@import "../style/anis.scss";

:root {
    --deg: 180deg;
}

.aa {
    transition: all 2s;
}

.go {
    transform: rotate(calc(var(--deg)));
    transition: all 2s;
}

.g-content {
    width: 100%;
    background: #fbe3cc;
    height: 100%;
    position: relative;
    font-family: "微软雅黑", "microsoft yahei";
}

.g-lottery-box {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    margin-top: 20px;
    background: url(../assets/lottery/ly-plate-c.gif) no-repeat;
}

.g-lottery-img {
    width: 340px;
    height: 340px;
    position: relative;
    background: url(../assets/lottery/bg-lottery.png) no-repeat;
    left: 30px;
    top: 30px;
}

.playbtn {
    width: 186px;
    height: 186px;
    position: absolute;
    left: 50%;
    margin-left: -93px;
    top: 50%;
    margin-top: -93px;
    background: url(../assets/lottery/playbtn.png) no-repeat;
}
</style>
