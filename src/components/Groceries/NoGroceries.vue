<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No groceries to buy!
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        label="Add Item"
        @click="$root.$emit('show-add-item')"
      />
    </template>
  </q-banner>
</template>
