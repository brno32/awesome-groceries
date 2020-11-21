<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="grocery in groceries"
        :key="grocery.id"
        clickable
        @click="grocery.completed = !grocery.completed"
        :class="grocery.completed ? 'bg-green-1' : 'bg-orange-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="grocery.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{
            'text-strikethrough': grocery.completed
          }">{{ grocery.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      groceries: [
        {
          id: 1,
          name: 'Apples',
          completed: false
        },
        {
          id: 2,
          name: 'Oranges',
          completed: false
        },
        {
          id: 3,
          name: 'Butter',
          completed: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
