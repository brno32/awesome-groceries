import { LocalStorage } from 'quasar'

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
  setDarkMode ({ commit, dispatch }, value) {
    commit('setDarkMode', value)
    dispatch('saveSettings')
  },
  saveSettings ({ state }) {
    LocalStorage.set('settings', state.settings)
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
