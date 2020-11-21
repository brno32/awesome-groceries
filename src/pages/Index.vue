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
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('groceries', ['groceries'])
  },
  components: {
    grocery: require('../components/Groceries/Grocery').default
  }
}
</script>

<style>
</style>
