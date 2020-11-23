const state = {
  settings: {
    darkMode: false
  }
}

const mutations = {
  setDarkMode (state, value) {
    state.settings.darkMode = value
  }
}

const actions = {
  setDarkMode ({ commit }, value) {
    commit('setDarkMode', value)
  }
}

const getters = {
  settings: (state) => state.settings
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
