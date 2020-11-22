import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  groceries: {
    1: {
      name: 'Apples',
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
  },
  addGrocery: (state, payload) => {
    Vue.set(state.groceries, payload.id, payload.grocery)
  }
}

const actions = {
  updateGrocery: ({ commit }, payload) => {
    commit('updateGrocery', payload)
  },
  deleteGrocery: ({ commit }, id) => {
    commit('deleteGrocery', id)
  },
  addGrocery: ({ commit }, grocery) => {
    const groceryId = uid()
    const payload = {
      id: groceryId,
      grocery
    }
    commit('addGrocery', payload)
  }
}

const getters = {
  groceriesToBuy: (state) => {
    const groceries = {}
    Object.keys(state.groceries).forEach((key) => {
      const grocery = state.groceries[key]
      if (!grocery.completed) {
        groceries[key] = grocery
      }
    })
    return groceries
  },
  groceriesBought: (state) => {
    const groceries = {}
    Object.keys(state.groceries).forEach((key) => {
      const grocery = state.groceries[key]
      if (grocery.completed) {
        groceries[key] = grocery
      }
    })
    return groceries
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
