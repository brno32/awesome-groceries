<template>
  <div>
    <list-header bgColor="bg-orange-4">To Buy</list-header>
    <q-list bordered separator>
      <grocery
        v-for="(grocery, key) in groceriesToBuy"
        :key="key"
        :grocery="grocery"
        :id="key"
      >
      </grocery>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['groceriesToBuy'],
  components: {
    grocery: require('components/Groceries/Grocery').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }
}
</script>
