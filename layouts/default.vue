<template>
  <div class="ad">
    <header class="ad-header">
      <nuxt-link class="title" to="/" tag="h1">Awesome Dogs</nuxt-link>
      <nav class="ad-header__nav">
        <nuxt-link class="ad-header__nav-item" to="/thedogapi">The dog API</nuxt-link>
        <nuxt-link class="ad-header__nav-item" to="/dogceodog">Dog CEO Dog</nuxt-link>
        <nuxt-link class="ad-header__nav-item" to="/visualhunt">Visual hunt</nuxt-link>
      </nav>
    </header>

    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
