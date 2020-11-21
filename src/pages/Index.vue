<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <grocery
        v-for="(grocery, key) in groceries"
        :key="key"
        :grocery="grocery"
        :id="key"
      >
      </grocery>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddGrocery = true"
      />
    </div>

    <q-dialog v-model="showAddGrocery">
      <add-task></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return { showAddGrocery: !false }
  },
  computed: {
    ...mapGetters('groceries', ['groceries'])
  },
  components: {
    grocery: require('../components/Groceries/Grocery').default,
    'add-task': require('../components/Groceries/Modals/AddGrocery').default
  }
}
</script>

<style>
</style>
