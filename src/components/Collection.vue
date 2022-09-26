<template>
  <div class="relative collection">
    <div class="ball">
      <img src="~assets/images/ball.png" />
    </div>
    <div class="decorate">
      <img src="~assets/images/collection-decorate-2.png" />
    </div>
    <div class="flex justify-center">
      <div class="collection-main grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:grid-cols-4">
        <CollectionItem
          v-for="(collection, i) in collections"
          :key="collection.title"
          :collection="collection"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
const collections = [
  {
    color: ['#4f87d3', '#43e3ff'],
    title: 'Collect the best NFT players',
    content:
      'Open from mystery boxes or spot trade and purchase NFT players on the marketplace to make the best formation for your team. Even high-value NFT can be a huge profit for the team’s owners on the marker.	',
    image: require('~/assets/images/collect-1.png'),
  },
  {
    color: ['#7755ff', '#e4acff'],
    title: 'Manage your line-up',
    content:
      'Your decision is necessary to guide your team to victory. It is on your call to make the line-up for each match you play.	',
    image: require('~/assets/images/collect-2.png'),
  },
  {
    color: ['#de6c53', '#ffa06b'],
    title: 'Strengthen your squad',
    content: `Upgrade your NFT players and gain experience after each match. Search for the world's best talents and fusion them to have unmatched statistics and easily get a win.	`,
    image: require('~/assets/images/collect-3.png'),
  },
  {
    color: ['#5755c8', '#8f9bff'],
    title: 'Compete against others',
    content:
      'Play against friends and other great teams in the tournament. Challenge them to find out who is the best football manager and may the best win!	',
    image: require('~/assets/images/collect-4.png'),
  },
]

export default {
  data() {
    return {
      collections,
    }
  },
}
</script>

<style lang="scss" scoped>
.collection-main {
  max-width: 1292px;
}
.ball {
  position: absolute;
  left: -385px;
  bottom: -360px;
}
.decorate {
  position: absolute;
  top: -150px;
  right: 0;
  /* top: -550px;
  right: -225px; */
}
.collection {
  padding-top: 220px;
  padding-bottom: 48px;
}
</style>
