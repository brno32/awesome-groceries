<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="(grocery, key) in groceries"
        :key="key"
        clickable
        @click="grocery.completed = !grocery.completed"
        :class="grocery.completed ? 'bg-green-1' : 'bg-orange-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="grocery.completed" />
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
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('groceries', ['groceries'])
  }
}
</script>

<style>
</style>
