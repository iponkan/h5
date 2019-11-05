<template>
    <div style="background-color: rgb(255, 255, 255);">
        <div v-bind:class="anirun ? 'showUi' : 'hideUi'" id="div0Id">
            <div class="page-bg-1" id="div1Id"></div>
            <div class="maka-eleCanvas maka-eleCanvas-1" id="div2Id">
                <div id="div3Id">
                    <div
                        id="div4Id"
                        v-bind:class="anirun ? 'div0Ani' : null"
                    ></div>
                </div>
                <div id="div5Id">
                    <div
                        id="div6Id"
                        v-bind:class="anirun ? 'div1Ani' : null"
                        class="animated"
                    ></div>
                </div>

                <div id="div9Id">
                    <div
                        id="div10Id"
                        v-bind:class="anirun ? 'div3Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div11Id">
                    <div
                        id="div12Id"
                        v-bind:class="anirun ? 'div4Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div13Id">
                    <div
                        id="div14Id"
                        v-bind:class="anirun ? 'div5Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div15Id">
                    <div
                        id="div16Id"
                        v-bind:class="anirun ? 'div6Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div17Id">
                    <div
                        id="div18Id"
                        v-bind:class="anirun ? 'div7Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div19Id">
                    <div
                        id="div20Id"
                        v-bind:class="anirun ? 'div8Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div21Id">
                    <div
                        id="div22Id"
                        v-bind:class="anirun ? 'div9Ani' : null"
                        class="animated"
                    ></div>
                </div>
                <div id="div23Id">
                    <div
                        id="div24Id"
                        v-bind:class="anirun ? 'div10Ani' : null"
                        class="animated"
                    >
                        <div>关于我们</div>
                    </div>
                </div>
                <div id="div25Id">
                    <div
                        id="div26Id"
                        v-bind:class="anirun ? 'div11Ani' : null"
                        class="animated"
                    >
                        <div></div>
                    </div>
                </div>
                <div id="div27Id">
                    <div
                        id="div28Id"
                        v-bind:class="anirun ? 'div12Ani' : null"
                        class="animated"
                    >
                        <div>
                            桂满陇餐饮管理有限公司是中餐行业内的知名连锁企业，本着“恪守诚信，争创品牌”的企业宗旨，以将桂满陇打造成为全中国最受欢迎的中餐品牌为使命，更致力于为顾客打造有文化品位、生活品位、健康品位的餐饮名店，注重为顾客创造舒适的就餐环境和浓郁的文化氛围。旗下品牌桂满陇产品不断推陈出新，风格多样，在市场上独具优势，经过多年的积累和成功的运营管理，口味和服务受到广大顾客的一致青睐。
                        </div>
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

.class15046004983980 {
    fill: #ffffff;
}

.div0Ani {
    animation: 1000ms linear 600ms 1 normal both running fadeInNormal;
}
.div1Ani {
    animation: 1000ms linear 600ms 1 normal both running fadeInRight;
}
.div2Ani {
    animation: 1000ms linear 600ms 1 normal both running rotateIn;
}
.div3Ani {
    animation: 1000ms linear 1000ms 1 normal both running slideUp;
}
.div4Ani {
    animation: 1500ms linear 4000ms 1 normal both running slideRight;
}
.div5Ani {
    animation: 1500ms linear 4000ms 1 normal both running slideLeft;
}
.div6Ani {
    animation: 1000ms linear 1000ms 1 normal both running slideDown;
}
.div7Ani {
    animation: 1000ms linear 1000ms 1 normal both running slideDown;
}
.div8Ani {
    animation: 1000ms linear 1000ms 1 normal both running rotateIn;
}
.div9Ani {
    animation: 1000ms linear 2000ms 1 normal both running flipInY;
}
.div10Ani {
    animation: 1000ms linear 2000ms 1 normal both running zoomIn;
}
.div11Ani {
    animation: 1000ms linear 2000ms 1 normal both running flipInY;
}
.div12Ani {
    animation: 1000ms linear 3000ms 1 normal both running rotateIn;
}

#div0Id {
    z-index: 998;
    display: block;
}
#div1Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
}
#div2Id {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    position: absolute;
}
#div3Id {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div4Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div5Id {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div6Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("../../assets/img9.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}

#div9Id {
    width: 100%;
    height: 7.738087569971628%;
    left: -0.15625%;
    top: 93.65079365079364%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div10Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("http://img1.maka.im/user/4985608/images/a2672d78b646fb168fa2704db21996fa.png@0-0-640-78a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div11Id {
    width: 53.90628019323671%;
    height: 22.81742197684227%;
    left: 9.843743961352658%;
    top: 66.46821562763591%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div12Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("../../assets/img10.gif");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div13Id {
    width: 23.437487922705312%;
    height: 22.81742197684227%;
    left: 66.09371980676329%;
    top: 66.46821562763591%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div14Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("../../assets/img11.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div15Id {
    width: 42.03115942028985%;
    height: 17.361091940802087%;
    left: 68.28115942028987%;
    top: -6.349206349206349%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div16Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("../../assets/img8.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div17Id {
    width: 33.59371980676328%;
    height: 22.61897093781152%;
    left: -3.906256038647343%;
    top: -3.6706387546967263%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div18Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("http://img1.maka.im/user/4985608/images/488a43fe777b0540c4eda959ab290266.png@0-0-215-228a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div19Id {
    width: 9.218743961352656%;
    height: 6.646821562763592%;
    left: 20.468743961352658%;
    top: 17.16264090177134%;
    position: absolute;
    opacity: 1;
    cursor: pointer;
}
#div20Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    background-image: url("http://img1.maka.im/user/4985608/images/6e778fd777b12dfbc7d69d8e3eaacd7d.png@0-0-59-67a_80Q.src");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div21Id {
    position: absolute;
    width: 76.25%;
    height: 9.821424737366767%;
    top: 13.988099072157045%;
    left: 12.5%;
}
#div22Id {
    position: absolute;
    width: 76.25%;
    height: 9.821424737366767%;
    display: block;
}
#div23Id {
    position: absolute;
    width: 100%;
    height: auto;
    top: 16.170692431562%;
    left: 0.7812512077294685%;
    transform-origin: center center;
    opacity: 1;
}
#div24Id {
    font-family: makafontmakaimmakafont4985608TIXD781D01504600548304-m7kx7lttf;
    width: 100%;
    height: auto;
    color: rgb(6, 55, 97);
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    line-height: 1;
    border-style: none;
    border-color: rgb(0, 0, 0);
    border-width: 0%;
    font-style: normal;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.49466684rem;
    letter-spacing: 0rem;
    display: block;
}
#div25Id {
    position: absolute;
    width: 100%;
    height: auto;
    top: 12.202377118319149%;
    left: 0.7812512077294685%;
    transform-origin: center center;
    opacity: 1;
}
#div26Id {
    width: 100%;
    height: auto;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 1;
    border-style: none;
    border-color: rgb(0, 0, 0);
    border-width: 0%;
    font-style: normal;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.23187509rem;
    letter-spacing: 0rem;
    display: block;
}
#div27Id {
    position: absolute;
    width: 78.28115942028985%;
    height: auto;
    top: 25%;
    left: 10.625%;
    transform-origin: center center;
    opacity: 1;
}
#div28Id {
    font-family: makafontmakaimmakafont4985608TIXD781D01504600709777-m98wqittf;
    width: 100%;
    height: auto;
    color: rgb(255, 255, 255);
    text-align: left;
    font-weight: normal;
    text-decoration: none;
    line-height: 1.5;
    border-style: none;
    border-color: rgb(0, 0, 0);
    border-width: 0%;
    font-style: normal;
    border-radius: 0px;
    box-shadow: black 0px 0px 0px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.24733342rem;
    letter-spacing: 0rem;
    display: block;
}
</style>