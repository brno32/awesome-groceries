import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { errorMessage } from 'src/functions/show-error-message'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser ({ commit }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {})
      .catch((error) => console.error(error.message))
  },
  loginUser ({ commit }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {})
      .catch((error) => errorMessage(error.message))
  },
  logoutUser () {
    firebaseAuth.signOut()
  },
  handleAuthStateChange ({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => { console.error(err) })
        dispatch('groceries/fbReadData', null, { root: true })
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => { console.error(err) })
        commit('groceries/setDownloaded', false, { root: true })
      }
      Loading.hide()
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
