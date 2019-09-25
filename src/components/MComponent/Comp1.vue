<template>
    <div>
        <div :class="anirun==true?'afterAni':null">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "comp1",
    data() {
        return {
            anirun: false
        };
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("comp1 runAni");
        },
        
    },
    computed: {
        setClass:function(){
            if(this.anirun){
                console.log("true true");
                return 'afterAni';
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beforeAni {
    width: 100%;
    height: auto;
    transition: width 2s;
}

.afterAni {
    width: 100%;
    height: auto;
    transform: rotateY(360deg);
    transition: transform 2s;
}
</style>
