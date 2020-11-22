import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  groceries: {
    1: {
      name: 'Apples',
      completed: false
    }
  },
  search: ''
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
  },
  setSearch (state, value) {
    state.search = value
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
  },
  setSearch: ({ commit }, value) => {
    commit('setSearch', value)
  }
}

const getters = {
  groceriesFiltered: (state) => {
    const groceries = {}

    if (state.search) {
      Object.keys(state.groceries).forEach((key) => {
        const grocery = state.groceries[key]

        if (grocery.name.toLowerCase().includes(state.search.toLowerCase())) {
          groceries[key] = grocery
        }
      })

      return groceries
    } else {
      return state.groceries
    }
  },
  groceriesToBuy: (state, getters) => {
    const groceriesFiltered = getters.groceriesFiltered
    const groceries = {}
    Object.keys(groceriesFiltered).forEach((key) => {
      const grocery = groceriesFiltered[key]
      if (!grocery.completed) {
        groceries[key] = grocery
      }
    })
    return groceries
  },
  groceriesBought: (state, getters) => {
    const groceriesFiltered = getters.groceriesFiltered
    const groceries = {}
    Object.keys(groceriesFiltered).forEach((key) => {
      const grocery = groceriesFiltered[key]
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
