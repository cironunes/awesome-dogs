<template>
  <div class="Dog">
    <img v-bind:src="dog.url" v-if="!isVideo" v-bind:class="{ small: size === 'small' }">
    <video controls v-if="isVideo" autoplay v-bind:class="{ small: size === 'small' }">
      <source v-bind:src="dog.url" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  props: ['dog', 'size'],
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
    margin: 0 auto
  img
    max-width: 100%
    border: 2px solid #979797
  video
    width: 100%
    border: 2px solid #979797
  .small
    max-height: 400px
</style>
