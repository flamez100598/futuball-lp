<template>
  <div class="flex flex-col relative roadmap">
    <div class="relative z-20">
      <div class="relative max-w-max title-container">
        <div class="uppercase font-bold text-5xl title pr-5 font-italic">
          roadmap
        </div>
        <div class="absolute bg-title">
          <img src="~assets/icons/bg-roadmap.svg" />
        </div>
      </div>
      <div class="pt-21 flex justify-center">
        <img src="~assets/icons/globe.svg" />
      </div>
      <div class="pt-12 flex justify-center">
        <div class="phase grid grid-cols-1 lg:grid-cols-3">
          <Phase v-for="phase in phases" :key="phase.title" :phase="phase" />
        </div>
      </div>
    </div>
    <div class="absolute bg-futuball z-10">
      <img src="~assets/images/futuball.png" />
    </div>

    <div class="absolute bg-container z-10" />
  </div>
</template>

<script>
const phases = [
  {
    phase: 'Phase 1',
    title: 'Q2/2022',
    content: [
      {
        checked: true,
        description: 'Introduce and develop the basic concept of Futuball',
      },
      {
        checked: true,
        description:
          'Start designing and building fundamental elements to the game',
      },
      {
        checked: true,
        description: 'Deploy ingame interface',
      },
    ],
  },
  {
    blue: true,
    phase: 'Phase 2',
    title: 'Q3/2022',
    content: [
      {
        checked: true,
        description: 'Massive build and spread on social media',
      },
      {
        checked: false,
        description: 'Release official documents and social channels',
      },
      {
        checked: false,
        description: 'Start Private Round',
      },
      {
        checked: false,
        description: 'Introduce marketplace and NFT minting',
      },
      {
        checked: false,
        description: ' Listing and Public Offering Round ',
      },
      {
        checked: false,
        description: 'Mainnet with PvE mode ',
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: '10/2022',
    content: [
      {
        checked: false,
        description: 'Release new features',
      },
      {
        checked: false,
        description: 'PvP',
      },
      {
        checked: false,
        description: 'Staking NFT',
      },
      {
        checked: false,
        description: 'Real-time football betting',
      },
      {
        checked: false,
        description: ' Upgrade ingame interface',
      },
    ],
  },
]
export default {
  data() {
    return {
      phases,
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
  /* width: 8.75rem;
  height: 1.625rem;
  background: #68a3f4;
  border-radius: 0.375rem; */
  z-index: 0;
  bottom: 0;
  right: 0;
}
.roadmap {
  padding: 122px 0 148px;
}
.title-container {
  padding-left: 130px;
}
.pt-21 {
  padding-top: 5.25rem;
}
.phase {
  column-gap: 27px;
  max-width: 1083px;
}
.font-italic {
  font-style: italic;
}

.bg-container {
  background: linear-gradient(180deg, #29325e 26.16%, #3c649c 100%);
  bottom: 0;
  right: 0;
  width: 100%;
  height: 409px;
  clip-path: polygon(85% 50%, 100% 0%, 100% 100%, 0 100%, 10% 50%);
}

.bg-futuball {
  bottom: 253px;
  left: -328px;
}
</style>
