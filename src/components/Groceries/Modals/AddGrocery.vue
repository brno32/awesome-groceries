<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-grocery-name :name.sync="grocery.name"></modal-grocery-name>
      </q-card-section>
      <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      grocery: {
        name: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('groceries', ['addGrocery']),
    submitForm () {
      this.addGrocery(this.grocery)
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Groceries/Modals/Shared/ModalHeader.vue')
      .default,
    'modal-grocery-name': require('components/Groceries/Modals/Shared/ModalGroceryName.vue')
      .default,
    'modal-buttons': require('components/Groceries/Modals/Shared/ModalButtons.vue')
      .default
  }
}
</script>
