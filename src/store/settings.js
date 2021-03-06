import { LocalStorage } from 'quasar'

const state = {
  settings: {
    darkMode: false
  }
}

const mutations = {
  setDarkMode (state, value) {
    state.settings.darkMode = value
  },
  setSettings (state, settings) {
    Object.assign(state.settings, settings)
  }
}

const actions = {
  setDarkMode ({ commit, dispatch }, value) {
    commit('setDarkMode', value)
    dispatch('saveSettings')
  },
  saveSettings ({ state }) {
    LocalStorage.set('settings', state.settings)
  },
  retrieveSettings ({ commit }) {
    const settings = LocalStorage.getItem('settings')

    if (settings) {
      commit('setSettings', settings)
    }
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
