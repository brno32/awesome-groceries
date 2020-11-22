<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="q-mt-lg">
      <list-header bgColor="bg-green-4">Bought</list-header>
      <q-list bordered separator>
        <grocery
          v-for="(grocery, key) in groceriesBought"
          :key="key"
          :grocery="grocery"
          :id="key"
        >
        </grocery>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['groceriesBought'],
  components: {
    grocery: require('components/Groceries/Grocery').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }
}
</script>
