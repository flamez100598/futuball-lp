<template>
    <div class="about-us">
        <div class="grid grid-cols-8 flex justify-center items-center about-us-container relative">
            <div class="title col-start-1 col-span-2">
                <img src="~/assets/images/title-about-us.png" alt="">
            </div>
            <div class="content col-span-4">
                <p class="top">
                    The future goes parallel with massive alternation in humans' lives, except for Football. In many
                    years after,
                    World Cup is still the world's largest sports competition in the world. In Futuball, you are in a
                    role of a professional coach of your football team, you have to use your management skills tocompete
                    in your ways for the victory toward the most prestigious cup
                    and join millions of hearts sobbing with the beat of football, eating, sleeping, cheering with each
                    victory in the World Cup season.
                </p>
                <p class="bottom">
                    With the support of AI technology and advanced blockchain system, Futuball allows you to collect,
                    build
                    and manage a team of the eleven most monstrous and efficient football legends ever to become the
                    best football manager of the future!
                </p>
            </div>
            <div class="img-right col-span-1 absolute">
                <img src="~/assets/images/messi.png" alt="">
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'NuxtAboutUs',
})
</script>
  
<style lang="scss" scoped>
.about-us {
    background-image: url(~/assets/images/bg-aboutUs.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .about-us-container {
        background: rgba(41, 50, 94, 0.75);
        .title {
            img {
                margin: 0 auto;
            }
        }
        .content {
            padding: 93px 0 60px 0px;
            font-weight: 400;
            font-size: 16px;
            color: #FFF9F9;
            z-index: 9;

            .bottom {
                padding-top: 25px;
            }
        }

        .img-right {
            right: 0;
        }
    }
}
</style>