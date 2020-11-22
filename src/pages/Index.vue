<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search></search>
    </div>

    <p
      v-if="
        !!search &&
        Object.keys(groceriesToBuy).length < 1 &&
        Object.keys(groceriesBought).length < 1
      "
    >
      No search results
    </p>

    <div class="relative-position">
      <no-groceries
        v-if="Object.keys(groceriesToBuy).length < 1 && !search"
      ></no-groceries>
      <groceries-to-buy
        :groceriesToBuy="groceriesToBuy"
        v-if="Object.keys(groceriesToBuy).length > 0"
      ></groceries-to-buy>
      <groceries-bought
        :groceriesBought="groceriesBought"
        v-if="Object.keys(groceriesBought).length > 0"
      ></groceries-bought>
    </div>

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
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return { showAddGrocery: false }
  },
  computed: {
    ...mapGetters('groceries', ['groceriesToBuy', 'groceriesBought']),
    ...mapState('groceries', ['search'])
  },
  components: {
    'add-task': require('components/Groceries/Modals/AddGrocery').default,
    'groceries-to-buy': require('components/Groceries/GroceriesToBuy.vue')
      .default,
    'groceries-bought': require('components/Groceries/GroceriesBought.vue')
      .default,
    'no-groceries': require('components/Groceries/NoGroceries').default,
    search: require('components/Groceries/Tools/Search.vue').default
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
