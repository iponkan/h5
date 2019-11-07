<template>
    <div style="background-color: rgb(255, 255, 255);">
        <div v-bind:class="anirun ? 'showUi' : 'hideUi'">
            <div id="div0Id">
                <img
                    src="../../assets/img12.jpg"
                    style="position: absolute; width: 100%; height:100%; top: 0.0%; left: 0.0%; -webkit-user-drag: none; user-select: none; opacity: 0.3;object-fit:cover;"
                />
            </div>
            <div id="div1Id">
                <div id="div2Id">
                    <div id="div3Id" v-bind:class="anirun ? 'div0Ani' : null">
                        <span
                            style="display: block;position: absolute;text-align:center;top:50%;transform:translateY(-50%);text-shadow: 5px 2px 6px #000;"
                            >用餐环境</span
                        >
                    </div>
                </div>
                <div id="div4Id">
                    <div
                        class="animated"
                        id="div5Id"
                        v-bind:class="anirun ? 'div1Ani' : null"
                    ></div>
                </div>
                <div id="div6Id">
                    <div
                        class="animated"
                        id="div7Id"
                        v-bind:class="anirun ? 'div2Ani' : null"
                    ></div>
                </div>
                <div id="div8Id">
                    <div
                        class="animated"
                        id="div9Id"
                        v-bind:class="anirun ? 'div3Ani' : null"
                    ></div>
                </div>
                <div id="div10Id">
                    <div
                        class="animated"
                        id="div11Id"
                        v-bind:class="anirun ? 'div4Ani' : null"
                    ></div>
                </div>
                <div id="div12Id">
                    <div
                        class="animated"
                        id="div13Id"
                        v-bind:class="anirun ? 'div5Ani' : null"
                    ></div>
                </div>
                <div id="div14Id">
                    <div
                        class="animated"
                        id="div15Id"
                        v-bind:class="anirun ? 'div6Ani' : null"
                    ></div>
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
.div0Ani {
    animation: 1400ms linear 600ms 1 normal both running zoomIn;
}
.div1Ani {
    animation: 1700ms linear 600ms 1 normal both running fadeInRight;
}
.div2Ani {
    animation: 1300ms linear 700ms 1 normal both running fadeInUp;
}
.div3Ani {
    animation: 1400ms linear 700ms 1 normal both running fadeInUp;
}
.div4Ani {
    animation: 1400ms linear 900ms 1 normal both running fadeInRight;
}
.div5Ani {
    animation: 1400ms linear 1000ms 1 normal both running fadeInLeft;
}
.div6Ani {
    animation: 1500ms linear 800ms 1 normal both running fadeInLeft;
}
#div0Id {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
}
#div1Id {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    position: absolute;
}
#div2Id {
    position: absolute;
    width: 30%;
    height: 20%;
    top: 32%;
    left: 3%;
    transform-origin: center center;
    opacity: 1;
}
#div3Id {
    width: 100%;
    height: 100%;
    color: rgb(51, 18, 18);
    background: rgba(25, 25, 25, 0);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 1.2;
    font-style: normal;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.49), 0 3px 6px rgba(0, 0, 0, 0.42);
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.7110836rem;
    letter-spacing: 0rem;
    display: block;
}
#div4Id {
    width: 94%;
    height: 29%;
    left: 3%;
    top: 1%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div5Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img13.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div6Id {
    width: 30%;
    height: 20%;
    right: 35%;
    top: 32%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div7Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img14.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div8Id {
    width: 30%;
    height: 20%;
    right: 3%;
    top: 32%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div9Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background: url("../../assets/img17.png") center 0 no-repeat;
    background-size: auto 100%;
    display: block;
}
#div10Id {
    width: 30%;
    height: 20%;
    right: 3%;
    top: 54%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div11Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background: url("../../assets/img15.jpg") center 0 no-repeat;
    background-size: auto 100%;
    display: block;
}
#div12Id {
    width: 30%;
    height: 20%;
    right: 3%;
    top: 76%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div13Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background: url("../../assets/img16.jpg") center 0 no-repeat;
    background-size: auto 100%;
    display: block;
}
#div14Id {
    width: 62%;
    height: 42%;
    right: 35%;
    top: 54%;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
}
#div15Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background: url("../../assets/img18.png") center 0 no-repeat;
    background-size: auto 100%;
    display: block;
}
</style>