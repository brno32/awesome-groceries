// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAIq6SL0SwNJDTEO4C5Meudgf1Fz4bxKxs',
  authDomain: 'awesome-groceries-7bc57.firebaseapp.com',
  databaseURL: 'https://awesome-groceries-7bc57.firebaseio.com',
  projectId: 'awesome-groceries-7bc57',
  storageBucket: 'awesome-groceries-7bc57.appspot.com',
  messagingSenderId: '82977832350',
  appId: '1:82977832350:web:12b33bf2f0950cd872ea8f'
}
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig)
var firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
