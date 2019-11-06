<template>
    <div style="background-color: rgb(255, 255, 255);">
        <div v-bind:class="anirun ? 'showUi' : 'hideUi'" id="div1Id">
            <div id="div2Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div1' : null"
                    id="div3Id"
                >
                </div>
            </div>
            <div id="div4Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div2' : null"
                    id="div5Id"
                >
                </div>
            </div>
            <div id="div6Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div3' : null"
                    id="div7Id"
                >
                </div>
            </div>
            <div id="div8Id">
                <div
                    v-bind:class="anirun ? 'div4' : null"
                    id="div9Id"
                >
                </div>
            </div>

            <div id="div14Id">
                <div
                    v-bind:class="anirun ? 'div4' : null"
                    id="div15Id"
                >
                </div>
            </div>


            <div id="div10Id">
                <div
                    v-bind:class="anirun ? 'div5' : null"
                    id="div11Id"
                >
                    <div>
                        <p>推荐美食</p>
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


#div1Id {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    position: absolute;
}
#div2Id {
    width: 100%;
    height: 38.21041666666667%;
    left: 0%;
    top: 0%;
    position: absolute;
    opacity: 1;
}
#div3Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img19.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div4Id {
    width: 30%;
    height: 20%;
    left: 2.5%;
    top: 40%;
    position: absolute;
    opacity: 1;
}
#div5Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img20.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div6Id {
    width: 30%;
    height: 20%;
    left: 67.5%;
    top: 40%;
    position: absolute;
    opacity: 1;
}
#div7Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img21.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div8Id {
    width: 30%;
    height: 20%;
    left: 35%;
    top: 40%;
    position: absolute;
    opacity: 1;
}
#div9Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-image: url("../../assets/img22.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    display: block;
}
#div10Id {
    position: absolute;
    width: 87.17641626842479%;
    height: 5.256770833333333%;
    top: 60%;
    left: 4.984003918746939%;
    transform-origin: center center;
    opacity: 1;
}
#div11Id {
    width: 100%;
    height: 100%;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    line-height: 1;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.5565002rem;
    text-shadow : 0 3px 10px rgba(0, 0, 0, 0.48), 0 7px 15px rgba(0, 0, 0, 0.30);
    letter-spacing: 0rem;
    display: block;
}
#div12Id {
    position: absolute;
    width: 88.08602493279302%;
    height: 7.593110119047619%;
    top: 80.89508928571428%;
    left: 5.086917900845391%;
    transform-origin: center center;
    opacity: 1;
}
#div13Id {
    width: 100%;
    height: 100%;
    color: rgb(105, 105, 105);
    background: rgba(25, 25, 25, 0);
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 1;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.18550007rem;
    letter-spacing: 0rem;
    display: block;
}

#div14Id {
    width: 96%;
    height: 20%;
    left: 2%;
    bottom: 1%;
    position: absolute;
    opacity: 1;
}
#div15Id {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background: url("../../assets/img24.jpg") 0 center no-repeat;
    background-size: 100% auto;
    display: block;
}
</style>