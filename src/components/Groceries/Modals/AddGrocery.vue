<template>
  <q-card>
    <modal-header>Add Item</modal-header>
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
import mixinAddEditGroceryMixin from 'src/mixins/mixin-add-edit-grocery'

export default {
  mixins: [mixinAddEditGroceryMixin],
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
  }
}
</script>
