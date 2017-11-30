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
      return this.dog.url.endsWith('.mp4')
    }
  }
}
</script>

<style lang="sass" scoped>
  .Dog
    max-width: 680px
    padding: 0 20px
  img
    max-width: 100%
  video
    width: 100%
</style>
