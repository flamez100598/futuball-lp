<template>
  <div class="flex flex-col justify-center items-center icon-list z-20">
    <a v-for="(item, index) in data" :key="index" :href="item.linkedin" target="_blank">
        <img :src="item.icon" alt="" class="img-icon" />
      </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NuxtIcons',
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
.icon-list {
  padding-top: 100px;
  a {
    padding: 12px 0;
  }
}
</style>