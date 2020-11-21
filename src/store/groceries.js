import Vue from 'vue'

const state = {
  groceries: {
    1: {
      name: 'Apples',
      completed: false
    },
    2: {
      name: 'Oranges',
      completed: false
    },
    3: {
      name: 'Butter',
      completed: false
    }
  }
}

const mutations = {
  updateGrocery: (state, payload) => {
    Object.assign(state.groceries[payload.id], payload.updates)
  },
  deleteGrocery: (state, id) => {
    Vue.delete(state.groceries, id)
  }
}

const actions = {
  updateGrocery: ({ commit }, payload) => {
    commit('updateGrocery', payload)
  },
  deleteGrocery: ({ commit }, id) => {
    commit('deleteGrocery', id)
  }
}

const getters = {
  groceries: (state) => {
    return state.groceries
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
