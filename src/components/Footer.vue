<template>
  <div class="flex footer relative grid grid-cols-8">
    <div class="flex flex-col justify-start items-center contact-us col-span-4">
      <div>
        <h3>BECOME our MANAGER!
        </h3>
        <p>Stay up to date with news, must-attend events, airdrops, and more happening in Futuball.</p>
      </div>
      <div class="contact">
        <img src="~/assets/images/email-contact.png" alt="">
      </div>
    </div>
    <div class="flex justify-start items-start w-full icon-container col-span-2">
      <a v-for="(item, index) in data" :key="index" :href="item.linkedin" target="_blank">
        <img :src="item.icon" alt="" class="img-icon" />
      </a>
    </div>
    <div class="ball col-span-2">
      <img src="~assets/images/ball.png" />
    </div>
    <!-- 
    <div class="term-codition">
      <span class="policy">Privacy Policy</span>
      <span>Terms & Conditions</span>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NuxtFooter',
  data() {
    return {
      data: [
        {
          icon: require('~/assets/icons/icon_telegram.png'),
          linkedin: '',
        },
        {
          icon: require('~/assets/icons/icon_facebook.png'),
          linkedin: '',
        },
        {
          icon: require('~/assets/icons/icon_twitter.png'),
          linkedin: '',
        },
        {
          icon: require('~/assets/icons/icon_discord.png'),
          linkedin: '',
        },
        {
          icon: require('~/assets/icons/icon_instagram.png'),
          linkedin:
            '',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.footer {
  background: #2A3360;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  padding: 20px 2rem 20px 2rem;
  overflow: hidden;
  max-height: 250px;
  padding-top: 50px;
  .policy {
    padding-right: 32px;
  }

  .img-icon {
    padding: 15px;

    @media only screen and (max-width: 767px) {
      padding: 5px;
    }
  }

  .contact-us {
    font-weight: 600;
    font-size: 30px;
    text-align: right;
    
    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      font-style: italic;
      text-transform: uppercase;

      color: #FFFFFF;
    }

    p {
      text-transform: lowercase;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
    .contact {
      padding-top: 40px;
      padding-left: 60px;
    }
  }

  .icon-container {
    padding: 50px 0;

    img {
      max-width: 85px;
    }

    @media only screen and (max-width: 767px) {
      padding: 20px 0;

      img {
        max-width: 50px;
      }
    }
  }

  .ball {
    position: relative;
    top: -40px;
    left: 190px;
  }
}
</style>