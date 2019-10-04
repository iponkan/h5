<template>
    <div class="body">
        <SlideImgLeft2Right ref="comp1"></SlideImgLeft2Right>
    </div>
</template>

<script>
import Comp1 from "./MComponent/Comp1.vue";
import SlideImgLeft2Right from "./MComponent/SlideImgLeft2Right.vue";


export default {
    name: "page3",
    data() {
        return {
            anirun: false
        };
    },
    components: {
        Comp1,
        SlideImgLeft2Right
    },
    methods: {
        runAni: function() {
            this.anirun = true;
            console.log("Page3 runAni");
            this.$refs.comp1.runAni();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/main.scss";

.body {
    background: #aabb22;
}
</style>
