<template>
  <div class="ad-page">
    <Dog v-bind:dog="dog" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Dog from '~/components/Dog'

export default {
  computed: mapState(['dog']),
  mounted () {
    this.$store.dispatch('GET_DOG')
  },
  components: {
    Dog
  }
}
</script>
