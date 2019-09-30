<template>
    <div>
        <section class="cr-container">
            <input
                id="select-img-1"
                name="radio-set-1"
                type="radio"
                class="cr-selector-img-1"
                value="1"
                v-model="picked"
                style="display:none"
            />
            <!-- <label for="select-img-1" class="cr-label-img-1">one</label> -->

            <input
                id="select-img-2"
                name="radio-set-1"
                type="radio"
                class="cr-selector-img-2"
                value="2"
                v-model="picked"
                style="display:none"
            />
            <!-- <label for="select-img-2" class="cr-label-img-2" hidden>two</label> -->

            <input
                id="select-img-3"
                name="radio-set-1"
                type="radio"
                class="cr-selector-img-3"
                value="3"
                v-model="picked"
                style="display:none"
            />
            <!-- <label for="select-img-3" class="cr-label-img-3">3</label> -->

            <input
                id="select-img-4"
                name="radio-set-1"
                type="radio"
                class="cr-selector-img-4"
                value="4"
                v-model="picked"
                style="display:none"
            />
            <!-- <label for="select-img-4" class="cr-label-img-4">4</label> -->

            <!-- style="display:none" -->

            <div class="clr"></div>
            <div class="cr-bgimg">
                <div>
                    <span>Slice 1 - Image 1</span>
                    <span>Slice 1 - Image 2</span>
                    <span>Slice 1 - Image 3</span>
                    <span>Slice 1 - Image 4</span>
                </div>
                <div>
                    <span>Slice 2 - Image 1</span>
                    <span>Slice 2 - Image 2</span>
                    <span>Slice 2 - Image 3</span>
                    <span>Slice 2 - Image 4</span>
                </div>
                <div>
                    <span>Slice 3 - Image 1</span>
                    <span>Slice 3 - Image 2</span>
                    <span>Slice 3 - Image 3</span>
                    <span>Slice 3 - Image 4</span>
                </div>
                <div>
                    <span>Slice 4 - Image 1</span>
                    <span>Slice 4 - Image 2</span>
                    <span>Slice 4 - Image 3</span>
                    <span>Slice 4 - Image 4</span>
                </div>
            </div>
            <div class="cr-titles">
                <h3>
                    <span>Serendipity</span
                    ><span>What you've been dreaming of</span>
                </h3>
                <h3><span>Adventure</span><span>Where the fun begins</span></h3>
                <h3>
                    <span>Nature</span><span>Unforgettable eperiences</span>
                </h3>
                <h3>
                    <span>Serenity</span
                    ><span>When silence touches nature</span>
                </h3>
            </div>
        </section>
    </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
    name: "comp1",
    data() {
        return {
            anirun: false,
            picked: "1"
        };
    },
    methods: {
        runAni: function() {
            console.log("SlideImgLeft2Right.vue runAni");
            setTimeout(()=>{
                this.pick('2');
            }, 2000);

            setTimeout(()=>{
                this.pick('3');
            }, 4000);

            setTimeout(()=>{
                this.pick('4');
            }, 6000);

        
        },
        pick: function(num) {
            this.picked = num;
            console.log("SlideImgLeft2Right.vue " + num);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "../../style/main.scss";

.cr-container {
    width: calc(var(--screenWidth));
    height: calc(var(--screenHeight));
    position: relative;
    margin: 0 auto;
    border: 20px solid #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.cr-container label {
    font-style: italic;
    width: calc(var(--screenWidth) * 150 / 600);
    height: calc(var(--screenWidth) * 30 / 400);
    cursor: pointer;
    color: #fff;
    line-height: 32px;
    font-size: 24px;
    float: left;
    position: relative;
    margin-top: 350px;
    z-index: 1000;
}
.cr-container label:before {
    content: "";
    width: 34px;
    height: 34px;
    background: rgba(130, 195, 217, 0.9);
    position: absolute;
    left: 50%;
    margin-left: -17px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.3);
    z-index: -1;
}
.cr-container label:after {
    width: 1px;
    height: 400px;
    content: "";
    background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0%, rgba(255, 255, 255, 0)),
        color-stop(100%, rgba(255, 255, 255, 1))
    );
    background: -webkit-linear-gradient(
        top,
        rgba(8, 5, 5, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: -o-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: -ms-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
    position: absolute;
    bottom: -20px;
    right: 0px;
}
.cr-container label.cr-label-img-4:after {
    width: 0px;
}
.cr-container input.cr-selector-img-1:checked ~ label.cr-label-img-1,
.cr-container input.cr-selector-img-2:checked ~ label.cr-label-img-2,
.cr-container input.cr-selector-img-3:checked ~ label.cr-label-img-3,
.cr-container input.cr-selector-img-4:checked ~ label.cr-label-img-4 {
    color: #68abc2;
}
.cr-container input.cr-selector-img-1:checked ~ label.cr-label-img-1:before,
.cr-container input.cr-selector-img-2:checked ~ label.cr-label-img-2:before,
.cr-container input.cr-selector-img-3:checked ~ label.cr-label-img-3:before,
.cr-container input.cr-selector-img-4:checked ~ label.cr-label-img-4:before {
    background: #fff;
    box-shadow: 0px 0px 0px 4px rgba(104, 171, 194, 0.6);
}
.cr-container input {
    display: none;
}
/* 
 */

.cr-bgimg {
    width: calc(var(--screenWidth));
    height: calc(var(--screenHeight));
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
}
.cr-bgimg {
    background-repeat: no-repeat;
    background-position: 0 0;
}
.cr-bgimg div {
    width: 25%;
    height: 100%;
    position: relative;
    float: left;
    overflow: hidden;
    background-repeat: no-repeat;
}
.cr-bgimg div span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: calc(var(--screenWidth) * -0.25);
    z-index: 2;
    text-indent: calc(var(--screenWidth) * -15);
}
.cr-container input.cr-selector-img-1:checked ~ .cr-bgimg,
.cr-bgimg div span:nth-child(1) {
    background-image: url(../../assets/i1.jpeg);
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.cr-container input.cr-selector-img-2:checked ~ .cr-bgimg,
.cr-bgimg div span:nth-child(2) {
    background-image: url(../../assets/i2.jpeg);
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.cr-container input.cr-selector-img-3:checked ~ .cr-bgimg,
.cr-bgimg div span:nth-child(3) {
    background-image: url(../../assets/i3.jpeg);
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.cr-container input.cr-selector-img-4:checked ~ .cr-bgimg,
.cr-bgimg div span:nth-child(4) {
    background-image: url(../../assets/i7.jpeg);
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.cr-bgimg div:nth-child(1) span {
    background-position: 0px 0px;
}
.cr-bgimg div:nth-child(2) span {
    background-position: calc(var(--screenWidth) * -0.25) 0px;
}
.cr-bgimg div:nth-child(3) span {
    background-position: calc(var(--screenWidth) * -0.5) 0px;
}
.cr-bgimg div:nth-child(4) span {
    background-position: calc(var(--screenWidth) * -0.75) 0px;
}

.cr-container input:checked ~ .cr-bgimg div span {
    -webkit-animation: slideOut 0.6s ease-in-out;
    -moz-animation: slideOut 0.6s ease-in-out;
    -o-animation: slideOut 0.6s ease-in-out;
    -ms-animation: slideOut 0.6s ease-in-out;
    animation: slideOut 0.6s ease-in-out;
}
@-webkit-keyframes slideOut {
    0% {
        left: 0px;
    }
    100% {
        left: calc(var(--screenWidth) * 0.25);
    }
}
@-moz-keyframes slideOut {
    0% {
        left: 0px;
    }
    100% {
        left: calc(var(--screenWidth) * 0.25);
    }
}
@-o-keyframes slideOut {
    0% {
        left: 0px;
    }
    100% {
        left: calc(var(--screenWidth) * 0.25);
    }
}
@-ms-keyframes slideOut {
    0% {
        left: 0px;
    }
    100% {
        left: calc(var(--screenWidth) * 0.25);
    }
}
@keyframes slideOut {
    0% {
        left: 0px;
    }
    100% {
        left: calc(var(--screenWidth) * 0.25);
    }
}
.cr-container input.cr-selector-img-1:checked ~ .cr-bgimg div span:nth-child(1),
.cr-container input.cr-selector-img-2:checked ~ .cr-bgimg div span:nth-child(2),
.cr-container input.cr-selector-img-3:checked ~ .cr-bgimg div span:nth-child(3),
.cr-container
    input.cr-selector-img-4:checked
    ~ .cr-bgimg
    div
    span:nth-child(4) {
    -webkit-transition: left 0.6s ease-in-out;
    -moz-transition: left 0.6s ease-in-out;
    -o-transition: left 0.6s ease-in-out;
    -ms-transition: left 0.6s ease-in-out;
    transition: left 0.6s ease-in-out;
    -webkit-animation: none;
    -moz-animation: none;
    -o-animation: none;
    -ms-animation: none;
    animation: none;
    left: 0px;
    z-index: 10;
}
.cr-titles h3 {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    z-index: 10000;
    opacity: 0;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-transition: opacity 0.8s ease-in-out;
    -moz-transition: opacity 0.8s ease-in-out;
    -o-transition: opacity 0.8s ease-in-out;
    -ms-transition: opacity 0.8s ease-in-out;
    transition: opacity 0.8s ease-in-out;
}
.cr-titles h3 span:nth-child(1) {
    font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
    font-size: 70px;
    display: block;
    letter-spacing: 7px;
}
.cr-titles h3 span:nth-child(2) {
    letter-spacing: 0px;
    display: block;
    background: rgba(104, 171, 194, 0.9);
    font-size: 14px;
    padding: 10px;
    font-style: italic;
    font-family: Cambria, Palatino, "Palatino Linotype", "Palatino LT STD",
        Georgia, serif;
}
.cr-container input.cr-selector-img-1:checked ~ .cr-titles h3:nth-child(1),
.cr-container input.cr-selector-img-2:checked ~ .cr-titles h3:nth-child(2),
.cr-container input.cr-selector-img-3:checked ~ .cr-titles h3:nth-child(3),
.cr-container input.cr-selector-img-4:checked ~ .cr-titles h3:nth-child(4) {
    opacity: 1;
}
/* Media Query: Let's show the inputs on mobile sized browsers because they probably don't support the label trick: */
@media screen and (max-width: 768px) {
    .cr-container input {
        display: inline;
        width: 24%;
        margin-top: 350px;
        z-index: 1000;
        position: relative;
    }
    .cr-container label {
        display: none;
    }
}

/* CSS reset */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
    margin: 0;
    padding: 0;
}
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
fieldset,
img {
    border: 0;
}
address,
caption,
cite,
code,
dfn,
th,
var {
    font-style: normal;
    font-weight: normal;
}
ol,
ul {
    list-style: none;
}
caption,
th {
    text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: normal;
}
q:before,
q:after {
    content: "";
}
abbr,
acronym {
    border: 0;
}
section,
header {
    display: block;
}
/* General Demo Style */

a {
    color: #333;
    text-decoration: none;
}
.container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}
.clr {
    clear: both;
}
.container > header {
    padding: 20px 30px 10px 30px;
    margin: 0px 20px 10px 20px;
    position: relative;
    display: block;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
}
.container > header h1 {
    font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
    font-size: 35px;
    line-height: 35px;
    position: relative;
    font-weight: 400;
    color: rgba(26, 89, 120, 0.9);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0px 0px 5px 0px;
}
.container > header h1 span {
    color: #7cbcd6;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8);
}
.container > header h2 {
    font-size: 16px;
    font-style: italic;
    color: #2d6277;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8);
}
/* Header Style */
.codrops-top {
    line-height: 24px;
    font-size: 11px;
    background: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    z-index: 9999;
    position: relative;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.2);
}
.codrops-top a {
    padding: 0px 10px;
    letter-spacing: 1px;
    color: #333;
    text-shadow: 0px 1px 1px #fff;
    display: block;
    float: left;
}
.codrops-top a:hover {
    background: #fff;
}
.codrops-top span.right {
    float: right;
}
.codrops-top span.right a {
    float: left;
    display: block;
}

p.codrops-demos {
    text-align: center;
    display: block;
    padding: 14px;
}
p.codrops-demos a,
p.codrops-demos a.current-demo,
p.codrops-demos a.current-demo:hover {
    display: inline-block;
    font-size: 11px;
    font-style: italic;
    width: 60px;
    height: 60px;
    margin: 0px 3px;
    line-height: 60px;
    border-radius: 50%;
    font-weight: 800;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05) inset;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    background: rgba(104, 171, 194, 0.5);
}
p.codrops-demos a:hover {
    background: #4fa2c4;
}
p.codrops-demos a.current-demo,
p.codrops-demos a.current-demo:hover {
    color: rgba(104, 171, 194, 1);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
