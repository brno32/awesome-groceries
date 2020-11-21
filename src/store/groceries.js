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

}

const actions = {

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
