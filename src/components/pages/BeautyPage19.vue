<template>
    <div style="background-color: rgb(255, 255, 255);">
        <div v-bind:class="anirun ? 'showUi' : 'hideUi'" id="div1Id">
            <div id="div2Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div1' : null"
                    id="div3Id"
                >
                    <d-player
                        @play="play"
                        :options="options"
                        class="page1_palyer"
                        ref="player"
                    ></d-player>
                </div>
            </div>

            <div id="div4Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div2' : null"
                    id="div5Id"
                ></div>
            </div>
            <div id="div6Id">
                <div
                    class="animated"
                    v-bind:class="anirun ? 'div3' : null"
                    id="div7Id"
                ></div>
            </div>
            <div id="div8Id">
                <div v-bind:class="anirun ? 'div4' : null" ><span
                            style="display: block;position: absolute;text-align:center;text-shadow: 5px 2px 6px #000;transform-origin: center center;"
                            >网友推荐</span
                        ></div>
            </div>

            <div id="div14Id">
                <div v-bind:class="anirun ? 'div4' : null" id="div15Id"></div>
            </div>
        </div>
    </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
import "../../style/dplayer-style.css";
export default {
    data() {
        return {
            anirun: false,
            preload: "auto",
            options: {
                video: {
                    url:
                        "https://1251413404.vod2.myqcloud.com/vodtransgzp1251413404/7447398155988700674/v.f13477.mp4",
                    pic: ""
                },
                autoplay: false
            },
            player: null
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            // this.player.play();
            console.log("runAni =========== ");
        },
        pauseAni: function() {
            this.anirun = false;
            // this.player.pause();
            console.log("pauseAni =========== ");
        },
        play() {
            console.log("play callback");
        },

        switchHandle() {
            this.player.pause();
        }
    },

    components: {
        "d-player": VueDPlayer
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
    top: 1%;
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
    /* background-image: url("../../assets/img19.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px; */
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
    background: url("../../assets/img26.png") center center no-repeat;    
    background-size: auto 100%;
    
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
    background-image: url("../../assets/img25.png");
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
    text-align: center;
    font-weight: normal;
    text-decoration: none;
    line-height: 1.2;
    font-style: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.7110836rem;
    letter-spacing: 0rem;
    display: block;
    text-align:center;
    transform-origin: center center;
}


#div14Id {
    width: 96%;
    height: 38%;
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
    background: url("../../assets/img27.jpg") 0 center no-repeat;
    background-size: 100% auto;
    display: block;
}
</style>