<template>
    <div class="body">
        <div>
        <img src="../assets/i2.jpeg" v-bind:style="imgeAni1" />
        </div>
        <div>
        <img src="../assets/i2.jpeg" v-bind:style="imgeAni2" />
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
    },
    computed: {
        imgeAni1: function() {
            if (this.anirun) {
                return {
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    transform: "rotateY(360deg)",
                    position: "left",
                    transition: "transform 2s"
                };
            } else {
                return {
                    width: "100%",
                    height: "auto"
                };
            }
        },
        imgeAni2:function(){
            if (this.anirun) {
                return {
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    transform: "rotateZ(360deg)",
                    position: "left",
                    transition: "transform 2s",
                    "transition-delay":"2s",
                };
            } else {
                return {
                    
                    
                    width: "100%",
                    height: "auto"
                };
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*引入公共样式*/
@import "../style/main.scss";

.body {
    background: #42b983;
}
</style>
