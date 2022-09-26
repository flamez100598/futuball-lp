<template>
  <div class="flex flex-col featrue relative">
    <div class="absolute bg-decorator">
      <img src="~assets/images/feature-decorate-1.png" />
    </div>
    <div>
      <div class="relative max-w-max">
        <div class="uppercase font-bold text-5xl title pr-5 font-italic">
          feature
        </div>
        <div class="absolute bg-title">
          <img src="~assets/icons/bg-roadmap.svg" />
        </div>
      </div>
      <div class="relative flex justify-between content">
        <div
          class="flex flex-col uppercase text-white font-bold text-xl text-right right-bar"
        >
          <template v-for="(i, index) in data">
            <div
              v-if="selected === index"
              :key="i.name"
              class="relative selected"
            >
              <div class="absolute parallelogram" />
              <div class="absolute shape z-20"></div>
              <span
                class="relative z-30 text-black flex items-center justify-end"
              >
                {{ i.name }}
              </span>
            </div>
            <div
              v-else
              :key="index"
              class="cursor-pointer flex items-center justify-end"
              @click="selected = index"
            >
              {{ i.name }}
            </div>
          </template>
        </div>
        <div class="w-img relative">
          <img class="w-full" src="~/assets/images/layout-feature.png" />
          <img
            class="absolute top-0.5rem left-0.5rem w-[98.3%]"
            :src="data[selected].image"
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
      selected: 0,
      data: [
        {
          name: 'pvp',
          image: require('~/assets/images/feature-1.png'),
        },
        {
          name: 'pve',
          image: require('~/assets/images/feature-2.png'),
        },
        {
          name: 'Marketplace',
          image: require('~/assets/images/feature-3.png'),
        },
        {
          name: 'Staking',
          image: require('~/assets/images/feature-4.png'),
        },
        {
          name: 'Betting',
          image: require('~/assets/images/feature-5.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  background: linear-gradient(180deg, #43e3ff 0%, #e6f1ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1.3;
  z-index: 1;
  position: inherit;
}
.bg-title {
  z-index: 0;
  bottom: 0;
  right: 0;
}
.featrue {
  width: 100%;
  padding: 30px 0 30px calc(30px + 5%);
  background: linear-gradient(180deg, #29325e 0%, #3c649c 100%);
  /* box-shadow: 0px 4px 40px rgba(71, 66, 130, 0.37); */
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
  transform: skew(-5deg);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 4% 100%);
  margin-left: -5%;
  & > div {
    transform: skew(5deg);
  }
  @media only screen and (min-width: 768px) {
    padding: 89px 0 106px calc(130px + 5%);
  }
  @media only screen and (min-width: 1536px) {
    padding: 89px 0 106px calc(130px + 5%);
  }
}

.bg-decorator {
  top: 90px;
  left: -30%;
}

.right-bar {
  width: 25%;
  margin-top: 30px;
  > div {
    width: 100%;
    max-width: 300px;
  }
  > div,
  .selected span,
  .parallelogram {
    height: 40px;
    @media only screen and (min-width: 1280px) {
      height: 60px;
    }
    @media only screen and (min-width: 1536px) {
      height: 75px;
    }
  }
  .shape {
    height: 34px;
    @media only screen and (min-width: 1280px) {
      height: 54px;
    }
    @media only screen and (min-width: 1536px) {
      height: 69px;
    }
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 70px;
  }
  @media only screen and (min-width: 1536px) {
    margin-top: 94px;
  }
}

.selecting {
  top: 0;
  left: 40px;
  width: 600px;
}
.content {
  /* max-width: 80vw; */
}
.parallelogram {
  width: 150%;
  top: 0;
  background: linear-gradient(90deg, #43fff4 -4.49%, #43e3ff 96.68%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transform: skew(-20deg);
  @media only screen and (min-width: 1536px) {
    width: 200%;
  }
}
.shape {
  position: absolute;
  width: 35.5px;
  top: 0;
  background: #ffffff;
  border-radius: 7px;
  transform: skew(-20deg);
  margin: 3px;
}

.parallelogram,
.shape {
  left: 0px;
  @media only screen and (min-width: 1280px) {
    left: 50px;
  }
  @media only screen and (min-width: 1536px) {
    left: 67px;
  }
}

.h-75 {
  height: 75px;
}

.w-img {
  width: 70%;
}
</style>
