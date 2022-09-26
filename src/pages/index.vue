<template>
  <div class="flex justify-center main">
    <div class="flex flex-col container">
      <Banner />
      <div id="AboutUs">
        <about-us />
      </div>
      <Collection />
      <div id="features">
      <Features />
    </div>
      <div id="RoadMap">
        <RoadMap />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: #161432;
  min-height: 100vh;
}
</style>
<style lang="scss">
.desktop {
  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.mobile {
  @media only screen and (min-width: 767px) {
    display: none;
  }
}
</style>
