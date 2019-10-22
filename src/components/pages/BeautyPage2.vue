<template>
    <div
        style="display: block;opacity: 1;"
    >
        <div
            style="position: absolute; width: 100.0%; height: 100.0%;overflow: hidden; background-color: rgb(255, 255, 255);"
        >
            <img
                src="http://img1.maka.im/user/4815651/images/8449b64fcca87024c1cc985907369dc5.jpg@80Q.src"
                style="position: absolute; width: 104.99991796881409%; top: 0.0%; left: -2.5000058593704226%; -webkit-user-drag: none; user-select: none; opacity: 1;"
            />
        </div>
        <div
            style="width: 97.03117419439516%; height: 97.03124999999999%; left: 0.0%; top: 1.484375%; position: absolute;"
        >
            <div
                style="width: 64.50088710868195%; height: 22.87202380952381%; left: 25.70412054365583%; top: 68.77604166666667%; position: absolute; opacity: 1;cursor: pointer;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'Ani1' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/4815651/images/d0c50625780c8da2817e9cdec145ec9d.jpg@0-214-440-245a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/d0c50625780c8da2817e9cdec145ec9d.jpg@0-214-440-245a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 64.50088710868195%; height: 22.87202380952381%; left: 25.620448734024425%; top: 40.73035714285715%; position: absolute; opacity: 1; transform: rotate(0deg); cursor: pointer;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'Ani2' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/4815651/images/898c777e6bb757d812eb0aeb1053eed7.jpg@0-36-1100-614a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/898c777e6bb757d812eb0aeb1053eed7.jpg@0-36-1100-614a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 64.50088710868195%; height: 22.87202380952381%; left: 24.711777568923775%; top: 10.939032738095237%; position: absolute; opacity: 1; transform: rotate(0deg); cursor: pointer;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'Ani3' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@0-36-1100-613a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block;'
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/b6625667c6f41cb86b977cc1d9d58f1f.jpg@0-36-1100-613a_80Q.src"
                        style="opacity: 0;"
                    />
                </div>
            </div>
            <div
                style="width: 97.03117419439516%; height: 92.41071428571429%; left: 0.0%; top: 3.040625%; position: absolute; opacity: 1; transform: rotate(0deg); cursor: pointer;"
            >
                <div
                    class="animated"
                    v-bind:class="anirun ? 'Ani4' : null"
                    style='position: absolute; width: 100%; height: 100%; overflow: hidden; border-radius: 0px; box-shadow: black 0px 0px 0px; background-image: url("http://img1.maka.im/user/4815651/images/ea61ca85aa6e6b099918de5ec74b8efe.png@0-0-0-0a_80Q.src"); background-repeat: no-repeat; background-size: 100% 100%; background-position: 0px 0px; display: block; '
                >
                    <img
                        src="http://img1.maka.im/user/4815651/images/ea61ca85aa6e6b099918de5ec74b8efe.png@0-0-0-0a_80Q.src"
                        style="opacity: 0;"
                    />
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
        pauseAni:function(){
            this.anirun = false;
            console.log("pauseAni =========== ");
        }
    }
};
</script>

<style scoped>
/*引入公共样式*/
@import "./style/beauty.css";
.Ani1{
    animation: 1600ms linear 700ms 1 normal both running fadeInLeft;
}
.Ani2{
    animation: 1600ms linear 800ms 1 normal both running fadeInRight;
}
.Ani3{
    animation: 1600ms linear 700ms 1 normal both running fadeInLeft;
}
.Ani4{
    animation: 1000ms linear 600ms 1 normal both running fadeInNormal;
}
</style>