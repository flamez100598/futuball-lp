<template>
  <div class="flex flex-col w-full justify-center main-banner">
    <div class="nav-bar flex w-full justify-center relative">
      <Header
@goAboutUs="goTo('AboutUs')" @gotoFeature="goTo('features')" @goToRoadMap="goTo('RoadMap')"
        @goToTokenomic="goTo('Tokenomic')" @goToTeam="goTo('team')" />
    </div>
    <div class="flex flex-col w-full relative banner-container">
      <div class="background">
        <!-- <img src="~/assets/images/bg-header.png" class="w-full absolute left-0 desktop center-absolutely img-bg" /> -->
        <!-- <img
          src="~/assets/images/bg-banner-top-mobile.png"
          class="w-full absolute top-0 left-0 mobile"
        />
        <img
          src="~/assets/images/bg-banner-bottom-mobile.png"
          class="w-full absolute bottom-0 left-0 mobile"
        /> -->
      </div>

      <div class="w-full grid grid-cols-11 main-content relative">
        <div class="col-span-5 card-banner">
          <img src="~/assets/images/banner-img-card.png" alt="">
        </div>
        <div class="col-start-6 col-span-5 relative mid">
          <div class="title">
            <h1>BE A</h1>
            <h2>FOOTBALL MANAGER</h2>
          </div>
          <div class="sub-title">
            Create and lead your own football team with NFT players. Set the tactics and take your club from dust to
            glory.
          </div>
          <div class="download-app-desktop">
            <h2>Comming soon!</h2>
            <div class="flex items-flex-start pt-8 img-container">
              <img src="~/assets/icons/pc.png" style="margin: 0 auto" alt="" />
              <img src="~/assets/icons/android.png" style="margin: 0 5px" alt="" />
              <img src="~/assets/icons/ios.png" style="margin: 0 auto" alt="" />
            </div>
          </div>
        </div>
        <div class="col-span-1">
            <ListIcons />
          </div>
      </div>


    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './Banner/Header.vue'
import ListIcons from './Banner/ListIcons.vue'
export default Vue.extend({
  name: 'NuxtBanner',
  components: { Header, ListIcons },
  methods: {
    goTo(key) {
      console.log('object :>> ', key);
      document.getElementById(key).scrollIntoView({ behavior: 'smooth' })
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-bar {
  background: transparent;
  padding-top: 37px;
  position: relative;
  top: 0;
  z-index: 999;

  @media only screen and (max-width: 767px) {
    padding: 0;
  }
}

.download-app-desktop {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: 15px;
  justify-content: flex-start;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    color: #ffffff;
    padding-right: 15px;
  }


  img {
    cursor: pointer;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.main-banner {
  line-height: 1.6;
  background-image: url(~/assets/images/bg-header.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 200px;
  .banner-container {
    position: relative;
    margin: 0 auto;
    top: -90px;
    @media only screen and (max-width: 767px) {
      top: 30px;
      min-height: 375px;
    }
    .card-banner {
      padding-left: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .mid {
      padding-left: 50px;
    }
    .main-content {
      padding: 380px 10px 0 10px;

      @media only screen and (max-width: 767px) {
        position: absolute;
        bottom: -130px;
      }

      .title {
        max-width: 1100px;
        justify-content: center;
        color: #ebeeef;
        font-weight: 700;
        font-size: 64px;
        line-height: 1.1;
        letter-spacing: 0.05em;

        img {
          max-width: 661px;
        }

        h2 {
          color: #16DEF5;
          padding: 15px 0;
          border-bottom: solid;
          width: 85%;
        }

        @media only screen and (max-width: 767px) {
          font-size: 28px;
          max-width: 430px;
        }
      }

      .btn-moblie {
        background: rgba(186, 110, 250, 0.75);
        border-radius: 8px;
        width: 256px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
        margin: 0 auto;
        line-height: 40px;
        left: 0;
        right: 0;
        margin-top: 115px;
      }

      .sub-title {
        padding-top: 25px;
        line-height: 31px;
        text-align: justify;
        font-weight: 400;
        font-size: 24px;
        color: #FFFFFF;
        width: 82%;

        @media only screen and (max-width: 767px) {}
      }

    }

  }
}
</style>