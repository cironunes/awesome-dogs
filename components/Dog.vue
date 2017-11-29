<template>
  <div class="Dog">
    <img v-bind:src="dog.url" v-if="!isVideo">
    <video controls v-if="isVideo" autoplay>
      <source v-bind:src="dog.url" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  props: ['dog'],
  computed: {
    isVideo () {
      console.log(this.dog)
      return this.dog.url.endsWith('.mp4')
    }
  }
}
</script>

<style lang="sass">
  .Dog
    max-width: 680px
  img
    max-width: 100%
</style>
