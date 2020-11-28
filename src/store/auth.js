import { firebaseAuth } from 'boot/firebase'

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
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {})
      .catch((error) => console.error(error.message))
  },
  loginUser ({ commit }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {})
      .catch((error) => console.error(error.message))
  },
  logoutUser () {
    firebaseAuth.signOut()
  },
  handleAuthStateChange ({ commit }) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        commit('setLoggedIn', true)
        this.$router.push('/').catch(err => { console.error(err) })
      } else {
        commit('setLoggedIn', false)
        this.$router.replace('/auth').catch(err => { console.error(err) })
      }
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
