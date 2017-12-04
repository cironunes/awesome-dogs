<template>
  <div class="Carousel">
    <div class="Carousel__dashboard">
      <input type="text" placeholder="amount of items per time" v-model="amountPerTime">
      <br>
      <span>Total: {{ total }}</span>
      <br>
      <span>Current step: {{ currentStep }}</span>
      <br>
      <span>Steps: {{ Math.floor(steps) }}</span>
      <br>
      <span>Position: {{ position }}</span>
      <br>
      <span>Ghost position: {{ ghostPosition }}</span>
      <br>
      <span>Is ghost visible? {{ isGhostVisible }}</span>
      <br>
      <span>Visible amount: {{ visibleAmount }}</span>
      <br>
      <span>Item size: {{ itemSize }}</span>
      <br>
    </div>
    <div class="Carousel__canvas">
      <ul class="Carousel__container">
        <li v-for="(dog, index) in dogs" :key="dog.id" class="Carousel__item">
          <img v-bind:src="dog.url" class="Carousel__image">
        </li>
      </ul>
      <ul class="Carousel-ghost Carousel__container" v-bind:class="{ 'Carousel-ghost--active': isGhostVisible }">
        <li v-for="(dog, index) in dogs" :key="dog.id" class="Carousel__item">
          <img v-bind:src="dog.url" class="Carousel__image">
        </li>
      </ul>
      <div class="Carousel__controls">
        <button class="Carousel__control Carousel__control--left" v-on:click="prev()"><</button>
        <button class="Carousel__control Carousel__control--right" v-on:click="forward()">></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    dogs: {},
    step: { type: Number, default: 0 }
  },
  data () {
    return {
      amountPerTime: 1,
      visibleAmount: 1,
      currentStep: 0,
      itemSize: 960
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$ghost = this.$el.querySelector('.Carousel-ghost')
      this.$carouselContainer = this.$el.querySelector('.Carousel__container')
      this.$carouselCanvas = this.$el.querySelector('.Carousel__canvas')
      this.$carouselImages = this.$el.querySelector('.Carousel__image')

      window.addEventListener('resize', this.onWindowResize)

      this.currentStep = this.step
      this.setVisibleAmount()
      this.setItemSize()
    })
  },
  computed: {
    total () {
      return this.dogs.length
    },
    steps () {
      return this.total / this.amountPerTime
    },
    isGhostVisible () {
      return this.currentStep < 0 || this.total < this.visibleAmount + this.currentStep
    },
    position () {
      const size = this.itemSize * Math.abs(this.currentStep)

      if (this.currentStep >= 0) {
        return size * -1
      }

      return size
    },
    ghostPosition () {
      if (this.currentStep >= 0) {
        return this.itemSize * (this.total - this.currentStep)
      }

      return this.itemSize * (this.total + this.currentStep) * -1
    }
  },
  methods: {
    onWindowResize () {
      this.setVisibleAmount()
      this.setItemSize()
    },
    setItemSize() {
      this.itemSize = this.$el ? this.$el.querySelector('.Carousel__image').clientWidth : 960
    },
    setVisibleAmount () {
      this.visibleAmount = Math.max(Math.floor(this.$carouselCanvas.clientWidth / this.itemSize), 1)
    },
    prev () {
      this.currentStep = this.currentStep - 1
      if (Math.abs(this.currentStep) === this.steps) {
        this.currentStep = 0
      }
    },
    forward () {
      this.currentStep = this.currentStep + 1
      if (this.currentStep === this.steps) {
        this.currentStep = 0
      }
    },
    draw () {
      this.$carouselContainer.style.transform = `translateX(${this.position}px)`
      this.$ghost.style.transform = `translateX(${this.ghostPosition}px)`
    }
  },
  watch: {
    currentStep (step) {
      this.draw()
    }
  }
}
</script>

<style>
.Carousel {
  position: relative;
}

.Carousel__controls {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.Carousel__canvas {
  margin: 0 auto;
  overflow: hidden;
  border: 5px solid #444;
  max-width: calc(320px * 3 + 10px);
  height: 540px;
  position: relative;
}

.Carousel__container {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.Carousel__dashboard {
  display: none;
}

.Carousel__control {
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: 0;
  font-family: consolas, monospace;
  font-weight: bold;
  font-size: 60px;
  color: #fff;
  cursor: pointer;
}

.Carousel__control:hover  {
  background-color: rgba(0, 0, 0, .1);
}

.Carousel__control--left { text-align: left }
.Carousel__control--right { text-align: right }

.Carousel__image {
  width: 960px;
  min-height: 540px;
}

@media only screen and (min-width: 320px) and (max-width: 610px) {
  .Carousel__canvas {
    max-width: 320px;
    height: 180px;
  }

  .Carousel__image {
    width: 320px;
    min-height: 180px;
  }
}

@media only screen and (min-width: 611px) and (max-width: 910px) {
  .Carousel__canvas {
    max-width: 768px;
    height: 432px;
  }

  .Carousel__image {
    width: 768px;
    min-height: 432px;
  }
}


.Carousel-ghost {
  z-index: 1;
  visibility: hidden;
}
.Carousel-ghost--active {
  visibility: visible;
}
</style>
