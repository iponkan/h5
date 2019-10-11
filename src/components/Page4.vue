<template>
    <div class="body">
        <img
            src="../assets/food.jpeg"
            width="auto"
            height="100%"
            v-bind:class="anirun ? 'down_bounce' : null"
        />
        <div class="introduce1" v-bind:class="anirun ? 'rollIn' : null">
            <span>
                对于美食，有时不一定非要四处寻觅。人们围坐在一起，守着地老天荒，就这样生活着，何尝不是一种对美食的纯真态度。~~
            </span>
        </div>
        <div class="title" v-bind:class="anirun ? 'bounceInDown' : null">
            <span>舌尖上的美味</span>
        </div>

        

    </div>
</template>

<script>
export default {
    name: "pagetest",
    data() {
        return {
            anirun: false
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("pagetest runAni");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*引入公共样式*/
@import "../style/main.scss";
@import "../style/anis.scss";


.anim-wrap {
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.body {
    background: #42b983;
    margin: 0;
}

.text-wrapper {
    white-space: pre-wrap;
}

.title { 
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    z-index: 2;
    text-decoration-color: #42b983;

}
.title div{
    display: inline;
    color: brown;
}

.introduce1 {
    display: block;
    width: 50%;
    height: auto;
    position: absolute;
    top: 100px;
    left: 20px;
    border: 1px;
    z-index: 3;
    background-color: aliceblue;
    color: #000;
    font-size: 10px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    box-shadow: #000 5px 5px;
}

.title span {
    color: brown;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-radius: 5px;
    text-shadow:5px 2px 6px #000;
    /* box-shadow: #000 5px 5px; */
}

.title h3 {
    color: brown;
}


.introduce1 span {
    display: block;
    width: 100%;
    height: auto;
    color: #9d7912;
    font-size: 13px;
    white-space: pre-wrap;
}

.rollIn {
    animation: frollIn 1s 0.2s ease both;
    animation-delay: 1000ms;
}

@keyframes frollIn {
    0% {
        opacity: 0;
        transform: translateX(-100%) rotate(-120deg);
    }
    100% {
        opacity: 1;
        transform: translateX(0px) rotate(0deg);
    }
}

.bounceInDown {
    animation: fbounceInDown 1s 0.2s ease both;
    animation-delay: 2000ms;
}

@keyframes fbounceInDown {
    0% {
        opacity: 0;
        transform: translateY(-2000px);
    }
    60% {
        opacity: 1;
        transform: translateY(30px);
    }
    80% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

.down_bounce {
    animation-name: down_bounce-keyframes;
    animation-duration: 1000ms;
    animation-delay: 0ms;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    transform-origin: 0 0;
}
@keyframes down_bounce-keyframes {
    0% {
        transform: translateY(-1000px);
    }
    3.03% {
        transform: translateY(-993.0556px);
    }
    6.06% {
        transform: translateY(-972.2222px);
    }
    9.09% {
        transform: translateY(-937.5px);
    }
    12.12% {
        transform: translateY(-888.8889px);
    }
    15.15% {
        transform: translateY(-826.3889px);
    }
    18.18% {
        transform: translateY(-750px);
    }
    21.21% {
        transform: translateY(-659.7222px);
    }
    24.24% {
        transform: translateY(-555.5556px);
    }
    27.27% {
        transform: translateY(-437.5px);
    }
    30.3% {
        transform: translateY(-305.5556px);
    }
    33.33% {
        transform: translateY(-159.7222px);
    }
    36.36% {
        transform: translateY(0px);
    }
    39.39% {
        transform: translateY(-76.3889px);
    }
    42.42% {
        transform: translateY(-138.8889px);
    }
    45.45% {
        transform: translateY(-187.5px);
    }
    48.48% {
        transform: translateY(-222.2222px);
    }
    51.52% {
        transform: translateY(-243.0556px);
    }
    54.55% {
        transform: translateY(-250px);
    }
    57.58% {
        transform: translateY(-243.0556px);
    }
    60.61% {
        transform: translateY(-222.2222px);
    }
    63.64% {
        transform: translateY(-187.5px);
    }
    66.67% {
        transform: translateY(-138.8889px);
    }
    69.7% {
        transform: translateY(-76.3889px);
    }
    72.73% {
        transform: translateY(0px);
    }
    75.76% {
        transform: translateY(-34.7222px);
    }
    78.79% {
        transform: translateY(-55.5556px);
    }
    81.82% {
        transform: translateY(-62.5px);
    }
    84.85% {
        transform: translateY(-55.5556px);
    }
    87.88% {
        transform: translateY(-34.7222px);
    }
    90.91% {
        transform: translateY(0px);
    }
    93.94% {
        transform: translateY(-13.8889px);
    }
    96.97% {
        transform: translateY(-13.8889px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>
