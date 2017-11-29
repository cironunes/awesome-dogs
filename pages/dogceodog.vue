<template>
  <div class="ad-page">
    <div class="ad-page__container">
      <Carousel v-bind:dogs="dogs" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '~/components/Carousel'
import axios from '~/plugins/axios'

export default {
  computed: mapState(['dogs']),
  mounted () {
    this.$store.dispatch('GET_DOGS_CEO')
  },
  components: {
    Carousel
  }
}
</script>
