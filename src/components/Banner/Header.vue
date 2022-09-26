<template>
  <div class="flex w-full h-full relative justify-between main-header">
    <div class="logo z-10">
      <img src="~/assets/icons/logo.png" />
    </div>
    <div class="main-menu flex items-center z-10 desktop">
      <!-- <div class="flex items-center flag">
        <img src="~/static/icons/america.png" />
      </div> -->

      <button class="contact-us" @click="goAboutUs">About</button>
      <button class="contact-us" @click="gotoFeature">Feature</button>
      <button class="contact-us" @click="goToRoadMap">Roadmap</button>
      <button class="contact-us" >Whitepaper</button>
      <button class="contact-us" >Pitchdeck</button>
      <!-- <button class="btn-menu menu flex items-center justify-center btn-zen"> -->
      <!-- <img src="~/static/icons/union.svg" /> -->
      <!-- Zenmaster -->
      <!-- </button> -->
    </div>
    <div v-if="isOpenMenu" v-click-outside="closeMenu" class="menu-center flex z-10">
      <button class="contact-us" @click="goAboutUs">About</button>
      <button class="contact-us" @click="goToUseExperience">Feature</button>
      <button class="contact-us" @click="goToRoadMap">Roadmap</button>
      <button class="contact-us" >Whitepaper</button>
      <button class="contact-us" >Pitchdeck</button>
    </div>
    <button class="menu flex items-center justify-center mobile icon-moblie" @click="openMenu()">
      <img v-if="!isOpenMenu" src="~/assets/icons/union.png" />
      <img v-if="isOpenMenu" style="width: 32px" src="~/assets/icons/close.png" @click="close" />
    </button>
    <modal :showing="showing" @closeModal="showing = false">
      <div
class="
          content-modal
          w-full
          h-full
          flex flex-col
          text-center
          justify-center
        ">
        <div>
          <h1>Coming soon</h1>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from '@/components/common/Modal.vue'
export default Vue.extend({
  name: 'NuxtHeader',
  components: { Modal },
  data() {
    return {
      showing: false,
      isOpenMenu: false,
    }
  },
  methods: {
    goAboutUs() {
      this.$emit('goAboutUs')
    },
    gotoFeature() {
      this.$emit('gotoFeature')
    },
    goToTokenomic() {
      this.$emit('goToTokenomic')
    },
    goToRoadMap() {
      this.$emit('goToRoadMap')
    },
    goToTeam() {
      this.$emit('goToTeam')
    },
    openMenu() {
      this.isOpenMenu = true
      this.flag = 1
    },
    closeMenu() {
      if (this.flag === 1) {
        this.isOpenMenu = true
        this.flag = 0
      } else if (this.isOpenMenu) {
        this.isOpenMenu = false
      }
    },
    close() {
      this.isOpenMenu = false
    }
  },
})
</script>

<style lang="scss" scoped>
.main-header {
  .menu-center {
    flex-direction: column;
    color: #ffffff;
    font-size: 24px;
    font-weight: bolder;
    padding: 20px;

    button {
      font-weight: bolder;
      padding: 10px;
    }
  }

  background-size: cover;

  .logo {
    max-width: 250px;
    margin-left: 130px;

    img {
      width: 100%;
      max-width: unset;
    }

    @media only screen and (max-width: 767px) {
      margin-left: 10px;
    }
  }

  .flag {
    height: 40px;

    @media only screen and (max-width: 767px) {
      height: 28px;
    }
  }

  .main-menu {
    padding-right: 75px;
    font-size: 14px;
    background: linear-gradient(180deg, #29325E 0%, #3C649C 100%);
    border-radius: 10px;
    clip-path: polygon(0 0,100% 0,100% 100%,100% 100%,5% 100%);

    @media only screen and (max-width: 767px) {
      padding-top: 16px;
      padding-right: 16px;
      font-size: 12px;
    }

    .menu {
      min-width: 93px;
      height: 40px;
      color: #ffffff;
      background: linear-gradient(180deg, #16b9ff 0%, #1537b1 91.2%);
      border-radius: 10px;
      margin-left: 20px;
      font-weight: 600;
      font-size: 18px;

      &:hover {
        background: linear-gradient(180deg, #fd6e4f 0%, #e8a541 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      @media only screen and (max-width: 767px) {
        min-width: 65px;
        height: 28px;
      }

      img {
        padding-right: 9px;

        @media only screen and (max-width: 767px) {
          padding-right: 4px;
        }
      }
    }

    .btn-zen {
      min-width: 143px;
    }

    .contact-us {
      min-width: 114px;
      height: 40px;
      border-radius: 5px;
      color: #ffffff;
      margin-left: 18px;
      font-weight: 600;
      font-size: 18px;

      &:hover {
        color: #43E3FF;
      }

      @media only screen and (max-width: 767px) {
        min-width: 81px;
        height: 28px;
      }
    }
  }
}

.content-modal {
  h1 {
    font-size: 50px;
    color: #ffffff;
  }
}

.icon-moblie {
  @media only screen and (max-width: 767px) {
    margin-right: 10px;
    height: 40px;
  }
}
</style>