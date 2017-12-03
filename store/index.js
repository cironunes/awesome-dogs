const INITIAL_STATE = {
  dogs: [
    { id: 1, url: 'dog1.jpg' },
    { id: 2, url: 'dog2.jpg' },
    { id: 3, url: 'dog3.jpg' }
  ],
  dog: { url: '' }
};

export const state = () => {
  return INITIAL_STATE
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
    // dispatch('GET_DOGS')
  },
  async GET_DOG ({ commit }) {
    const { data } = await this.$axios.get('/woof-api')
    const dog = data
    commit('setDog', dog)
  },
  async GET_DOGS_VISUAL ({ commit }) {
    const { data } = await this.$axios.get('/visualhunt-dogs.json')
    const dogs = data.dogs
    commit('setDogs', dogs)
  },
  async GET_DOGS_THE_DOGS ({ commit }) {
    const { data } = await this.$axios.get('/the-dog-api')
    const dogs = data.data
    commit('setDogs', dogs)
  },
  async GET_DOGS_CEO ({ commit }) {
    const { data } = await this.$axios.get('//dog.ceo/api/breed/dachshund/images')
    const dogs = data.message.splice(0, 13).map(mapDog)
    commit('setDogs', dogs)
  }
}

const mapDog = (url, id) => {
  return { id, url }
}
