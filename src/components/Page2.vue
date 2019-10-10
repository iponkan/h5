<template>
    <div class="body">
        <div class="div1_3">
            <img
                src="../assets/i1.jpeg"
                v-bind:class="anirun ? 'bounceInLeft' : null"
            />
        </div>

        <div class="div1_3">
            <img
                src="../assets/i2.jpeg"
                v-bind:class="anirun ? 'bounceInRight' : null"
                style="animation-delay: 1s"
            />
        </div>

        <div class="div1_3">
            <img
                src="../assets/i3.jpeg"
                v-bind:class="anirun ? 'bounceInBottom' : null"
                style="animation-delay: 2s"
            />
        </div>

        <div
            class="div_content"
            v-bind:class="anirun ? 'bounceIn' : null"
            style="animation-delay: 3s"
        >
            <p>
                在这火候餐饮一周年的庆典之际，首先我谨代表各位董事，向付出辛勤劳动的各位家人表示真诚的感谢，同时我又代表火候全体员工，向支持我们工作的，各位董事表示诚挚的感谢，感谢他们对我一直以来的信任，再者我代表火候全体员工和董事，向在长的各界朋友及嘉宾表示衷心的......
                回望火候开业以来的那些风风雨雨，我们摸索了很多，同时也让我感受到了很多，我看到了火候的优势也感到了不足，感受到了团队的凝聚力，也感受到了管理的压力，俗话说没有压力就没有动力，因为这个强大的动力也更加坚定了我的决心，但是总体来说、我还是深感荣幸和自豪，因为大家的群策群力，克服了种种困难，创造了火候一年来的辉煌。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "page2",
    data() {
        return {
            anirun: false
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("Page2 runAni");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*引入公共样式*/
@import "../style/main.scss";
@import "../style/anis.scss";

.body {
    background: whitesmoke;
}

.div1_3 {
    width: 100%;
    height: 33%;
}

.body hr {
    width: 100%;
    height: 1px;
    margin: 0px;
    background: whitesmoke;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.div_content {
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;

    background: rgba(205, 205, 198, 0.3);
    border-width: 1px;
    border-radius: 5px;
}

.div_content p {
    margin-top: 0px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 15px;
    color: black;
    white-space: pre-wrap;
    text-align: left;
}

.bounceInLeft {
    animation: fadeInLeftBig 1s 0.2s ease both;
}
@keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        transform: translateX(-1000px) rotate(-120deg);
    }
    100% {
        opacity: 0.5;
        transform: translateX(0) rotate(0deg);
    }
}

.bounceInRight {
    animation: fadeInRightBig 1s 0.2s ease both;
}
@keyframes fadeInRightBig {
    0% {
        opacity: 0;
        transform: translateX(1000px) rotate(120deg);
    }
    100% {
        opacity: 0.5;
        transform: translateX(0) rotate(0deg);
    }
}

.bounceInBottom {
    animation: fadeInUpBig 1s 0.2s ease both;
}
@keyframes fadeInUpBig {
    0% {
        opacity: 0;
        transform: translateY(2000px);
    }
    100% {
        opacity: 0.5;
        transform: translateY(0);
    }
}


</style>
