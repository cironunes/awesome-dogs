<template>
  <div class="ad-page">
    <div class="ad-page__container page-container">
      <h1>Awesome dogs</h1>
      <h2>We connect with the nicest APIs around the web to show you <strong>awesome dog pictures and videos</strong></h2>
      <div class="buttons-container">
        <iframe src="https://ghbtns.com/github-btn.html?user=cironunes&repo=awesome-dogs&type=star&count=true&size=large" frameborder="0" scrolling="0" width="111px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=cironunes&repo=awesome-dogs&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="114px" height="30px"></iframe>
      </div>

      <Dog class="dog" v-bind:dog="dog" v-bind:size="size" />

      <nuxt-link class="ad-btn" to="/thedogapi" tag="button">Show me more</nuxt-link>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page-container
  text-align: center

h1
  font-size: 26px
  text-transform: uppercase
  color: #3D9970
  margin-bottom: 10px

h2
  font-weight: normal
  font-size: 20px
  color: #555555
  margin-bottom: 20px

.buttons-container > iframe
  margin: 0 10px

.dog
  padding: 20px 0
</style>

<script>
import { mapState } from 'vuex'
import Dog from '~/components/Dog'

export default {
  data () {
    return {
      size: 'small'
    }
  },
  computed: mapState(['dog']),
  mounted () {
    this.$store.dispatch('GET_DOG')
  },
  components: {
    Dog
  }
}
</script>

