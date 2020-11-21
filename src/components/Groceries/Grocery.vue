<template>
  <q-item
    clickable
    @click="updateGrocery({ id, updates: { completed: !grocery.completed } })"
    :class="grocery.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section side top>
      <q-checkbox :value="grocery.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{
          'text-strikethrough': grocery.completed,
        }"
        >{{ grocery.name }}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['grocery', 'id'],
  methods: {
    ...mapActions('groceries', ['updateGrocery'])
  }
}
</script>

<style scoped>
</style>
