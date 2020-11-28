import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'

const state = {
  groceries: {
    // a: {
    //   name: 'Apples',
    //   completed: false
    // },
    // c: {
    //   name: 'Grapes',
    //   completed: false
    // },
    // b: {
    //   name: 'Bananas',
    //   completed: false
    // }
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
  },
  fbReadData: ({ commit }, value) => {
    const userId = firebaseAuth.currentUser.uid
    const userGroceries = firebaseDb.ref('groceries/' + userId)

    userGroceries.on('child_added', snapshot => {
      const grocery = snapshot.val()

      const payload = {
        id: snapshot.key,
        grocery: grocery
      }

      commit('addGrocery', payload)
    })
  }
}

const getters = {
  groceriesFiltered: (state, getters) => {
    const groceriesSorted = getters.groceriesSorted
    const groceries = {}

    if (state.search) {
      Object.keys(groceriesSorted).forEach((key) => {
        const grocery = groceriesSorted[key]

        if (grocery.name.toLowerCase().includes(state.search.toLowerCase())) {
          groceries[key] = grocery
        }
      })

      return groceries
    } else {
      return groceriesSorted
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
  groceriesSorted: (state) => {
    const groceriesSorted = {}
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
      groceriesSorted[key] = state.groceries[key]
    })

    return groceriesSorted
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
