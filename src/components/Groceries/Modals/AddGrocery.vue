<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Item</div>
      <q-space></q-space>
      <q-btn flat rounded dense icon="close" v-close-popup />
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <div class="row">
        <q-card-section class="q-pt-none col">
          <q-input
            outlined
            v-model="grocery.name"
            label="Item name"
            :rules="[(val) => !!val || 'Field is required']"
          />
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
  }
}
</script>
