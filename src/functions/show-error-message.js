import { Dialog } from 'quasar'

export function errorMessage (errorMessage) {
  Dialog.create({ title: 'Error', message: errorMessage })
}
