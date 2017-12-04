<template>
  <div class="ad">
    <header class="ad-header">
      <nuxt-link class="ad-header__logo" to="/" tag="h1">
        <img src="awesomedogs-icon.svg">
      </nuxt-link>
      <nav class="ad-header__nav">
        <nuxt-link class="ad-header__nav-item" to="/thedogapi">The dog API</nuxt-link>
        <nuxt-link class="ad-header__nav-item" to="/dogceodog">Dog CEO Dog</nuxt-link>
        <nuxt-link class="ad-header__nav-item" to="/visualhunt">Visual hunt</nuxt-link>
        <nuxt-link class="ad-header__nav-item" to="/woof">Woof</nuxt-link>
      </nav>
    </header>

    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: Roboto;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
