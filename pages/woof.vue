<template>
  <div class="ad-page">
    <div class="Dog">
      <img v-bind:src="dog.url" v-if="!isVideo">
      <video controls v-if="isVideo" autoplay>
        <source v-bind:src="dog.url" type="video/mp4">
      </video>
    </div>

    <!-- <Dog v-bind:dog="dog" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from '~/plugins/axios'
import Dog from '~/components/Dog'

export default {
  computed: {
    ...mapState(['dog']),
    isVideo () {
      return this.dog.url.endsWith('.mp4')
    }
  },
  mounted () {
    this.$store.dispatch('GET_DOG')
  },
  components: {
    Dog
  }
}
</script>

<style lang="sass" scoped>
  .Dog
    max-width: 680px
  img
    max-width: 100%
</style>
