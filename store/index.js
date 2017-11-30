import axios from '~/plugins/axios'

export const state = () => {
  return {
    dogs: [{ id: 1, url: 'dog1.jpg' }],
    dog: { url: '' }
  }
}

export const mutations = {
  setDogs (state, dogs) {
    state.dogs = dogs
  },
  setDog (state, dog) {
    state.dog = dog
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    // dispatch('GET_DOGS_VISUAL')
  },
  async GET_DOG ({ commit }) {
    const { data } = await axios.get('https://random.dog/woof.json')
    const dog = data
    console.log(dog)
    commit('setDog', dog)
  },
  async GET_DOGS_VISUAL ({ commit }) {
    const { data } = await axios.get('/visualhunt-dogs.json')
    const dogs = data.dogs
    commit('setDogs', dogs)
  },
  async GET_DOGS_THE_DOGS ({ commit }) {
    const { data } = await axios.get('http://api.thedogapi.co.uk/v2/dog.php?limit=13/')
    const dogs = data.data
    commit('setDogs', dogs)
  },
  async GET_DOGS_CEO ({ commit }) {
    const { data } = await axios.get('https://dog.ceo/api/breed/dachshund/images')
    const dogs = data.message.splice(0, 13).map(mapDog)
    commit('setDogs', dogs)
  }
}

const mapDog = (url, id) => {
  return { id, url }
}
