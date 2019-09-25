<template>
    <div class="body">
        <Comp1
            ref="comp1"
            style="transition : transform 2s ; transition-delay: 2s"
        >
            <img src="../assets/i2.jpeg" width="100%" height="100%" />
        </Comp1>
    </div>
</template>

<script>
import Comp1 from "./MComponent/Comp1.vue";


export default {
    name: "page3",
    data() {
        return {
            anirun: false
        };
    },
    components: {
        Comp1
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
