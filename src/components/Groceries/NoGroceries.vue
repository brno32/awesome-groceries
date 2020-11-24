<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <q-banner :class="$q.dark.isActive ? 'bg-grey-6' : 'bg-grey-3'">
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
      </template> </q-banner
  ></transition>
</template>
