<template>
  <q-card>
    <modal-header>Edit Item</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-grocery-name
          :name.sync="groceryToEdit.name"
        ></modal-grocery-name>
      </q-card-section>
      <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['grocery', 'id'],
  data () {
    return {
      groceryToEdit: {
        name: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('groceries', ['updateGrocery']),
    submitForm () {
      this.updateGrocery({
        id: this.id,
        updates: this.groceryToEdit
      })
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
  },
  mounted () {
    Object.assign(this.groceryToEdit, this.grocery)
  }
}
</script>
