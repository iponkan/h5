<template>
    <div class="body" style="background: #aabb22">
        <img src="../assets/i3.jpeg" alt="food" v-bind:style="imgeAni1">
    </div>
</template>

<script>
    export default {
        name: 'page3',
        data() {
        return {
            anirun: false
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("Page3 runAni");
        }
    },
    computed: {
        imgeAni1: function() {
            if (this.anirun) {
                return {
                    "max-height": "100%",
                    "max-width": "100%",

                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    margin: "auto",

                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    transform: "rotateX(360deg)",
                    position: "left",
                    transition: "transform 2s"
                };
            } else {
                return {
                    "max-height": "100%",
                    "max-width": "100%",

                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    
                    width: "100%",
                    height: "auto"
                };
            }
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    @import '../style/main.scss';

    .body {
        background: #aabb22;
    }
</style>
