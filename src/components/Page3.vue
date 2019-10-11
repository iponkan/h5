<template>
    <div class="body">
        <div id="div1" v-bind:class="anirun ? 'bounceIn' : null">
            <img src="../assets/chushi.jpeg" class="imgbg" />
        </div>

        <div id="div2">
            <img class="imgStyle" src="../assets/i2.jpeg" v-bind:class="anirun ? 'rotateInDownLeft' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div3">
            <img class="imgStyle" src="../assets/i3.jpeg" v-bind:class="anirun ? 'rotateInDownLeft' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div4">
            <img class="imgStyle" src="../assets/i7.jpeg" v-bind:class="anirun ? 'rotateInDownLeft' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div5">
            <img class="imgStyle" src="../assets/i2.jpeg" v-bind:class="anirun ? 'rotateInDownRight' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div6">
            <img class="imgStyle" src="../assets/i3.jpeg" v-bind:class="anirun ? 'rotateInDownRight' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div7">
            <img class="imgStyle" src="../assets/i7.jpeg" v-bind:class="anirun ? 'rotateInDownRight' : null" style="animation-delay: 1s"/>
        </div>

        <div id="div8">
            <span id="textStyle">美味多多</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "page3",
    data() {
        return {
            anirun: false
        };
    },
    components: {},
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("Page3 runAni");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/main.scss";

.body {
    width: 100%;
    height: 100%;
    text-align:center;
}

#div1 {
    width: 100%;
    height: 100%;
    position: absolute;
}

#div2 {
    width: 30%;
    height: 100px;
    position: absolute;
    top: 40px;
    right: 5%;
}

#div3 {
    width: 30%;
    height: 100px;
    position: absolute;
    top: 180px;
    right: 5%;
}

#div4 {
    width: 30%;
    height: 100px;
    position: absolute;
    top: 320px;
    right: 5%;
}

#div5 {
    width: 30%;
    height: 100px;
    position: absolute;
    bottom: 40px;
    left: 5%;
}

#div6 {
    width: 30%;
    height: 100px;
    position: absolute;
    bottom: 180px;
    left: 5%;
}
#div7 {
    width: 30%;
    height: 100px;
    position: absolute;
    bottom: 320px;
    left: 5%;
}

#div8{
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
}

.imgbg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.imgStyle {
    width: 100%;
    height: 100px;
    background: bisque;
    border-width: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #0000ff;
    object-fit: cover;
}

#textStyle {
    writing-mode: vertical-rl;
    font-size: 50px;
    color: black;
    white-space: pre-wrap;
    border-width: 1px;
    border-color:gainsboro;
    border-style: solid;  
    background: azure;
    letter-spacing:25px;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.48), 0 6px 14px rgba(0, 0, 0, 0.32) ;
    margin-top: 10px;
    padding-top: 10px;
    text-shadow:5px 2px 6px #000;
    
    
}
</style>
