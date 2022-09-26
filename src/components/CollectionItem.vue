<template>
  <div class="text-white">
    <div
      class="rectangle flex items-center justify-center"
      :style="{
        background: `linear-gradient(180deg, ${collection.color[0]} 0%, ${collection.color[1]} 100%)`,
      }"
    >
      <img :src="collection.image" />
    </div>

    <!-- <BgComponent class="color-3" /> -->
    <div class="text relative">
      <div class="title font-bold text-xl">
        {{ collection.title }}
      </div>
      <div>
        {{ collection.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    collection: Object,
    index: Number,
  },
}
</script>

<style lang="scss" scoped>
.text {
  margin-left: 65px;
  max-width: 258px;
  margin-top: -45px;
  .title {
    max-width: 254px;
    min-height: 68px;
  }
}
.rectangle {
  width: 235px;
  height: 280px;
  background: linear-gradient(180deg, #4f87d3 0%, #43e3ff 100%);
  border-radius: 16px;
  transform: skew(-7deg);
  img {
    margin-top: -20px;
    transform: skew(7deg);
  }
}
</style>
