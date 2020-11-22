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
import mixinAddEditGroceryMixin from 'src/mixins/mixin-add-edit-grocery'

export default {
  mixins: [mixinAddEditGroceryMixin],
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
  created () {
    Object.assign(this.groceryToEdit, this.grocery)
  }
}
</script>
