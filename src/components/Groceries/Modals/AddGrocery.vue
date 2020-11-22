<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <div class="row">
        <q-card-section class="q-pt-none col">
          <q-input
            clearable
            autofocus
            outlined
            v-model="grocery.name"
            label="Item name"
            :rules="[(val) => !!val || 'Field is required']"
          >
          </q-input>
        </q-card-section>
      </div>

      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" type="submit" />
      </q-card-actions>
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
      .default
  }
}
</script>
