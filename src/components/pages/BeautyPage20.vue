<template>
    <div style="background-color: rgb(255, 255, 255); width:100%;height:100%;">
        <div
                style="width:100%;height:100%;display: block;position: absolute;"
                v-bind:class="anirun ? 'showUi' : 'hideUi'"
        >
            <div style="position: absolute;width:100%;height:20%">
                <div
                        style="width:100%;height:100%; position: absolute;display:block;"
                        v-bind:class="anirun ? 'div0Ani' : null"
                >
                    <span
                            style="width:100%;height:100%; position: absolute;color:black;display:block;top:20%;text-shadow:0px 0px 5px #333333;"
                    >欢迎您的到来</span
                    >
                </div>
            </div>

            <div
                    style="width:70%;height:50%;position: absolute; left:15%;top:20%"
            >
                <div>
                    <img
                            style="width:100%;height:100%;position: absolute; display: block;object-fit:cover;"
                            src="../../assets/img28.png"
                            v-bind:class="anirun ? 'div1Ani' : null"
                    />
                </div>
            </div>

            <div style="position: absolute;width:100%;height:20%;bottom:0%">
                <div
                        style="width:100%;height:100%; position: absolute;display:block;"
                        v-bind:class="anirun ? 'div2Ani' : null"
                >
                    <span
                            style="width:100%;height:100%; position: absolute;color:black;display:block;bottom:20%;text-shadow:0px 0px 5px #333333;font-size:18px"
                    >地址：陆家嘴正大广场</span
                    >
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
            runAni: function () {
                this.anirun = true;
                console.log("=========================");
            },
            pauseAni: function () {
                this.anirun = false;
            }
        }
    };
</script>

<style scoped>
    /*引入公共样式*/
    @import "./style/beauty.css";

    .div0Ani {
        animation: 1000ms linear 600ms 1 normal both running fadeInNormal;
    }

    .div1Ani {
        animation: 1000ms linear 1000ms 1 normal both running rotateIn;
    }

    .div2Ani {
        animation: 1500ms linear 1500ms 1 normal both running slideUp;
    }
</style>
