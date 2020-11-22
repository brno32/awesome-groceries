<template>
  <q-page class="q-pa-md">
    <no-groceries v-if="Object.keys(groceriesToBuy).length < 1"></no-groceries>
    <groceries-to-buy
      :groceriesToBuy="groceriesToBuy"
      v-else
    ></groceries-to-buy>
    <groceries-bought
      :groceriesBought="groceriesBought"
      v-if="Object.keys(groceriesBought).length > 0"
    ></groceries-bought>

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
      <add-task @close="showAddGrocery = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return { showAddGrocery: false }
  },
  computed: {
    ...mapGetters('groceries', ['groceriesToBuy', 'groceriesBought'])
  },
  components: {
    'add-task': require('components/Groceries/Modals/AddGrocery').default,
    'groceries-to-buy': require('components/Groceries/GroceriesToBuy.vue')
      .default,
    'groceries-bought': require('components/Groceries/GroceriesBought.vue')
      .default,
    'no-groceries': require('components/Groceries/NoGroceries').default
  },
  mounted () {
    this.$root.$on('show-add-item', () => {
      this.showAddGrocery = true
    })
  }
}
</script>

<style>
</style>
