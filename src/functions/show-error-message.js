import { Dialog, Loading } from 'quasar'

export function errorMessage (errorMessage) {
  Loading.hide()
  Dialog.create({ title: 'Error', message: errorMessage })
}
