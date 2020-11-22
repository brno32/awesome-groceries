import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  groceries: {
    1: {
      name: 'Apples',
      completed: false
    },
    3: {
      name: 'Grapes',
      completed: false
    },
    2: {
      name: 'Bananas',
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
  groceriesFiltered: (state, getters) => {
    const tasksSorted = getters.tasksSorted
    const groceries = {}

    if (state.search) {
      Object.keys(tasksSorted).forEach((key) => {
        const grocery = tasksSorted[key]

        if (grocery.name.toLowerCase().includes(state.search.toLowerCase())) {
          groceries[key] = grocery
        }
      })

      return groceries
    } else {
      return tasksSorted
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
  },
  tasksSorted: (state) => {
    const tasksSorted = {}
    const keysOrdered = Object.keys(state.groceries)

    keysOrdered.sort((a, b) => {
      const aProp = state.groceries[a].name.toLowerCase()
      const bProp = state.groceries[b].name.toLowerCase()

      if (aProp > bProp) {
        return 1
      } else if (aProp < bProp) {
        return -1
      } else {
        return 0
      }
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.groceries[key]
    })

    return tasksSorted
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
