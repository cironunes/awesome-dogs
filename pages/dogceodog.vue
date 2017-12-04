<template>
  <div class="ad-page ad-page--image">
    <div class="ad-page__container ad-page__container--full">
      <Carousel v-bind:dogs="dogs" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '~/components/Carousel'

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
