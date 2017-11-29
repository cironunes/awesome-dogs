<template>
  <div class="ad-page">
    <div class="ad-page__container">
      <Carousel v-bind:dogs="dogs" />
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from '~/plugins/axios'
import Carousel from '~/components/Carousel'

export default {
  computed: mapState(['dogs']),
  mounted () {
    this.$store.dispatch('GET_DOGS_THE_DOGS')
  },
  components: {
    Carousel
  }
}
</script>
