<template>
    <div class="body">
        <div>
            <img
                src="../assets/i3.jpeg"
                v-bind:class="anirun?'rotate_360_y':'common_style'"
            />
        </div>

        <div>
            <img
                src="../assets/i2.jpeg"
                v-bind:class="
                    anirun
                        ? 'slidein_left_2_right_after'
                        : 'slidein_left_2_right_before'
                "
                style="transition-delay: 2s"
            />
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*引入公共样式*/
@import "../style/main.scss";
@import "../style/anis.scss";

.body {
    background: #42b983;
}
</style>
