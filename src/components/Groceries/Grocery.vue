<template>
  <q-item
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
</template>

<script>
export default {
  props: ['grocery', 'id']
}
</script>

<style scoped>
</style>
