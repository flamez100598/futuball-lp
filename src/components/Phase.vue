<template>
  <div class="relative bg">
    <div class="absolute z-0">
      <img v-if="phase.blue" src="~assets/icons/rectangle-blue.svg" />
      <img v-else src="~assets/icons/rectangle.svg" />
    </div>
    <div class="absolute z-10 phase-top text-white">
      <div class="relative">
        <img src="~assets/icons/rectangle-title.svg" />
        <div class="absolute top-0 left-0 phase-content flex items-center">
          <img src="~assets/icons/phase.svg" />
          <span class="font-bold">{{ phase.phase }}</span>
        </div>
      </div>
    </div>
    <div class="absolute z-10 pt-14 px-14">
      <div class="font-bold text-lg pb-5">{{ phase.title }}</div>
      <div
        v-for="(item, i) in phase.content"
        :key="i"
        class="flex items-start pb-2"
        :style="{ marginLeft: `-${i * 5}px` }"
      >
        <img v-if="item.checked" src="~assets/icons/checked.svg" />
        <img v-else src="~assets/icons/uncheck.svg" />
        <div class="content pl-4">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phase: Object,
  },
}
</script>

<style lang="scss" scoped>
.bg {
  width: 334px;
  height: 453px;
}
.pt-14 {
  padding-top: 64px;
}

.px-14 {
  padding-left: 63px;
  padding-right: 63px;
}

.content {
  max-width: 186px;
  line-height: 1.3125;
}
.phase-top {
  top: 18px;
  left: 30px;
}
.phase-content {
  padding: 7px 15.5px 12px 8px;
  span {
    padding-left: 6px;
    font-style: italic;
    font-size: 20px;
    line-height: 26px;
  }
}
</style>
